import { ActivityIndicator, Image,StyleSheet,View } from "react-native";

const logoSource=require('../assets/Logo.png')

type LoadingProps={
    animate:boolean
}

export default function Loader({animate}:LoadingProps){
    return(
        <View style={styles.container}>
            <Image source={logoSource} width={59} height={36}/>
            <ActivityIndicator animating={animate} color={'#fff'}/>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:20,
        backgroundColor:'#9775FA'
    }
})