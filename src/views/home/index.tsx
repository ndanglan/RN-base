import { Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { getSingleTodo } from '@services/example-services';

const Home = () => {
  const fetchTodo = async () => {
    const data = await getSingleTodo();
    console.log({ data });
  };

  useEffect(() => {
    fetchTodo();
  }, []);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
