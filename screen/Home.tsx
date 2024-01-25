import { Dimensions, SafeAreaView, StyleSheet, View,Text, ScrollView, FlatList } from "react-native";
import {useEffect, useState} from 'react'
import Loader from "../components/Loader";
import Search from "../components/Search";
import Carousel, { CarouselDataProps } from "../components/Carousel";

import adb from '../assets/brand/Adidas.png'
import nike from '../assets/brand/Nike.png'
import fila from '../assets/brand/Fila.png'
import puma from '../assets/brand/Puma.png'
import ProductCard from "../components/ProductCard";


const brandData:Array<CarouselDataProps>=[
    {
        imgSource:adb,
        title:'Adidas'
    },
    {
        imgSource:nike,
        title:'Nike'
    },
    {
        imgSource:fila,
        title:'Fila'
    },
    {
        imgSource:puma,
        title:'Puma'
    }
]

// const productData:Array<CarouselDataProps>=[
//     {
//         imgSource:null
//     }
// ]

const HomeHeader=()=>{
    return(
        <View style={styles.header}>
            <View style={styles.greetView}>
                <Text style={styles.textHeader}>Hello</Text>
                <Text style={styles.textDescription}>Welcome to Pulps</Text>
            </View>
            <Search/>
            <Carousel data={brandData} title="Choose a brand"/>
        </View>
    )
}

const ProductView=()=>{
    const [products,setProducts]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            const res=await fetch('http://192.168.137.1:3000/api/products')
            const data=await res.json()
            setProducts(data)
        }
        fetchData()
    },[])
    return(
            <FlatList
            data={products}
            renderItem={({item})=><ProductCard {...item}/>}
            keyExtractor={item=>item.id}
            numColumns={2}
            />
    )
}

export default function Home(){
    return(
        <SafeAreaView>
            <View>
                <View style={styles.container}>
                    <HomeHeader/>
                </View>
                <View style={styles.productView}>
                    <ProductView/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const {width,height}=Dimensions.get('screen')

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#FEFEFF',
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    header:{
        padding:25
    },
    textHeader:{
        fontSize:28,
        color:'#1D1E20',
        fontWeight:'600'
    },
    textDescription:{
        color:'#8F959E',
        fontSize:15,
        fontWeight:'400'
    },
    greetView:{
        marginLeft:15
    },
    productView:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
    }
})