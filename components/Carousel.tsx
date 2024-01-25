import { PropsWithChildren } from "react"
import { Dimensions, Image, ImageSourcePropType, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import RNReactNativeHapticFeedback from "react-native-haptic-feedback"

export type CarouselDataProps={
    imgSource:ImageSourcePropType ,
    title:string,
}

type CarouselProps=PropsWithChildren<{
    title:string 
    limit?:number
    style?:typeof StyleSheet 
    data:Array<CarouselDataProps>
}>

const options={
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: true,
}


export default function Carousel({title,limit,style,data}:CarouselProps){
    return(
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.containerTitle}>{title}</Text>
                <TouchableOpacity style={styles.containerButton} onPress={()=>RNReactNativeHapticFeedback.trigger("impactLight",options)}>
                    <Text style={styles.containerButtonTitle}>View All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.itemContainer} horizontal={true}
            contentContainerStyle={{justifyContent:'space-around',alignItems:'center'}}
            >
            {
                data.map((item,idx)=>{
                    return(
                        <View key={idx} style={styles.itemView}>
                            <View style={styles.itemImageView}>
                            <Image source={item.imgSource} style={styles.itemImage}/>
                            </View>
                            <Text style={styles.itemTitle}>{item.title}</Text>
                        </View>
                    )
                })
            }
            </ScrollView>
        </View>
    )
}

const {width}=Dimensions.get("window")

const styles=StyleSheet.create({
    container:{
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        width:width,
        paddingLeft:15,
        gap:10
    },
    containerTitle:{
        fontSize:17,
        color:'#1D1E20'
    },
    subContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        marginTop:5
    },
    containerButton:{
    },
    containerButtonTitle:{
        color:'#8F959E'
    },
    itemContainer:{
        display:'flex',
        flexDirection:'row',
        gap:15,
    },
    itemView:{
        width:115,
        height:50,
        borderRadius:10,
        backgroundColor:'#F5F6FA',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        padding:5,
        marginLeft:5
    },
    itemTitle:{
        color:'#1D1E20',
        fontSize:15,
        fontWeight:'500'
    },
    itemImageView:{
        width:40,
        height:40,
        backgroundColor:'#FEFEFE',
        alignItems:'center',
        display:'flex',
        justifyContent:'center',
        borderRadius:10
    },
    itemImage:{
        objectFit:'contain'
    }
})