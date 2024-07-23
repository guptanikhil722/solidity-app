import { StyleSheet, Text, View, FlatList } from 'react-native'
import React,{useState} from 'react'
import ProductListItem from '../reusables/ProductListItem'

const ProductList = () => {
  const [products, setProducts] = useState([
    { title:'product-1',
      id:1,
      isSelected:false
    },
    { title:'product-2',
      id:2,
      isSelected: false
    }
  ])
  return (
    <View>
      <FlatList
       data={products}
       renderItem={({ item }) => <ProductListItem  item={item} products={products} setProducts={setProducts}/>}
       keyExtractor={(item) => item.id.toString()}
       numColumns={2}
       columnWrapperStyle={{marginHorizontal:'3%'}}
       contentContainerStyle={styles.categoryList}
    
      />
    </View>
  )
}

export default ProductList

const styles = StyleSheet.create({})