import React, {useState, useEffect, useRef} from 'react';

import {
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {Logo} from '../../asset/index';
import Colors from '../../components/Colors';
import {wp, hp} from '../../utils/index';
import TextField from '../../components/Textfield';
import {
  EmailIcon,
  LockIcon,
  UserIcon,
  PhoneIcon,
  DropIcon,
  LocationIcon,
} from '../../asset/Svg';

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
const Register = ({navigation}) => {
  const [value, setValue] = useState('');
  // useEffect(() => {
  //   ref.current = value;

  //   if (prevCount && screen === 4) {
  //     setscreen(1);
  //   }
  // }, [screen, prevCount, ref, value]);

  const handleBtn = () => {
    console.log('button pressed');
  };
  return (
    <SafeAreaView style={[styles.background]}>
      <View style={{marginTop: hp(40)}}>
        <Image source={Logo} resizeMode="contain" style={styles.image} />
        <Text
          style={{
            textAlign: 'center',
            marginTop: hp(10),
            marginBottom: hp(20),
            fontSize: hp(18),
          }}>
          <RedText>Dare</RedText> To <RedText>Donate</RedText>
        </Text>
        <TextField placeholder={'Fahim Ekan'} icon={<UserIcon />} />
        <TextField
          placeholder={'Fahimekan28@gmail.com'}
          style={{marginTop: hp(20)}}
          icon={<EmailIcon />}
        />
        <TextField
          placeholder={'***********'}
          icon={<LockIcon />}
          value={value}
        />
        <TextField
          placeholder={'+8801628162522'}
          icon={<PhoneIcon />}
          value={value}
        />
        <TextField placeholder={'O+'} icon={<DropIcon />} value={value} />
        <TextField
          placeholder={'Chittagong, BD.'}
          icon={<LocationIcon />}
          value={value}
        />

        <View style={styles.view}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FF2156',
              borderRadius: hp(20),
              width: wp(250),
              padding: 10,
              paddingHorizontal: 7,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: hp(18), color: '#ffff'}}> REGISTER</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={{marginTop: hp(20)}}
        onPress={() => navigation.navigate('Login')}>
        <Text style={{marginTop: hp(20), color: '#7E7E7E', fontSize: hp(15)}}>
          Already have an account? <RedText> Log In</RedText>.
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
});

export default Register;
