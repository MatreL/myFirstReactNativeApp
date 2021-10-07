import React from 'react'
import { StyleSheet,  View } from 'react-native'

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  parentStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 200,
  },
  viewOneStyle: {
    backgroundColor: "red",
    width: 100,
    height: 100,
    alignSelf: 'flex-start'
  },
  viewTwoStyle: {
    backgroundColor: "green",
    width: 100,
    height: 100,
    alignSelf: 'flex-end',

  },
  viewThreeStyle: {
    backgroundColor: "purple",
    width: 100,
    height: 100,
  }
})

export default BoxScreen;

