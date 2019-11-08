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
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking } from 'react-native'
import { material } from 'react-native-typography' //consider using this!
import { Metrics, Colors } from '../Themes'

export default class News extends Component {
  static defaultProps = { articles: [] }

  static propTypes = {
    articles: PropTypes.array
  }

  //you can change the props above to whatever you want/need.

  render () {
    const {articles} = this.props;

    return (
      <View style={styles.container}>
        {/*Some FlatList or SectionList*/}
        <FlatList
          data = {props.articles}
          renderItem= {({item}) => (
            <Item
              id = {item.id}
              title = {item.title}
              selected = {!!selected.get(item.id)}
              onSelect= {onSelect}
            />
          )}
          renderSectionHeader = {({section}) =>
            <View style = {styles.header}>
              <Text style = {styles.title}>{section.title}</Text>
            </View>
          }
          ItemSeparatorComponent = {() => ( <View style = {{height: 15}}/>)}
          keyExtractor = {item => item.id}
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
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'flex-start'
  }
});
