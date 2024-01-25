import { Route } from "@react-navigation/native";
import { ScrollView, Text,Image, StyleSheet,View, FlatList, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import { Product } from "../global";
import ProductImageCard from "../components/ProductImageCard";
import Sizes from "../components/Sizes";
import Description from "../components/Description";
import CTA from "../components/CTA";


const ProductTitle=({product,price})=>{
    return(
        <View style={styles.productTitleView}>
            <Text style={styles.productTitle}>{product}</Text>
            <Text style={styles.productTitle}>${price}</Text>
        </View>
    )
}


export default function ProductScreen({route}){
    const {productId}=route.params
    const [product,setProduct]=useState({} as Product)
    const [productImage,setProductImage]=useState('')
    useEffect(()=>{
        const fetchData=async()=>{
            const res=await fetch(`http://192.168.137.1:3000/api/products/${productId}`)
            const data=await res.json()
            setProduct(data)
            setProductImage(data.display_images)
        }
        fetchData()
    },[productId])
    if(product.display_images===undefined){
        return (
            <View>
                <ActivityIndicator size={20} color={'#000'}/>
            </View>
        )
    }
    return(
        <ScrollView 
        style={styles.container}
        contentContainerStyle={{justifyContent:'space-between',alignItems:'center',padding:20}}
        >
            <View
            style={styles.displayImageView}
            >
                <Image source={{uri:productImage||product.display_images}} width={310} height={370} style={styles.displayImage}/>
            </View>
            <View>
                <ProductTitle product={product.product} price={product.price}/>
            </View>
            <View style={styles.productImages}>
                <FlatList
                    data={product.images}
                    renderItem={({ item }) => <ProductImageCard img={item} setDisplay={setProductImage} />}
                    horizontal={true}
                />
            </View>
            <View style={styles.sizeView}>
                <Sizes sizes={product.sizes}/>
            </View>
            <View>
                <Description description={product.description}/>
            </View>
            <View>
                <CTA label="Add To Cart" action={()=>console.log('Hello')}/>
            </View>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        gap:15
    },
    displayImageView:{
        width:375,
        height:400,
        backgroundColor:'#F2F2F2',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    displayImage:{
       objectFit:'contain'
    },

    productTitleView:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        width:'100%',

    },

    productTitle:{
        color:'#1D1E20',
        fontSize:22,
        fontWeight:'600',
    },
    productImages:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        width:'100%',
        gap:10
    },
    sizeView:{
        display:'flex'
    }
})