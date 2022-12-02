import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import {EmailIcon} from '../asset/Svg';
import {hp} from '../utils';
import {HStack} from './listview';
const TextField = ({value, onChangeText, placeholder, style, icon}) => {
  return (
    <SafeAreaView>
      <HStack
        style={[
          {
            backgroundColor: '#F8F8F8',
            paddingHorizontal: 10,
            borderRadius: 10,
            height: 55,
            marginTop: hp(10),
          },
          style,
        ]}>
        {icon}
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
        />
      </HStack>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginLeft: 12,
    paddingHorizontal: 17,
    borderLeftColor: '#D6D6D6',

    borderLeftWidth: 1,
  },
});

export default TextField;
