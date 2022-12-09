import {StyleSheet, Text, View} from 'react-native';
import React, { Component } from 'react';
import {Icon, Input, Pressable} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
const MainHeader = ({navigation, onSearchTextChange}) => {
  return (
    <View style={styles.container}>
      <Pressable>
        <View style={styles.Bars}>
        <Icon
          as={<FontAwesomeIcon icon={faBars} color={'#DA802E'} />}
        />
        </View>
      </Pressable>
      <View style={styles.containerInput}>
      <Input
        w={{
          base: '100%',
          md: '100%',
        }}
        InputRightElement={
          <Pressable onPress={() => console.log('press')}>
            <View style={styles.MagnifyingGlass}>
            <Icon as={<FontAwesomeIcon icon={faMagnifyingGlass} color={'#FFA048'} />} 
            />
            </View>
          </Pressable>
        }
        onChange={onSearchTextChange}
        placeholder="Search donuts"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    maxWidth: '100%',
    backgroundColor: '#FED06E',
  },
  MagnifyingGlass: {
    padding : 10,
  },
  containerInput: {
    width: '90%',
    height: '60%',
    backgroundColor: '#FFE6B1',
    borderRadius: 6.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: '#FFA048',
    
  },
});
export default MainHeader;