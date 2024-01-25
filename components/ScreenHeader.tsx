import { Image, StyleSheet, TouchableHighlight,View } from "react-native"
import Bag from '../assets/icons/Bag.png'
import Menu from '../assets/icons/menu.png'

export default function ScreenHeader({}){
    return(
        <View style={styles.header}>
            <TouchableHighlight style={styles.iconContainer}>
                <Image source={Menu} width={25} height={25}/>
            </TouchableHighlight>
            <TouchableHighlight style={styles.iconContainer}>
                <Image source={Bag} width={25} height={25} />
            </TouchableHighlight>
        </View>
    )
}

const styles=StyleSheet.create({
    header:{
        backgroundColor:'#fff',
        height:80,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:25
    },
    iconContainer:{
        width:45,
        height:45,
        backgroundColor:'#F5F6FA',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:100
    }
})