import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { decrementbyone, incrementbyone } from '../redux/counterslice';
import { RootState } from '../redux/store';

const Counter1Screen: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increase by 1" onPress={() => dispatch(incrementbyone())} />
      <Button title="Descrease by 1" onPress={() => dispatch(decrementbyone())} />

    </View>
  );
};

export default Counter1Screen;
