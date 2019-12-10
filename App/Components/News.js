/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React, { Component, useState } from 'react'
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking, ListItem, TouchableOpacity } from 'react-native'
import { material } from 'react-native-typography' //consider using this!
import { Metrics, Colors } from '../Themes'
import * as WebBrowser from 'expo-web-browser'

export default class News extends Component {
  static defaultProps = { articles: [] }

  static propTypes = {
    articles: PropTypes.array
  }

  //you can change the props above to whatever you want/need.
  webAction = (item) => WebBrowser.openBrowserAsync(item.url);

  render () {
    const {articles} = this.props;
    return (

      <View style={styles.container}>
        <FlatList
          data = {articles}
          renderItem= {({item}) => (
            <TouchableOpacity onPress={() => this.webAction(item)}>
              <View style={styles.news}>
                <Text style={material.headline}>{item.title}</Text>
                <Text>{item.snippet}</Text>
                <Text style={{fontWeight: 'bold'}}>{item.byline}</Text>
                <Text>{item.date}</Text>
              </View>
            </TouchableOpacity>
          )}
          renderSectionHeader = {({section}) =>
            <View style = {styles.header}>
              <Text style = {styles.title}>{section.title}</Text>
            </View>
          }
          ItemSeparatorComponent = {() => ( <View style = {{height: 15}}/>)}
          keyExtractor = {(item) => item.title}
          contentContainerStyle = {styles.itemContainer}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  news:{
    width: Metrics.width,
    marginLeft: 18,
    marginRight: 18,
    alignItems: 'flex-start'
  }
});
