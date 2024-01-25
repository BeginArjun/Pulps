import {  Dimensions, StyleProp, Text, TouchableOpacity } from "react-native";
import {  StyleSheet } from "react-native";
import { View } from "react-native";

type CTAProps={
    label:string 
    action:CallableFunction
}

export default function CTA({label,action}:CTAProps){
    return(
       <TouchableOpacity onPress={action()}
       style={styles.button}
       >
            <View>
                <Text style={styles.displayText}>{label}</Text>
            </View>
       </TouchableOpacity>
    )
}

const {width}=Dimensions.get("window")

const styles=StyleSheet.create({
    button:{
        backgroundColor:'#9775FA',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:width,
        height:75,
        padding:15,
        position:'relative',
        bottom:0
    },
    displayText:{
        color:'#FEFEFE',
        fontSize:17,
        fontWeight:'500'
    }
})