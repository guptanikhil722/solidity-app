import { Pressable, StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import styles from '../styles/common'
import FavBtn from './FavBtn'

const ProductListItem = ({item, products, setProducts}) => {
  return (
 
        <ImageBackground style={styles.productListItem} imageStyle={styles.productImageStyle} resizeMode='cover' source={{uri: 'https://s3-alpha-sig.figma.com/img/f76f/2919/a366eff505edc431bad217bfb2bd35da?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZITt4VOr~-mX~-phaAMKYQaGeZtAbDQ0kzwNRA72fllx1Bksq5vbWd~Su5Ke2mG6B4K0PQwhqX-Yo-FkSBA5PhduEf70r989uTCX8V89o9hKIrTaaXCtTqPAY0P5ZqhjIMg~inVrBhXfRMLNx4nLjqz8Y5XdbdZXC~3Ak9Dq85WXJB6MYy39cimq3kHOhGee0mn~pfTQvV3WhCfGRvPJcbc0R8nq5RtIlgfsROKQvzP2VMdjV4k1RIv3gIO6ayK9sZ5L~iNws92jmMJmFgS8s7goKYy1KAMEVQtqrr~gX7lvwuiBnr6GiIu3o~wibRy8jrbXcD2MHLuOn-mU6GHudQ__'}}>
      <Text>{item.title}</Text>
      <Pressable   style={{position:'absolute', top:'5%', right:'6%'}}>
        <FavBtn item={item} products={products}  setProducts={setProducts}/>
      </Pressable>
      </ImageBackground>
   
  )
}

export default ProductListItem

