import { StyleSheet,  View } from 'react-native'
import React from 'react'
import { ImageCarousel, ImageSlider } from 'react-native-image-slider-banner'
import styles from '../styles/common'
import Texts from '../reusables/Text'


const Banner = () => {
  return (
  <View style={styles.banner}>
    <View style={styles.bannerTexts}>
    <Texts innerText={'30%'} style={styles.bannerTxtBold} numLines={1}/>
    <Texts innerText={"Today's special"} style={styles.bannerTxtSemiBold} numLines={1}/>
    <Texts innerText={'Get discount for every order, only valid for today'}  style={styles.bannerTxt}  numLines={2}/>
    </View>
      <ImageSlider
     data={[
       {img : 'https://s3-alpha-sig.figma.com/img/1087/7c70/70e41b6c53b89b3433b2c1acdc6ecdd3?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gCx4dKMtAskjqIdc6vZYXJsa0OBtYgC0xEIWPJ6LVPCOFZAOZ~ycEzizZ8J1LG0CBhEx41slEqBHNKWa8uWQskwFCzUXibkQG9UxmPet8HeCF~bDxMImYkmnmYFonzee9ZW59qdwAU3r3lNsqSYZ7WTf7k2RwsJMutRILZ7jfVklVNTes5~GGdDeZdDdF2jCCMQVzx0adEB0A8Djf~V0T1N1rHKVMC3Tf7eKab7HKGO5f2wVs4EnGjUzkm~1VLbuCV1CT~O7DlZ7DvZ7WNd0Aive~DEbFVCG013th8WMXfPPuxpDx6ALkClPz3VveppguLBJZYoLiDFsdX1YIoDBIg__'},
       {img : 'https://s3-alpha-sig.figma.com/img/1087/7c70/70e41b6c53b89b3433b2c1acdc6ecdd3?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gCx4dKMtAskjqIdc6vZYXJsa0OBtYgC0xEIWPJ6LVPCOFZAOZ~ycEzizZ8J1LG0CBhEx41slEqBHNKWa8uWQskwFCzUXibkQG9UxmPet8HeCF~bDxMImYkmnmYFonzee9ZW59qdwAU3r3lNsqSYZ7WTf7k2RwsJMutRILZ7jfVklVNTes5~GGdDeZdDdF2jCCMQVzx0adEB0A8Djf~V0T1N1rHKVMC3Tf7eKab7HKGO5f2wVs4EnGjUzkm~1VLbuCV1CT~O7DlZ7DvZ7WNd0Aive~DEbFVCG013th8WMXfPPuxpDx6ALkClPz3VveppguLBJZYoLiDFsdX1YIoDBIg__'},
       {img : 'https://s3-alpha-sig.figma.com/img/1087/7c70/70e41b6c53b89b3433b2c1acdc6ecdd3?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gCx4dKMtAskjqIdc6vZYXJsa0OBtYgC0xEIWPJ6LVPCOFZAOZ~ycEzizZ8J1LG0CBhEx41slEqBHNKWa8uWQskwFCzUXibkQG9UxmPet8HeCF~bDxMImYkmnmYFonzee9ZW59qdwAU3r3lNsqSYZ7WTf7k2RwsJMutRILZ7jfVklVNTes5~GGdDeZdDdF2jCCMQVzx0adEB0A8Djf~V0T1N1rHKVMC3Tf7eKab7HKGO5f2wVs4EnGjUzkm~1VLbuCV1CT~O7DlZ7DvZ7WNd0Aive~DEbFVCG013th8WMXfPPuxpDx6ALkClPz3VveppguLBJZYoLiDFsdX1YIoDBIg__'},

    ]}
    autoPlay={false}
    onItemChanged={(item) => console.log("item", item)}
    closeIconColor="#fff"
    caroselImageStyle={{ bottom:'25%', left:'17%', zIndex:10}}
    activeIndicatorStyle={{backgroundColor:'#FC6C85'}}
    indicatorContainerStyle={{top: '5%'}}
    />
    </View>
 
  )
}

export default Banner

