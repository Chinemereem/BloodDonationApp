import React, {Children} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {hp} from '../utils';
const Button = ({style, onPress, title}) => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: '#FF2156',
          borderRadius: hp(20),
          padding: 10,
          paddingHorizontal: 7,
          alignItems: 'center',
          marginTop: hp(10),
          width: '90%',
        },
        style,
      ]}
      onPress={onPress}>
      <Text style={[{fontSize: hp(18), color: '#ffff'}, style]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
