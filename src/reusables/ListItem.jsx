import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from '../styles/common'
import Texts from './Text'

const ListItem = ({type, item, popularCategories, setPopularCategories}) => {
  return (
    <View style={styles.columnFlex}>
    {type !=='popular'?
    <>
    <View style={styles.circularItems}>
      <Image source={item.icon}/>
    </View>
    <Text style={styles.textNormal}>{item.title}</Text>
    </>
   :
    <TouchableOpacity onPress={()=>{setPopularCategories((prev)=>(prev.map(ele=>{return{...ele,  isSelected:item.id===ele.id? true:false}})))}} style={[styles.ovalItem,{backgroundColor:item.isSelected?'#FC6C85':'#FFFFFF'}]}>
     <Texts  innerText={item.title} style={[styles.textNormal,{color:item.isSelected?'#ffffff':'#272727'}]}/>
    </TouchableOpacity>
  }
   </View>
  )
}

export default ListItem

