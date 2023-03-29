import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { HttpStatusCodes } from '@constants/common-constants';
import { EAuth } from '@constants/auth-constants';

const instance = axios.create({ baseURL: Config.REACT_NATIVE_API_URL });

const requestHandler = async (config: AxiosRequestConfig) => {
  const accessToken = await AsyncStorage.getItem(EAuth.ACCESS_TOKEN);
  config.headers = {
    Authorization: `Bearer ${accessToken}`,
    ...config.headers,
  };
  config.params = {
    ...config.params,
    version: Date.now(),
  };
  return config;
};

const responseErrorHandler = async (err: AxiosError) => {
  const originalRequest: any = err.config;

  if (err?.response?.status === HttpStatusCodes.UNAUTHORIZED && !originalRequest._retry) {
    try {
      originalRequest._retry = true;
      const refreshToken = await AsyncStorage.getItem(EAuth.REFRESH_TOKEN);

      const { data }: AxiosResponse<any> = await axios({
        baseURL: Config.REACT_NATIVE_API_URL,
        url: '/auth/refresh-token',
        data: { refreshToken },
      });

      // store.dispatch(setAuthStoreAction(data));
      // axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
      // return axiosInstance(originalRequest);
    } catch (e: any) {
      // store.dispatch(clearAuthStoreAction());
      return Promise.reject(e?.response?.data ? e?.response?.data : e);
    }
  }

  return Promise.reject(err);
};

instance.interceptors.request.use(requestHandler as any, (err) => Promise.reject(err));
instance.interceptors.response.use((response: any) => response, responseErrorHandler);

export { instance as ApiClient };
