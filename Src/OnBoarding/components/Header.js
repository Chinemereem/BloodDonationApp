/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  View,
} from 'react-native';
import {BroBg, Group} from '../asset/index';
import Colors from './Colors';
import HermesBadge from './HermesBadge';
import {wp, hp} from '../utils/index';

const Header = () => {
  const isDarkMode = useColorScheme() === 'dark';
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
      <Image source={BroBg} resizeMode="contain" style={styles.image} />
      <HermesBadge />
      <Text style={{textAlign: 'center'}}>Find Blood Donors</Text>
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

      <Image source={Group} resizeMode="contain" style={styles.redImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    // paddingBottom: 40,
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
  },
});

export default Header;
