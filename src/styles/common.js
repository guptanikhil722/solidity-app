import { StyleSheet, Dimensions } from 'react-native'
import {ms,s,vs} from 'react-native-size-matters'
const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#FFFFFF',
        paddingTop:'2%',
        paddingHorizontal:'3%',
        height:'100%'
    },
    headersItem:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'2%'
        // marginVertical:'8%',
        // paddingHorizontal:'2%'
    },
    textBold:{
        fontSize:ms(22),
        fontWeight:'700',
        color: '#272727'
        // bottom:'5%'
    },
    pinkText:{
        fontSize:14,
        fontWeight:'Bold',
        color:'#FC6C85',
        
        // bottom:'5%'
    },
    textNormal:{
     fontSize: ms(16),
     fontWeight:'600',
     color: '#272727'
    //  color:'#000000',
    //  paddingBottom:'5%'
    },
    columnFlex:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        paddingHorizontal:'5%',
      
    },
    rowFlex:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
       
    },
    circularItems:{
     borderRadius: ms(26),
    //  width:'70%',
    //  height:'10%',
     padding:'20%',
     marginHorizontal:'2%',
     backgroundColor:'#FC6C8521'
     
    },
    icons:{
        display:'flex',
        flexDirection:'row',
       marginRight:'3%'
    },
    searchBar:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:'1%',
        paddingHorizontal:'4%',
        backgroundColor:'#FAFAFA',
        borderColor:'#EEEEEE',
        borderWidth:1,
        borderRadius: ms(12),
        marginLeft:'1%',
        width: screenWidth/1.08,
        marginHorizontal:'3%'
    },
    categoryList:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        width: screenWidth/1.1,
    //    paddingLeft:'15%'
    },
    ovalItem:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:ms(18),
        borderColor:'#A3A3A3',
        borderWidth: 1,
        // height:55,
        // width:75,
        marginHorizontal: '1.5%',
        paddingHorizontal:ms(18),
        paddingVertical:6,
        backgroundColor:'#FFFFFF'
    },
    productListItem:{
        height:vs(140),
        width: screenWidth/2.4,
        margin:'3%',
        padding:'2%'
    },
    productImageStyle:{
        borderRadius: ms(22),
        // borderColor:'#A3A3A3',
        // borderWidth: 2,
    },
    banner:{
        borderRadius: 12,
        borderColor: '#FC6C85',
        borderWidth: 1,
        display:'flex',
        flexDirection:'row',
        // justifyContent:'space-around',
        backgroundColor: '#FC6C8521',
        height: '20%',
        marginVertical:'3%',
        
    },
    bannerTexts:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        position:'absolute',
        top: '10%',
        marginHorizontal:'5%',
        width:'50%',
      
    },
    bannerTxt:{
      fontSize: ms(14),
      fontWeight: '500',
      color: '#FC6C85',
      flexShrink: 1
    },
    bannerTxtSemiBold:{
      fontSize: ms(20),
      fontWeight: '600',
      color: '#FC6C85',
    //   flex: 1
    },
    bannerTxtBold:{
      fontSize: ms(24),
      fontWeight: '800',
      color: '#FC6C85',
      flex: 1
    }
})

export default styles