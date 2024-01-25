import { View,Image, StyleSheet, Pressable } from "react-native";

export default function ProductImageCard({ img,setDisplay }:{img:string,setDisplay:any}) {
  return (
    <View>
        <Pressable onPress={()=>setDisplay(img)}>
        <Image source={{uri:img}} width={77} height={77} style={styles.images} />
        </Pressable>
    </View>
  );
}

const styles=StyleSheet.create({
    images:{
        borderRadius:15,
        backgroundColor:'lightgray',
    }
})