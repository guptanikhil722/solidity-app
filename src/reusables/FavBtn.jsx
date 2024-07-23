import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { favIcon } from '../constants/imagePath'

const FavBtn = ({item,products, setProducts}) => {
  return (
    <Pressable onPress={()=>{()=>{setProducts((prev)=>(prev.map(ele=>{return{...ele,  isSelected:item.id===ele.id? true:false}})))}}} style={[styles.FavBtn,{backgroundColor:item.isSelected?'#FC6C85':'#FFFFFF'}]}>
      <Image source={favIcon}></Image>
    </Pressable>
  )
}

export default FavBtn

const styles = StyleSheet.create({
    FavBtn:{
        borderRadius:50,
        padding: 10,
        // backgroundColor:'#FFFFFF'
    }
})