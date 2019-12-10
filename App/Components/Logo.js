import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Images, Metrics} from '../Themes'

export default function Logo() {
  return (
    <View style = {styles.container} >
      <Image style = {styles.logo} source = {Images.logo} resizeMode = "contain" />
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
  },
});
