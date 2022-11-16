import {Dimensions, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';

import Loader from '../../assets/svg/loader/Loader.svg';
import {API} from '../../api/api';

const {width, height} = Dimensions.get('window');
const Preloader = ({navigation}) => {
  const getFromAPI = () => {
    API.test().then(res => {
      console.log('Application is loaded', navigation);
      navigation.navigate('Authorization');
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
