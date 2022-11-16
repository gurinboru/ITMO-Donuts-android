import {Dimensions, StyleSheet, Text, useColorScheme, View} from 'react-native';
import React, {Component, useState} from 'react';
import {Button, FormControl, Input, WarningOutlineIcon} from 'native-base';
import BackgroundWithText from '../../assets/svg/authorization/BackgroundWithText.svg';
import {useTheme} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

const Authorization = ({navigation}) => {
  const {colors, typography} = useTheme();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');
  const [isNonexistentUser, setIsNonexistentUser] = useState(false);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);

  const onChangeLogin = value => {
    setLogin(value);
  };
  const onChangePassword = value => {
    setPassword(value);
  };

  const onSubmit = () => {
    if (login === '' || password === '') {
      setIsNonexistentUser(true);
      setWarning('Wrong login or password');
    } else {
      setIsNonexistentUser(false);
      setWarning('');
    }
    setIsSubmitLoading(true);
    setTimeout(() => {
      setIsSubmitLoading(false);
    }, 2000);
  };
  const onSighIn = () => {
    console.log('Application is loaded', navigation);
    navigation.navigate('Registration');
  };

  return (
    <View>
      <BackgroundWithText
        width={width}
        height={height}
        preserveAspectRatio="xMin slice"
        style={styles.background}
      />
      <View style={styles.container}>
        <View style={styles.mainSection}>
          <View style={styles.inputContainer}>
            <Input
              shadow={2}
              _light={{
                bg: colors.lightest1,
                _hover: {
                  bg: 'coolGray.200',
                },
                _focus: {
                  bg: 'coolGray.200:alpha.70',
                },
              }}
              placeholder="Enter your login"
              onChangeText={onChangeLogin}
              style={[styles.input]}
            />
            <Input
              shadow={2}
              _light={{
                bg: colors.lightest1,
                _hover: {
                  bg: 'coolGray.200',
                },
                _focus: {
                  bg: 'coolGray.200:alpha.70',
                },
              }}
              placeholder="Enter your password"
              onChangeText={onChangePassword}
              style={[styles.input]}
            />
          </View>
          <Text style={(styles.warning, {color: colors.light2})}>
            {warning}
          </Text>
          <Button
            isLoading={isSubmitLoading}
            style={[styles.button, {backgroundColor: colors.accent3}]}
            _loading={{
              bg: colors.accent2,
              _text: {
                color: colors.accent2,
              },
            }}
            _text={{
              color: colors.darkest1,
              fontSize: 14,
              fontWeight: '700',
            }}
            _spinner={{
              color: 'white',
            }}
            isLoadingText="Sighing in"
            onPress={onSubmit}>
            Sign in
          </Button>
          <Button
            size="xs"
            variant="link"
            _text={{
              color: colors.darkest1,
              fontSize: 20,
              fontWeight: '700',
            }}
            onPress={onSighIn}>
            or sigh up
          </Button>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    zIndex: -1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height * 1.2,
  },
  mainSection: {
    height: height * 0.3,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  inputContainer: {
    width: width * 0.75,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: height * 0.1,
  },
  input: {
    height: 30,
  },
  errorMessage: {
    position: 'absolute',
    top: height * 0.028,
  },
  warning: {
    fontSize: 15,
  },
  button: {
    borderRadius: 10,
    width: width * 0.4,
  },
});
export default Authorization;
