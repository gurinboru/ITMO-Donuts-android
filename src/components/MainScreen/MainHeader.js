import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon, Input, Pressable} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons/faEye';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
const MainHeader = ({navigation, onSearchTextChange}) => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Icon
          as={<FontAwesomeIcon icon={faBars} />}
          size={5}
          mr="2"
          color="muted.400"
        />
      </Pressable>
      <Input
        w={{
          base: '75%',
          md: '25%',
        }}
        InputRightElement={
          <Pressable onPress={() => console.log('press')}>
            <Icon
              as={<FontAwesomeIcon icon={faEye} />}
              size={5}
              mr="2"
              color="muted.400"
            />
          </Pressable>
        }
        onChange={onSearchTextChange}
        placeholder="Password"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '90%',
  },
});
export default MainHeader;
