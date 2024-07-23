import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import styles from '../styles/common'
import Header from '../components/Header'
import { strings } from '../constants/strings'
import { heartIcon, bellIcon  } from '../constants/imagePath'
import SearchBar from '../reusables/SearchBar'
import Texts from '../reusables/Text'
import ListItem from '../reusables/ListItem'
import CategoryList from '../components/CategoryList'
import ProductList from '../components/ProductList'
import Banner from '../reusables/Banner'
const Home = () => {
    const [innerText, setInnertext] = useState(strings)
    const [icons, setIcons] = useState([bellIcon,heartIcon])
   
  return (
    <View style={styles.container}>
        {/* <Text style={{color:'red'}}>my name is nikhil </Text> */}
      <Header innerText={innerText} icons={icons}/>
      <SearchBar/>
      <View style={[styles.rowFlex,{marginTop:'3%', marginHorizontal:'3%'}]}>
      <Texts  style={styles.textBold} innerText={'Special Offers'}/>
      <Texts  style={styles.pinkText} innerText={'See All'}/>
      </View>
      <Banner/>
      <CategoryList/>
      <View style={[styles.rowFlex,{marginTop:'3%', marginHorizontal:'3%', marginVertical:'4%'}]}>
      <Texts  style={styles.textBold} innerText={'Most Popular'}/>
      <Texts  style={styles.pinkText} innerText={'See All'}/>
      </View>
      <CategoryList type={'popular'}/>
      <ProductList/>
    </View>
  )
}

export default Home

