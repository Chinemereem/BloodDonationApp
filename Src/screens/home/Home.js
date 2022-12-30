import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Pressable,
  Dimensions,
  ImageBackground,
  ReactView,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {RectanglePng, PanaPng, Group63Png} from '../../asset';
import {MenueIcon} from '../../asset/Svg';
import * as colors from '../../components';
import {NotifyIcon} from '../../asset/Svg';
import {hp, wp} from '../../utils';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const data = [
    {
      id: '1',
      image: require('../../asset/Rectangle.png'),
    },
    {
      id: '2',
      image: require('../../asset/plist.jpeg'),
    },
    {
      id: '3',
      image: require('../../asset/./hospitalplist.jpeg'),
    },
  ];
  const navigation = useNavigation();
  const carouselRef = useRef(null);
  const viewConfig = {viewAreaCoveragePercentThreshold: 95};
  const [activeIndex, setActiveIndex] = useState(0);
  const onViewRef = useRef(({changed}) => {
    if (changed[0].isViewable) {
      setActiveIndex(changed[0].index);
    }
  });

  return (
    <SafeAreaView style={{backgroundColor: '#FFFfff', flex: 1}}>
      <View style={styles.viewStyle}>
        <MenueIcon style={styles.menuStyle} />
        <View style={styles.notify}>
          <NotifyIcon />
        </View>
        <FlatList
          ref={ref => (carouselRef.current = ref)}
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          viewabilityConfig={viewConfig}
          onViewableItemsChanged={onViewRef.current}
          pagingEnabled={true}
          renderItem={({item, index}) => (
            <Pressable>
              <ImageBackground
                source={item.image}
                imageStyle={styles.ImageStyle}
                style={[styles.imageDimention]}>
                <View style={styles.ImageCountView}>
                  <BlurView
                    blurType="light"
                    blurAmount={10}
                    style={[styles.imageBlurStyle]}
                  />
                  <Text style={styles.textOnImgStyle}>
                    {activeIndex + 1}/{data.length}
                  </Text>
                  <BlurView />
                </View>
              </ImageBackground>
            </Pressable>
          )}
          keyExtractor={(item, index) => item + index}
        />
        <View style={styles.dotView}>
          {data.map(({}, index) => (
            <View
              key={index}
              style={[
                styles.dotStyle,
                {opacity: index === activeIndex ? 1 : 0.5},
              ]}
            />
          ))}
        </View>


      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    marginTop: hp(10),
  },
  menuStyle: {
    position: 'relative',
    marginLeft: hp(20),
  },
  notify: {
    marginLeft: hp(25),
    position: 'absolute',
    left: '80%',
  },
  image: {
    width: '100%',
    height: hp(350),
    borderRadius: 10,
  },
  imageDimention: {
    width: Dimensions.get('window').width - 20,
    height: hp(200),
    marginTop: hp(15),

    alignSelf: 'center',
    justifyContent: 'center',
  },
  ImageStyle: {
    borderRadius: 30,


  },
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
  dotStyle: {
    width: 7,
    height: 7,
    margin: 5,
    borderRadius: 30,
    backgroundColor: '#222',
  },
  ImageCountView: {
    flex: 1,
    justifyContent: 'flex-end',
    bottom:20
   
   
  },
  textOnImgStyle: {
    alignSelf: 'flex-end',
    right: 59,
    bottom:12
    // marginTop: -30,
  },
  imageBlurStyle: {
    marginTop: 50,
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    position: 'absolute',
    right: 50,
    overflow: 'hidden',

    alignSelf: 'flex-end',
  },
});
export default Home;
