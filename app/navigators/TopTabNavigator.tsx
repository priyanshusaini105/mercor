import React from "react"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  WelcomeScreen
} from "app/screens"

export type TopTabNavigatorParamList = {
  Demo: undefined
}

const Tab = createMaterialTopTabNavigator<TopTabNavigatorParamList>();

export const TopTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{swipeEnabled:true}}>
      <Tab.Screen name="Demo" component={WelcomeScreen} />
      <Tab.Screen name="Demo2" component={WelcomeScreen} />
      <Tab.Screen name="Demo24" component={WelcomeScreen} />
    </Tab.Navigator>
  )
}
