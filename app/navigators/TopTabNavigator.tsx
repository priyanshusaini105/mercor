import React from "react"
import {
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs"
import { MarketOverviewScreen, WatchlistScreen, GuidantsNewsScreen } from "app/screens"
import tw from "app/lib/tw"

export type TopTabNavigatorParamList = {
  MarketOverview: undefined
  Watchlist: undefined
  GuidantsNews: undefined
}

const Tab = createMaterialTopTabNavigator<TopTabNavigatorParamList>()

export const TopTabNavigator = () => {
  const screenOptions: MaterialTopTabNavigationOptions = {
    swipeEnabled: true,
    tabBarStyle: tw`bg-primary`,
    tabBarActiveTintColor: tw.color("white"),
    tabBarInactiveTintColor: tw.color("secondary"),
  }

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="MarketOverview" component={MarketOverviewScreen} />
      <Tab.Screen name="Watchlist" component={WatchlistScreen} />
      <Tab.Screen name="GuidantsNews" component={GuidantsNewsScreen} />
    </Tab.Navigator>
  )
}
