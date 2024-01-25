import { View,Text, StyleSheet } from "react-native";

export default function Description({description}:{description:string}){
    return(
        <View style={styles.container}>
            <Text style={styles.displayText}>Description</Text>
            <Text style={styles.secondaryText}>{description.slice(0,99)}
                <Text style={styles.readMore}>...Read More</Text>
            </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        width:335,
        height:92,
        display:'flex',
        justifyContent:'center',
        alignItems:'flex-start'
    },
    displayText:{
        fontSize:17,
        color:'#1D1E20',
        fontWeight:'600'
    },
    secondaryText:{
        color:'#8F959E',
        fontSize:15
    },
    readMore:{
        color:'#1D1E20',
    }
})