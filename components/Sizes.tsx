import { Pressable, View,Text, FlatList, StyleSheet } from "react-native"

const Size=({size}:{size:string})=>{
    return(
        <Pressable style={styles.sizeView}>
            <View>
                <Text style={styles.displayText}>{size}</Text>
            </View>
        </Pressable>
    )
}   

export default function Sizes({sizes}:{sizes:Array<string>}){
    return(
        <View>
            <View style={styles.row}>
                <Text style={styles.displayText}>Size</Text>
                <Pressable>
                    <Text style={styles.secondaryText}>View Guide</Text>
                </Pressable>
            </View>
            <View style={styles.sizesView}>
                <FlatList
                data={sizes}
                renderItem={({item})=><Size size={item}/>}
                horizontal={true}
                />
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    row:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        width:'100%',
    },
    displayText:{
        fontSize:17,
        color:'#1D1E20',
        fontWeight:'600'
    },
    secondaryText:{
        color:'#8F959E',
        fontSize:11
    },
    sizesView:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        gap:20
    },
    sizeView:{
        display:'flex',
        width:60,
        height:60,
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        gap:10,
        backgroundColor:'#F5F6FA',
        marginRight:10
    }
})