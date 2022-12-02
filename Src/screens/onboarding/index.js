import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import {BroBg, Group, Rafiki, Bloodbar, Logo} from '../../asset/index';
import Colors from '../../components/Colors';
import {wp, hp} from '../../utils/index';
import {HStack} from '../../components/listview';

const Header = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [screen, setscreen] = useState(1);
  const ref = useRef;
  const value = 1;
  const prevCount = screen;
  useEffect(() => {
    ref.current = value;

    if (prevCount && screen === 4) {
      setscreen(1);
    }
  }, [screen, prevCount, ref, value]);
  console.log(screen, 'screenee');
  const handleImage = () => {
    if (screen === 1) {
      return BroBg;
    }
    if (screen === 2) {
      return Rafiki;
    }
    if (screen === 3) {
      return Logo;
    }
    return BroBg;
  };
  const handleBtn = () => {
    setscreen(screen + 1);
  };
  const handleText = () => {
    if (screen === 1) {
      return 'Find Blood Donors';
    }
    if (screen === 2) {
      return 'Post A Blood Request';
    }
    if (screen === 3) {
      return 'Dare To Donate';
    }
    return null;
  };
  const barImg = () => {
    if (screen === 1) {
      return Group;
    }
    if (screen === 2) {
      return Bloodbar;
    }
    return null;
  };
  return (
    <View
      accessibilityRole="image"
      testID="new-app-screen-header"
      style={[
        styles.background,
        {
          backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        },
      ]}>
      <Image source={handleImage()} resizeMode="contain" style={styles.image} />
      <Text
        style={{textAlign: 'center', marginTop: hp(60), marginBottom: hp(20)}}>
        {handleText()}
      </Text>
      <Text
        style={[
          styles.text,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu tristique
        tristique quam in.
      </Text>
      <Text> {`Now: ${screen}, before: ${prevCount}`} </Text>
      <Image source={barImg()} resizeMode="contain" style={styles.redImage} />
      {screen === 3 ? (
        <View style={styles.view}>
          <TouchableOpacity
            style={{
              borderColor: '#FF2156',
              borderWidth: 2,
              borderRadius: 20,
              width: wp(250),
              padding: 5,
              paddingHorizontal: 7,
              alignItems: 'center',
            }}
            onPress={() => navigation.navigate('Login')}>
            <Text style={{fontSize: hp(18)}}> LOG IN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleBtn()}
            style={{
              marginTop: hp(30),
              backgroundColor: '#FF2156',
              borderRadius: 20,
              width: wp(250),
              padding: 5,
              paddingHorizontal: 10,
              alignItems: 'center',
            }}>
            <Text style={{color: '#ffffff', fontSize: hp(17)}}> REGISTER</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <HStack style={styles.hstack}>
          <TouchableOpacity style={styles.touchable}>
            <Text style={{fontSize: hp(18)}}> Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleBtn()}>
            <Text style={styles.touchableText}> Next</Text>
          </TouchableOpacity>
        </HStack>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    paddingBottom: hp(290),
    paddingTop: 96,
    paddingHorizontal: 32,
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: wp(298),
    height: wp(180),

    overflow: 'hidden',
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

export default Header;
