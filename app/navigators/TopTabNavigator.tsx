import React from "react"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  MarketOverviewScreen,
  WatchlistScreen,
  GuidantsNewsScreen,
} from "app/screens"

export type TopTabNavigatorParamList = {
  MarketOverview: undefined
  Watchlist: undefined
  GuidantsNews: undefined
}

const Tab = createMaterialTopTabNavigator<TopTabNavigatorParamList>();

export const TopTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{swipeEnabled:true}}>
      <Tab.Screen name="MarketOverview" component={MarketOverviewScreen} />
      <Tab.Screen name="Watchlist" component={WatchlistScreen} />
      <Tab.Screen name="GuidantsNews" component={GuidantsNewsScreen} />
    </Tab.Navigator>
  )
}
