import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {Component, useState} from 'react';
import {Button, FormControl, Input, WarningOutlineIcon} from 'native-base';
import BackgroundWithText from '../../assets/svg/registration/BackgroundWithText.svg';
import {useTheme} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');
const EMAIL_REGEXP =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const Registration2 = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [isInvalidLogin, setIsInvalidLogin] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const {colors, typography} = useTheme();
  const [show, setShow] = React.useState(false);

  const onChangeLogin = value => {
    setLogin(value);
  };
  const onChangeEmail = value => {
    setEmail(value);
  };
  const onSubmit = () => {
    login ? setIsInvalidLogin(false) : setIsInvalidLogin(true);
    console.log(email.toLowerCase().match(EMAIL_REGEXP), email);
    email.toLowerCase().match(EMAIL_REGEXP)
      ? setIsInvalidEmail(false)
      : setIsInvalidEmail(true);

    if (login && email.toLowerCase().match(EMAIL_REGEXP)) {
      setIsSubmitLoading(true);
      setTimeout(() => {
        setIsSubmitLoading(false);
      }, 2000);
    }
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
          <Text style={[styles.title, typography.h1, {color: colors.darkest1}]}>
            Registration
          </Text>

          <View style={styles.inputContainer}>
            <FormControl isInvalid={isInvalidLogin}>
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
                style={[styles.input, styles.inputName]}
              />

              <Stack space={4} w="100%" alignItems="center">
                <Input
                  w={{
                    base: '75%',
                    md: '25%',
                  }}
                  InputLeftElement={
                    <Icon
                      as={<MaterialIcons name="person" />}
                      size={5}
                      ml="2"
                      color="muted.400"
                    />
                  }
                  placeholder="Name"
                />
                <Input
                  w={{
                    base: '75%',
                    md: '25%',
                  }}
                  type={show ? 'text' : 'password'}
                  InputRightElement={
                    <Pressable onPress={() => setShow(!show)}>
                      <Icon
                        as={
                          <MaterialIcons
                            name={show ? 'visibility' : 'visibility-off'}
                          />
                        }
                        size={5}
                        mr="2"
                        color="muted.400"
                      />
                    </Pressable>
                  }
                  placeholder="Password"
                />
              </Stack>

              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                Login is incorrect
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isInvalid={isInvalidEmail}>
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
                style={[styles.input, styles.inputPassword]}
              />
              {
                <Box alignItems="center">
                  <FormControl isInvalid w="75%" maxW="300px">
                    <FormControl.Label>Password</FormControl.Label>
                    <Input placeholder="Enter password" />
                    <FormControl.ErrorMessage
                      leftIcon={<WarningOutlineIcon size="xs" />}>
                      Try different from previous passwords.
                    </FormControl.ErrorMessage>
                  </FormControl>
                </Box>
              }
              <FormControl.ErrorMessage
                style={styles.errorMessage}
                leftIcon={<WarningOutlineIcon size="xs" />}>
                Password is incorrect
              </FormControl.ErrorMessage>
            </FormControl>
          </View>
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
            isLoadingText="Submitting"
            onPress={onSubmit}>
            Continue
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    position: 'absolute',
    top: height * 0.04,
  },
  button: {
    borderRadius: 10,
    width: width * 0.4,
  },
  mainSection: {
    height: height * 0.35,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  title: {
    top: 25,
  },
  background: {
    position: 'absolute',
    zIndex: -1,
  },
  input: {
    height: 30,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height,
  },
  inputContainer: {
    width: width * 0.75,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: height * 0.1,
  },
});
export default Registration2;

