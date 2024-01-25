import { StyleSheet, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"

export default function Search(){
    return(
        <View style={style.container}>
            <View style={style.searchBar}>
                <Icon name="search1" size={20} color='#8F959E'/>
                <TextInput placeholder="Search..." style={style.input}/>
            </View>
                <Feather.Button
                name="mic"
                style={style.mic}/>
        </View>
    )
}

const style=StyleSheet.create({
    container:{
        display:'flex',
        width:380,
        height:80,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'center'
    },
    searchBar:{
        backgroundColor:'#F5F6FA',
        width:275,
        padding:10,
        borderRadius:10,
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        gap:10,
        flexDirection:'row',
        height:50
    },
    mic:{
        width:50,
        height:50,
        borderRadius:10,
        padding:10,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        height:50,
        fontSize:15,
        width:"100%",
        color:'#000'
    }
})