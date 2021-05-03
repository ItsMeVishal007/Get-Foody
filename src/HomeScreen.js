import React, { useState } from 'react'
import SearchScreen from './screens/SearchScreen';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
 const [searchVal , setSearchVal] = useState('');
 return (
  <View>
   <SearchScreen term={searchVal} setNewTerm={newTerm => setSearchVal(newTerm)} />
   <Text>{searchVal}</Text>
  </View>
 )
}

export default HomeScreen;
