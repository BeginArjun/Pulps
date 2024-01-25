import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
function ProductCard({id,product,price,display_images}:any){
    const navigation=useNavigation()
    return(
        <TouchableOpacity
        onPress={() => navigation.navigate('ProductScreen', { productId: id })}
        style={styles.container}
        >
        <View>
            <Image source={{uri:display_images}} width={160} height={203} style={styles.images}/>
            <Text style={styles.displayText}>{product}</Text>
            <Text style={styles.bold}>${price}</Text>
            <Feather
            style={styles.heartIcon}
            name="heart"
            size={20}
            />
        </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    container:{
        display:'flex',
        width:160,
        height:257
    },
    displayText:{
        color:'#1D1E20',
        fontSize:11,
        fontWeight:'500'
    },
    bold:{
        fontSize:13,
        fontWeight:'600',
        color:'#1D1E20'
    },
    images:{
        borderRadius:15,
        backgroundColor:'#FFF',
    },
    heartIcon:{
        position:'absolute',
        top:10,
        right:10,
        color:'#8F959E'
    }
})

export default ProductCard;