import {Dimensions, StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {Component, useState} from 'react';
import {Button, Pressable, ArrowBackIcon, Box, Stack, Image} from 'native-base';
import DonutBackground from '../../assets/svg/donutScreen/DonutScreenBackground.svg';
import {useTheme} from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');

const DonutScreen = ({navigation}) => {
  const {colors, typography} = useTheme();
  const img =
    'http://klublady.ru/uploads/posts/2022-02/1644637787_63-klublady-ru-p-otkusannii-ponchik-foto-79.jpg';
  const price = 'this is price';
  const description =
    'здесь будет длинное-длинное описание того, какой же пончик вкусный, прекрасный, удивительный, чтобы вы его обязательно купили';
  const composition = 'тоже много букав, но уже о составе пончика';
  const energy = ' this is energy value';
  const onCancel = () => {
    navigation.goBack();
  };
  const onBuy = () => {};
  const onAdd = () => {};

  return (
    <View>
      <DonutBackground
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
      <ScrollView style={styles.container}>
        <View style={styles.img}>
          <Image
            size={width}
            resizeMode={'contain'}
            borderBottomRadius={20}
            source={{
              uri: img,
            }}
            alt="Alternate Text"
          />
        </View>
        <Box alignItems="center" paddingBottom={height * 0.2}>
          <Box
            rounded="lg"
            overflow="hidden"
            _light={{
              borderRadius: 20,
              backgroundColor: 'gray.50',
              m: height * 0.02,
              shadow: 2,
            }}>
            <Stack p="4" space={3}>
              <Text style={{color: colors.darkest2}}>
                <Text style={styles.header}>Donut's price: </Text>
                <Text style={styles.text}>{price}</Text>
              </Text>
              <Text style={{color: colors.darkest2}}>
                <Text style={styles.header}>Description: </Text>
                <Text style={styles.text}>{description}</Text>
              </Text>
              <Text style={{color: colors.darkest2}}>
                <Text style={styles.header}>Composition: </Text>
                <Text style={styles.text}>{composition}</Text>
              </Text>
              <Text style={{color: colors.darkest2}}>
                <Text style={styles.header}>Energy Value: : </Text>
                <Text style={styles.text}>{energy}</Text>
              </Text>
            </Stack>
          </Box>
        </Box>
      </ScrollView>
      <View style={styles.buttons}>
        <Button
          style={[styles.button, {backgroundColor: colors.lightest2}]}
          shadow={4}
          _text={{
            color: colors.light2,
            fontSize: 18,
            fontWeight: '900',
          }}
          onPress={onBuy}>
          Buy now
        </Button>
        <Button
          style={[styles.button, {backgroundColor: colors.lightest2}]}
          shadow={4}
          _text={{
            color: colors.darkest1,
            fontSize: 18,
            fontWeight: '900',
          }}
          onPress={onAdd}>
          Add to cart
        </Button>
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
    top: height * 0.057,
    width: width,
  },
  img: {
    borderRadius: 20,
    elevation: 4,
  },
  cancel: {
    top: height * 0.028,
    left: width * 0.05,
  },
  header: {
    fontSize: 14,
    fontWeight: '700',
  },
  text: {
    fontSize: 12,
    fontWeight: '400',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    top: -height * 0.15,
  },
  button: {
    borderRadius: 20,
    width: width * 0.45,
    height: height * 0.07,
  },
});
export default DonutScreen;
