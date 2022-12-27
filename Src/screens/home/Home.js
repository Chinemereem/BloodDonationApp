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
  ImageStyle,
  ImageBackground,
} from 'react-native';
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
      image: require('../../asset/pana.png'),
      text: 'jdjj',
    },
    {
      id: '3',
      image: require('../../asset/Group63.png'),
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
                style={[styles.imageDimention]}
                ImageStyle={styles.ImageStyle}
              />
              <Text>{item.text}</Text>
            </Pressable>
          )}
          keyExtractor={(item, index) => item + index}
        />
        <Image
          source={RectanglePng}
          style={styles.image}
          resizeMode="contain"
        />
        {/* <Text>Home</Text>; */}
        <Text>Don’t have an account?</Text>
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
    height: hp(300),
    marginTop: hp(15),
    backgroundColor: 'red',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  ImageStyle: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'red',
  },
});
export default Home;
