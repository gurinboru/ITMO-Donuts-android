import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {API} from '../../api/api';
import {useTheme} from '@react-navigation/native';
import Loader from '../../assets/svg/loader/Loader.svg';

const {width, height} = Dimensions.get('window');
const Preloader = ({navigation}) => {
  const [isLoad, setIsLoad] = useState(true);

  const getFromAPI = () => {
    API.test().then(res => {
      console.log('Application is loaded', navigation);
      setIsLoad(false);
      navigation.navigate('Registration');
    });
  };
  useEffect(() => {
    getFromAPI();
  }, []);

  return (
    <View>
      <View style={styles.container}>
        <Loader
          width={width}
          height={height}
          preserveAspectRatio="xMin slice"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
export default Preloader;
