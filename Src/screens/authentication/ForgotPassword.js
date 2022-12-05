/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useRef} from 'react';

import {
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  View,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {Success} from '../../asset/index';
import Colors from '../../components/Colors';
import {wp, hp} from '../../utils/index';
import Button from '../../components/button';
import TextField from '../../components/Textfield';
import {EmailIcon, LockIcon} from '../../asset/Svg';
import {TextWithOnpress, RedText} from '../../components/Text';
import OtpInputs from 'react-native-otp-inputs';

const ForgotPassword = ({navigation}) => {
  const [value, setValue] = useState('');

  const [otpSent, setOtpSent] = useState(false);
  const [verifyOtp, setverifyOtp] = useState(false);

  const handleSendOtp = () => {
    setOtpSent(true);
  };
  const handleVerifyOtp = () => {
    setverifyOtp(true);
  };
  return (
    <SafeAreaView style={[styles.background]}>
      <View style={{marginLeft: hp(30)}}>
        {otpSent === false ? (
          <>
            <TextField
              placeholder={'Fahimekan28@gmail.com'}
              style={{width: '90%'}}
              icon={<EmailIcon />}
              value={value}
            />
            <Text style={{marginTop: hp(20), fontSize: hp(17), lineHeight: 28}}>
              Your password reset will be send in your {'\n'} registered email
              address.
            </Text>
            <View style={styles.view}>
              <Button
                onPress={() => {
                  handleSendOtp();
                }}
                title={'Send'}
              />
            </View>
          </>
        ) : (
          <>
            {verifyOtp === false ? (
              <>
                <OtpInputs
                  handleChange={code => console.log(code)}
                  numberOfInputs={4}
                  inputContainerStyles={{
                    width: '20%',

                    marginRight: hp(20),
                  }}
                  keyboardType={'name-phone-pad'}
                  inputStyles={{
                    backgroundColor: '#F8F8F8',
                    paddingVertical: '25%',

                    borderColor: 'blue',
                    padding: hp(10),
                    fontSize: hp(20),
                  }}
                />
                <View style={styles.view}>
                  <RedText
                    style={{
                      textAlign: 'right',
                      marginTop: hp(20),
                      width: '90%',
                    }}>
                    Resend Code 49 Sec
                  </RedText>
                  <Button
                    onPress={() => {
                      handleVerifyOtp();
                    }}
                    title={'Verify'}
                  />
                </View>
              </>
            ) : (
              <>
                <Image
                  source={Success}
                  resizeMode="contain"
                  style={{width: wp(120), height: hp(120), alignSelf: 'center'}}
                />
                <Button
                  onPress={() => navigation.navigate('Login')}
                  title={'Finish'}
                />
              </>
            )}
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: wp(60),
    height: wp(80),
    alignSelf: 'center',
  },

  text: {
    fontSize: 20,
    fontWeight: '300',
    fontFamily: 'Cochin',
    lineHeight: 25,
  },
  view: {
    marginTop: hp(20),
  },
});

export default ForgotPassword;
