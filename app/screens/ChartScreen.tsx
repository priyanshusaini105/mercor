import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native"
import { AppStackParamList, AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useHeader } from "app/utils/useHeader"
import tw from "app/lib/tw"
import { CandlestickChart, TData } from "react-native-wagmi-charts"
import { Button } from "../components/Button"
import { DataMethod } from "app/types"

// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface ChartScreenProps extends NativeStackScreenProps<AppStackParamList, "Chart"> {}

export const ChartScreen: FC<ChartScreenProps> = observer(function ChartScreen({
  route,
  navigation,
}) {
  const quote = route.params.quote;
  const [selectedDataMethod,setSelectedDataMethod]=useState<DataMethod>('Day')

  useHeader({
    title: quote.symbol,
    leftIcon: "caretLeft",
    onLeftPress: () => {
      navigation.goBack()
    },
    leftIconColor: "white",
    rightIcon: "more",
    rightIconColor: "white",
  })

  // Dummy data
  const dummyCandles: TData = [
    {
      timestamp: 1634688000000,
      open: 50.0,
      high: 55.0,
      low: 48.5,
      close: 52.25,
    },
    {
      timestamp: 1634774400000,
      open: 52.5,
      high: 56.75,
      low: 51.2,
      close: 55.0,
    },
    {
      timestamp: 1634860800000,
      open: 54.75,
      high: 58.0,
      low: 53.25,
      close: 56.8,
    },
    {
      timestamp: 1634947200000,
      open: 56.9,
      high: 59.5,
      low: 55.8,
      close: 58.75,
    },
    {
      timestamp: 1635033600000,
      open: 58.5,
      high: 60.2,
      low: 57.9,
      close: 59.5,
    },
    {
      timestamp: 1635120000000,
      open: 59.6,
      high: 61.8,
      low: 59.1,
      close: 60.75,
    },
    {
      timestamp: 1635206400000,
      open: 60.8,
      high: 63.0,
      low: 60.5,
      close: 62.4,
    },
    {
      timestamp: 1635292800000,
      open: 62.6,
      high: 65.2,
      low: 61.9,
      close: 64.8,
    },
    {
      timestamp: 1635379200000,
      open: 65.0,
      high: 67.5,
      low: 64.0,
      close: 66.25,
    },
    {
      timestamp: 1635465600000,
      open: 66.5,
      high: 69.0,
      low: 65.2,
      close: 68.5,
    },
    {
      timestamp: 1635552000000,
      open: 68.6,
      high: 71.8,
      low: 67.5,
      close: 70.8,
    },
    {
      timestamp: 1635638400000,
      open: 70.9,
      high: 74.2,
      low: 70.5,
      close: 72.75,
    },
  ]

  const dataMethod:DataMethod[]=['Day','Week','Month',"Year",'All']

  return (
    <Screen style={$root} preset="scroll">
      <Text style={styles.kurs}>{quote.price.toLocaleString()}</Text>
      <Text style={styles.exchange}>{quote.exchange}</Text>
      {/* candlestick chart */}
      <CandlestickChart.Provider data={dummyCandles}>
        <CandlestickChart>
          <CandlestickChart.Candles />
        </CandlestickChart>
      </CandlestickChart.Provider>

      <TouchableOpacity style={tw`bg-sky-700 rounded-md p-4`}>
        <Text style={tw`text-center`}>Buy</Text>
      </TouchableOpacity>

      <View style={tw`flex-row`}>
        {dataMethod.map((item,index)=>(
          <TouchableOpacity style={tw`${item===selectedDataMethod?'bg-gray-800':'bg-gray-200'}  rounded-md p-4`} onPress={()=>setSelectedDataMethod(item)}>
            <Text style={tw`text-center`}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

const styles = StyleSheet.create({
  kurs: {
    fontSize: 32,
    letterSpacing: 0.1,
    lineHeight: 32,
    fontWeight: "500",
    color: "#fff",
    textAlign: "left",
  },
  exchange: {
    fontSize: 16,
    letterSpacing: 0.1,
    lineHeight: 32,
    fontWeight: "500",
    fontFamily: "Avenir Next",
    color: "#487fd9",
    textAlign: "left",
  },
})
