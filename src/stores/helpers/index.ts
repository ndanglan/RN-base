import { TRootState } from '../reducers';

export const createLoadingSelector = (state: TRootState, key: string) => {
  return state.loadingStore[key];
};
