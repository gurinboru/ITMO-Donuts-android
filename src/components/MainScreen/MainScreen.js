import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainHeader from './MainHeader';
import {FlatList} from 'native-base';
const dataFromServer = [
  {id: 1, name: 'name1', price: 100},
  {id: 2, name: 'name2', price: 200},
  {id: 3, name: 'name3', price: 300},
  {id: 4, name: 'name4', price: 400},
  {id: 5, name: 'name5', price: 500},
  {id: 6, name: 'name6', price: 600},
  {id: 7, name: 'name7', price: 700},
  {id: 8, name: 'name8', price: 800},
  {id: 9, name: 'name9', price: 900},
  {id: 10, name: 'name10', price: 1000},
  {id: 11, name: 'name11', price: 1100},
  {id: 12, name: 'name12', price: 1200},
  {id: 13, name: 'name13', price: 1300},
];
const MainScreen = ({navigation}) => {
  const [data, setData] = React.useState(dataFromServer);
  const renderItem = ({item}) => {
    return (
      <View>
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
      </View>
    );
  };
  const onSearchTextChange = e => {
    if (e.nativeEvent.text === '') {
      setData(dataFromServer);
    } else {
      const newData = [
        ...dataFromServer.filter(item =>
          item.name.includes(e.nativeEvent.text),
        ),
      ];
      setData(newData);
    }
  };
  return (
    <View>
      <MainHeader
        navigation={navigation}
        onSearchTextChange={onSearchTextChange}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default MainScreen;
