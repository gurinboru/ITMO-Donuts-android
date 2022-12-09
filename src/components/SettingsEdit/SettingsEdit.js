import {Dimensions, StyleSheet, Text, useColorScheme, View} from 'react-native';
import React, {Component, useState} from 'react';
import {Button, Input} from 'native-base';
import SettingsEditBackground from '../../assets/svg/settingsEdit/SettingsEditBackground.svg';
import {useTheme} from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');

const SettingsEdit = ({navigation}) => {
  const {colors, typography} = useTheme();
  const [email, setEmail] = useState('user_name@mail.com'); //current values
  const [full_name, setFullName] = useState('full_name');
  const [password, setPassword] = useState('password');

  const onChangeEmail = value => {
    setEmail(value);
  };
  const onChangeName = value => {
    setFullName(value);
  };
  const onChangePassword = value => {
    setPassword(value);
  };
  const onCancel = () => {
    navigation.goBack();
  };

  const onSave = () => {
    //change in data base
    navigation.goBack();
    navigation.goBack();
  };

  return (
    <View>
      <SettingsEditBackground
        width={width}
        height={height}
        preserveAspectRatio="xMin slice"
        style={styles.background}
      />
      <Button
        style={styles.cancel}
        size="xs"
        variant="link"
        _text={{
          color: colors.darkest2,
          fontSize: 18,
          fontWeight: '700',
        }}
        onPress={onCancel}>
        Cancel
      </Button>
      <View style={styles.container}>
        <Text style={[styles.text, {color: colors.darkest1}]}>Login:</Text>
        <Input
          shadow={4}
          _light={{
            bg: 'white',
            borderColor: colors.light1,
            borderRadius: 6,
            _focus: {
              bg: 'white',
            },
          }}
          placeholder={email}
          onChangeText={onChangeEmail}
          style={styles.input}
        />
        <Text style={[styles.text, {color: colors.darkest1}]}>Full name:</Text>
        <Input
          shadow={4}
          _light={{
            bg: 'white',
            borderColor: colors.light1,
            borderRadius: 6,
            _focus: {
              bg: 'white',
            },
          }}
          placeholder={full_name}
          onChangeText={onChangeName}
          style={styles.input}
        />
        <Text style={[styles.text, {color: colors.darkest1}]}>Password:</Text>
        <Input
          type="password"
          shadow={4}
          _light={{
            bg: 'white',
            borderColor: colors.light1,
            borderRadius: 6,
            _focus: {
              bg: 'white',
            },
          }}
          placeholder={'*'.repeat(password.length)}
          onChangeText={onChangePassword}
          style={styles.input}
        />
      </View>
      <Button
        style={[styles.button, {backgroundColor: colors.lightest2}]}
        _text={{
          color: colors.darkest1,
          fontSize: 18,
          fontWeight: '700',
        }}
        onPress={onSave}>
        Save
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    zIndex: -1,
  },
  container: {
    top: height * 0.1,
    justifyContent: 'space-between',
    width: width * 0.9,
    left: width * 0.05,
    height: height * 0.25,
    flexDirection: 'column',
  },
  cancel: {
    top: height * 0.02,
    left: width * 0.3,
  },
  text: {
    top: width * 0.02,
    fontSize: 14,
    fontWeight: '700',
  },
  input: {
    width: width * 0.9,
    height: 30,
  },
  button: {
    top: height * 0.5,
    borderRadius: 16,
    width: width * 0.3,
    left: width * 0.35,
  },
});
export default SettingsEdit;
