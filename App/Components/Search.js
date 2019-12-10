import React, { useState } from 'react'
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, View, Button, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Metrics, Colors } from '../Themes'
import { SearchBar } from 'react-native-elements'


export default function Search(props) {
  const [text, newText] = useState("");

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
      <View style = {styles.container} >
        {/*Some styles with a fancy background and padding...*/}
        <SearchBar
          platform = "ios"
          containerStyle = {styles.searchStyle}
          inputContainerStyle = {styles.inputContainerStyle}
          searchIcon = {{size: Metrics.small}, {color: 'orange'}}
          onChangeText = {text => newText(text)}
          onClear={this.handleSearchClear}
          onCancel={this.handleSearchCancel}
          value = {text}
          placeholders = 'Search NY Times'
          onSubmitEditing = {() => props.getSearch(text)}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  searchStyle: {
    backgroundColor: '#FFFFFF',
    width: Metrics.screenWidth - Metrics.doubleBaseMargin,
  }
});
