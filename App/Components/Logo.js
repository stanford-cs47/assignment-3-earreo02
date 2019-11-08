import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Images, Metrics} from '../Themes'

export default function Logo() {
  return (
    <View style = {styles.container} >
      <Image style = {styles.image} source = {Images.logo} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    width: Metrics.screenWidth,
    height: Metrics.images.logo/2,
    resizeMode: 'contain',
  },
});
