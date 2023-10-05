import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, ViewStyle } from "react-native"
import { AppStackParamList, AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useHeader } from "app/utils/useHeader"
import tw from "app/lib/tw"
import { CandlestickChart, TData } from 'react-native-wagmi-charts';

// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface ChartScreenProps extends NativeStackScreenProps<AppStackParamList, "Chart"> {}

export const ChartScreen: FC<ChartScreenProps> = observer(function ChartScreen({route,navigation}) {


  const quote = route.params.quote;
  
  useHeader({
    title: quote.symbol,
    leftIcon: "caretLeft",
    onLeftPress: () => {
      navigation.goBack()
    },
    leftIconColor:'white',
    rightIcon:'more',
    rightIconColor:'white'
  })


// Dummy data
const dummyCandles:TData = [
    {
        timestamp: 1634688000000,
        open: 50.00,
        high: 55.00,
        low: 48.50,
        close: 52.25,
    },
    {
        timestamp: 1634774400000,
        open: 52.50,
        high: 56.75,
        low: 51.20,
        close: 55.00,
    },
    {
        timestamp: 1634860800000,
        open: 54.75,
        high: 58.00,
        low: 53.25,
        close: 56.80,
    },
    {
        timestamp: 1634947200000,
        open: 56.90,
        high: 59.50,
        low: 55.80,
        close: 58.75,
    },
    {
        timestamp: 1635033600000,
        open: 58.50,
        high: 60.20,
        low: 57.90,
        close: 59.50,
    },
    {
        timestamp: 1635120000000,
        open: 59.60,
        high: 61.80,
        low: 59.10,
        close: 60.75,
    },
    {
        timestamp: 1635206400000,
        open: 60.80,
        high: 63.00,
        low: 60.50,
        close: 62.40,
    },
    {
        timestamp: 1635292800000,
        open: 62.60,
        high: 65.20,
        low: 61.90,
        close: 64.80,
    },
    {
        timestamp: 1635379200000,
        open: 65.00,
        high: 67.50,
        low: 64.00,
        close: 66.25,
    },
    {
        timestamp: 1635465600000,
        open: 66.50,
        high: 69.00,
        low: 65.20,
        close: 68.50,
    },
    {
        timestamp: 1635552000000,
        open: 68.60,
        high: 71.80,
        low: 67.50,
        close: 70.80,
    },
    {
        timestamp: 1635638400000,
        open: 70.90,
        high: 74.20,
        low: 70.50,
        close: 72.75,
    },
];




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
  textAlign: "left"
  },
  exchange: {
    fontSize: 16,
    letterSpacing: 0.1,
    lineHeight: 32,
    fontWeight: "500",
    fontFamily: "Avenir Next",
    color: "#487fd9",
    textAlign: "left"
    },
  });
  