import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const SearchScreen = ({ term, setNewTerm }) => {
 return (
  <View style={style.backgroundStyle}>
   <Ionicons style={style.iconStyle} name="ios-search" size={24} color="black" />
   <TextInput
    style={style.inputStyle}
    placeholder="Search"
    value={term}
    onChangeText={newterm => setNewTerm(newterm)}
    onEndEditing={()=> console.log('submitted')}
   />
  </View>
 )
}

const style = StyleSheet.create({
 backgroundStyle: {
  backgroundColor: '#F0EEEE',
  height: 50,
  borderRadius: 5,
  marginHorizontal: 15,
  flexDirection: 'row'
 },
 inputStyle: {
  flex: 1
 },
 iconStyle: {
  fontSize: 40,
  alignSelf: "center",
  marginHorizontal: 15
 }
});

export default SearchScreen;
