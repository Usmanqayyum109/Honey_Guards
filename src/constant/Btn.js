import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

export default function Btn({title, press}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'black',
        borderRadius: 30,
        alignItems: 'center',
        width: 300,
        paddingVertical: 4,
      }}
      onPress={press}>
      <Text style={{fontSize: 24, color: 'white'}}>{title}</Text>
    </TouchableOpacity>
  );
}
