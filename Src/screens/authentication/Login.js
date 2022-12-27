import React, {useState, useEffect, useRef} from 'react';

import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Logo} from '../../asset/index';
import {wp, hp} from '../../utils/index';
import TextField from '../../components/Textfield';
import {EmailIcon, LockIcon} from '../../asset/Svg';
import {RedText} from './Register';

const Login = ({navigation}) => {
  const [value] = useState('');

  return (
    <SafeAreaView style={[styles.background]}>
      <View style={{marginTop: hp(40)}}>
        <Image source={Logo} resizeMode="contain" style={styles.image} />
        <Text style={styles.textInView}>
          <RedText>Dare</RedText> To <RedText>Donate</RedText>
        </Text>

        <TextField
          placeholder={'Fahimekan28@gmail.com'}
          style={{marginTop: hp(90)}}
          inputStyle={{fontWeight: '700', fontSize: hp(16)}}
          icon={<EmailIcon />}
        />
        <TextField
          placeholder={'***********'}
          icon={<LockIcon />}
          value={value}
          inputStyle={{fontWeight: '700', fontSize: hp(16)}}
        />

        <View style={styles.view}>
          <TouchableOpacity
            style={styles.loginTouchable}
            onPress={() => navigation.navigate('Home')}>
            <Text style={{fontSize: hp(18), color: '#ffff'}}> LOG IN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableStyle}
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={{color: '#FF2156', fontSize: hp(17)}}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={{marginTop: hp(120)}}
        onPress={() => navigation.navigate('Register')}>
        <Text style={{color: '#7E7E7E', fontSize: hp(15)}}>
          Don’t have an account? <RedText>Register Now</RedText>.
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    paddingBottom: hp(290),
    paddingTop: 96,
    paddingHorizontal: 32,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: wp(60),
    height: wp(80),

    alignSelf: 'center',
  },
  redImage: {
    marginTop: 30,
  },

  text: {
    fontSize: 20,
    fontWeight: '300',
    fontFamily: 'Cochin',
    lineHeight: 25,
  },
  view: {
    marginTop: hp(40),
  },
  hstack: {
    marginTop: hp(200),
  },
  touchable: {
    flex: 1,
  },
  touchableText: {
    color: 'red',
    fontSize: hp(17),
  },
  touchableStyle: {
    marginTop: hp(20),
    padding: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  loginTouchable: {
    backgroundColor: '#FF2156',
    borderRadius: hp(20),
    width: wp(250),
    padding: 15,
    paddingHorizontal: 7,
    alignItems: 'center',
  },
  textInView: {
    textAlign: 'center',
    marginTop: hp(10),
    marginBottom: hp(20),
    fontSize: hp(18),
  },
});

export default Login;
