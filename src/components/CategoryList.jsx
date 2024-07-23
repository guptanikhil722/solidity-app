import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import ListItem from '../reusables/ListItem'
import styles from '../styles/common'

const CategoryList = ({type}) => {
  const [categories, setCategories] = useState([
    { title:'Clothes',
      icon: require('../assets/clotheIcon.png'),
      id:1
    },
      {
        title:'Shoes',
        icon: require('../assets/shoesIcon.png'),
        id: 2
      },
      {
        title: 'Bags',
        icon: require('../assets/bagsIcon.png'),
        id: 3
      }
  ])
  const [popularCategories, setPopularCategories] = useState([
    { title:'All',
      id:1,
      isSelected:true
    },
    { title:'Clothes',
      id:2,
      isSelected: false
    },
      {
        title:'Shoes',
        id: 3,
        isSelected: false
      },
      {
        title: 'Bags',
        id: 4,
        isSelected: false
      }
  ])
  return (
    <View style={{paddingVertical:'2%'}}>
      <FlatList
       data={type=='popular'?popularCategories:categories}
       renderItem={({ item }) => <ListItem  item={item} type={type} setPopularCategories={setPopularCategories} popularCategories={popularCategories}/>}
       keyExtractor={(item) => item.id.toString()}
       contentContainerStyle={[styles.categoryList,{paddingLeft:type=='popular'?'10%':'18%'}]}
       horizontal = {true}
      />
    </View>
  )
}

export default CategoryList

