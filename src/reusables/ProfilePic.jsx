import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ProfilePic = ({profilePic}) => {
  return (
    <View>
      <Image source={profilePic}></Image>
    </View>
  )
}

export default ProfilePic

const styles = StyleSheet.create({})