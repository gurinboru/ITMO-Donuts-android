import {Dimensions, StyleSheet, Text, useColorScheme, View} from 'react-native';
import React, {Component, useState} from 'react';
import {Button, Input, Pressable, ArrowBackIcon} from 'native-base';
import SettingsConfirmBackground from '../../assets/svg/settingsConfirm/SettingsConfirmBackground.svg';
import {useTheme} from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');

const SettingsConfirm = ({navigation}) => {
  const {colors, typography} = useTheme();
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');

  const onChangePassword = value => {
    setPassword(value);
  };
  const onCancel = () => {
    navigation.goBack();
  };

  const onConfirm = () => {
    if (password === '') {
      setWarning('Wrong password');
    } else {
      navigation.navigate('SettingsEdit');
      setWarning('');
    }
  };

  return (
    <View>
      <SettingsConfirmBackground
        width={width}
        height={height}
        preserveAspectRatio="xMin slice"
        style={styles.background}
      />
      <View style={styles.cancel}>
        <Pressable onPress={onCancel}>
          <ArrowBackIcon size={width * 0.07} color={colors.light2} />
        </Pressable>
      </View>
      <View style={styles.container}>
        <Text style={[styles.text, {color: colors.darkest1}]}>
          Enter your password:
        </Text>
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
          onChangeText={onChangePassword}
          style={[styles.input]}
        />
        <Text style={[styles.warning, {color: colors.light2}]}>{warning}</Text>
      </View>
      <Button
        style={[styles.button, {backgroundColor: colors.lightest2}]}
        _text={{
          color: colors.darkest1,
          fontSize: 18,
          fontWeight: '700',
        }}
        onPress={onConfirm}>
        Confirm
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
    top: height * 0.13,
    justifyContent: 'space-between',
    width: width * 0.9,
    left: width * 0.05,
    height: height * 0.1,
    alignItems: 'center',
  },
  cancel: {
    top: height * 0.028,
    left: width * 0.05,
  },
  warning: {
    fontSize: 14,
    fontWeight: '700',
  },
  text: {
    width: width * 0.5,
    left: -width * 0.2,
    fontSize: 14,
    fontWeight: '700',
  },
  input: {
    width: width * 0.9,
    height: 30,
  },
  button: {
    top: height * 0.67,
    borderRadius: 16,
    width: width * 0.3,
    left: width * 0.35,
  },
});
export default SettingsConfirm;
