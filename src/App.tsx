import React from 'react';
import { View } from 'react-native';
import { Image } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { RootSiblingParent } from 'react-native-root-siblings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Products from './screens/fridge/fridgeProducts/Products'
import Fridge from './screens/fridge/Fridge'
import FridgeOrganize from './screens/fridge/fridgeOrganize/FridgeOrganize'
import FruitAndVegetables from './screens/fridge/fruitAndVegetebales/FruitAndVegetables';

import Home from './screens/home/Home'
import Calendar from './screens/calendar/Calendar'
import Recipes from './screens/recipes/Recipes'
import Camera from './screens/camera/Camera'
import style from './TabBarStyles'

const Tab = createBottomTabNavigator();
const FridgeStack = createNativeStackNavigator();
const AllStack = createNativeStackNavigator();

function renderIcon(icon: string, focused: boolean) {
    return (
      <View style={{opacity: focused ? 1 : 0.3}}>
          <Icon color={focused ? "#008037" : "black"} name={icon} size={32}/>
      </View>  
    );
}

function renderCalendarImage(focused: boolean) {
    return (
      <View style={{opacity: focused ? 1 : 0.3}}>
          <Image style={{tintColor: focused ? "#008037" : "black"}} source={require("./assets/icon/calendar.png")} size={8} resizeMode='contain' alt="image"/>
      </View>  
    );
}

function renderScan(focused: boolean) {
    return (
        <View style={[style.circle, {backgroundColor: focused ? "#008037" : "#b8e0cb"}]}>
            <Image source={require("./assets/icon/scan.png")} size={8} resizeMode='contain' alt="image" />
        </View>
    )
}

function createFridgeNavigator() {
    return (
        <FridgeStack.Navigator initialRouteName="FridgeProduct" screenOptions={{ headerShown: false }}>
            <FridgeStack.Screen name="FridgeProduct" component={Fridge}/>
            <FridgeStack.Screen name="FruitAndVegetables" component={FruitAndVegetables}/>
            <FridgeStack.Screen name="Products" component={Products}/>
            <FridgeStack.Screen name="FridgeOrganize" component={FridgeOrganize}/>
        </FridgeStack.Navigator>
    )
}

function tabApp() {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: style.tabContainer}}>
            <Tab.Screen name="Home" component={Home} options={{tabBarIcon: ({focused}) => renderIcon("home", focused)}}/>
            <Tab.Screen name="Calendar" component={Calendar} options={{tabBarIcon: ({focused}) => renderCalendarImage(focused)}}/>
            <Tab.Screen name="Camera" component={Camera} options={{tabBarIcon: ({focused}) => renderScan(focused)}}/>
            <Tab.Screen name="Recipes" component={Recipes} options={{tabBarIcon: ({focused}) => renderIcon("restaurant", focused)}}/>
            <Tab.Screen name="Fridge" component={createFridgeNavigator} options={{tabBarIcon: ({focused}) => renderIcon("kitchen", focused)}}/>
        </Tab.Navigator>
    )
}

interface Props {}

interface State {}


export default class App extends React.Component<Props, State> {
  public render() {
    return (
        <RootSiblingParent>
            {tabApp()}
        </RootSiblingParent>
    )
  }  
}