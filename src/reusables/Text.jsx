import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Texts = ({innerText, style, numLines}) => {
  return (

      <Text style={style} numberOfLines={numLines}>{innerText}</Text>

  )
}

export default Texts

const styles = StyleSheet.create({})