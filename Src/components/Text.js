import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {hp} from '../utils';

export const RedText = ({title, children}) => {
  return (
    <Text
      style={{
        color: '#FF2156',
      }}>
      {title}
      {children}
    </Text>
  );
};

export const TextWithOnpress = ({title, children, onpress, style}) => {
  return (
    <TouchableOpacity onPress={onpress}>
      <Text
        style={[
          {
            fontSize: hp(18),
          },
          style,
        ]}>
        {title}
        {children}
      </Text>
    </TouchableOpacity>
  );
};
