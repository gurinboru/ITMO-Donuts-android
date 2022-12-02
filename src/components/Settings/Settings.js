import {Dimensions, StyleSheet, Text, useColorScheme, View} from 'react-native';
import React, {Component, useState} from 'react';
import {Button} from 'native-base';
import SettingsBackground from '../../assets/svg/settings/SettingsBackground.svg';
import {useTheme} from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');

const Settings = ({navigation}) => {
  const {colors, typography} = useTheme();
  const username = 'Username';
  const email = 'user_name@mail.com';
  const balance = 'balance';
  const full_name = 'full_name';

  const onLogOut = () => {
    navigation.replace('Authorization');
  };
  const edit = () => {
    navigation.navigate('SettingsConfirm');
  };

  return (
    <View>
      <SettingsBackground
        width={width}
        height={height}
        preserveAspectRatio="xMin slice"
        style={styles.background}
      />
      <View style={styles.container}>
        <View style={[styles.user, styles.elevation]}>
          <View style={[styles.avatar, {backgroundColor: colors.accent2}]} />
          <View>
            <Text style={[styles.username, {color: colors.darkest1}]}>
              {username}
            </Text>
            <Text style={[styles.email, {color: colors.darkest1}]}>
              {email}
            </Text>
          </View>
        </View>
        <View style={[styles.str, styles.elevation, {top: height * 0.2}]}>
          <Text style={[styles.head, {color: colors.darkest1}]}>
            Full name:
          </Text>
          <Text style={[styles.info, {color: colors.darkest1}]}>
            {full_name}
          </Text>
        </View>
        <View style={[styles.str, styles.elevation, {top: height * 0.22}]}>
          <Text style={[styles.head, {color: colors.darkest1}]}>Balance:</Text>
          <Text style={[styles.info, {color: colors.darkest1}]}>{balance}</Text>
        </View>
        <Button
          style={styles.logout}
          size="xs"
          variant="link"
          _text={{
            color: colors.light2,
            fontSize: 20,
            fontWeight: '700',
          }}
          onPress={onLogOut}>
          Log out
        </Button>
        <Button
          style={[styles.button, {backgroundColor: colors.lightest2}]}
          _text={{
            color: colors.darkest1,
            fontSize: 18,
            fontWeight: '700',
          }}
          onPress={edit}>
          Edit
        </Button>
        {/* <View style={[styles.card, styles.elevation]}>
          <Text>
            Using the elevation style prop to apply box-shadow for Android
            devices
          </Text>
        </View> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    zIndex: -1,
  },
  elevation: {
    shadowColor: 'black',
    elevation: 4,
  },
  container: {
    width: width,
    height: height,
  },
  user: {
    left: width * 0.05,
    top: height * 0.155,
    height: height * 0.11,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: width * 0.05,
    alignItems: 'center',
    width: width * 0.9,
    flexDirection: 'row',
  },
  avatar: {
    top: height * 0,
    left: width * 0,
    height: height * 0.055,
    borderRadius: height,
    width: height * 0.055,
  },
  str: {
    left: width * 0.05,
    height: height * 0.035,
    backgroundColor: 'white',
    borderRadius: 6,
    paddingHorizontal: width * 0.05,
    alignItems: 'center',
    width: width * 0.9,
    flexDirection: 'row',
  },
  username: {
    left: width * 0.05,
    fontSize: 16,
    fontWeight: '700',
  },
  email: {
    left: width * 0.05,
    fontSize: 14,
    fontWeight: '400',
  },
  head: {
    fontSize: 12,
    fontWeight: '700',
  },
  info: {
    left: width * 0.01,
    fontSize: 12,
    fontWeight: '400',
  },
  logout: {
    top: height * 0.35,
  },
  button: {
    top: height * 0.57,
    borderRadius: 16,
    width: width * 0.3,
    left: width * 0.35,
  },
});
export default Settings;
