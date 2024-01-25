import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { Icon } from '@rneui/themed';

import Home from "../screen/Home";
import ProductScreen from "../screen/Product";
import ScreenHeader from "../components/ScreenHeader";

const Stack=createNativeStackNavigator()
const Tab=createBottomTabNavigator()

const HomeScreen=()=>{
  return(
    <Tab.Navigator screenOptions={({route})=>({
      tabBarIcon:({focused,color,size})=>{
        let iconName=''
        if(route.name==='Home'){
          iconName=focused?'home':'home'
        }
        return <Icon name={iconName}/>
      },
      tabBarActiveTintColor:'#9775FA',
      tabBarInactiveTintColor:'#8F959E'
    })}>
      <Tab.Screen name="Home" options={{headerShown:false}} component={Home}/>
    </Tab.Navigator>
  )
}

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        header:()=><ScreenHeader/>
      }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="ProductScreen" component={ProductScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}