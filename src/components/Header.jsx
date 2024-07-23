import { Image, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import styles from '../styles/common'
import ProfilePic from '../reusables/ProfilePic'
import {profilePic, heartIcon, bellIcon} from '../constants/imagePath'
import Texts from '../reusables/Text'



const Header = ({innerText, icons}) => {
  
  return (
    <View style={styles.headersItem}>
     {/* <Text style={{color:'black', fontSize:10, }}>{'My name is nikhil'}</Text> */}
     <View style={styles.rowFlex}>
      <ProfilePic profilePic={profilePic}/>
     <View style={[styles.columnFlex,{ alignItems:'flex-start'}]}>
      <Texts innerText={innerText.headerTitle} style={styles.textNormal}/>
      <Texts innerText={innerText.headerSubtitle} style={styles.textBold}/>
      </View>
      </View>
      <View style={styles.rowFlex}>
   
        <Image style={styles.icons}  source={bellIcon}  />
        <Image style={styles.icons}  source={heartIcon}  />
    
  
      </View> 
  
    </View>
  )
}

export default Header


