import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import styles from '../styles/common'
import { searchIcon, pageInfoIcon } from '../constants/imagePath'



const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
        <View style={styles.rowFlex}>
      <Image source={searchIcon}></Image>
      <TextInput placeholder='Search' placeholderTextColor={'#B1B1B1'} style={styles.textNormal}/>
      </View>
      <View style={styles.rowFlex}>
      <Image source={pageInfoIcon}></Image>
      </View>
    </View>
  )
}

export default SearchBar

