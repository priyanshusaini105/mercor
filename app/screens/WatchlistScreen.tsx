import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { TouchableOpacity, View, ViewStyle } from "react-native"
import { AppStackParamList, AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import tw from "app/lib/tw"
import { Quote } from "app/types"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface WatchlistScreenProps extends  NativeStackScreenProps<AppStackParamList, "Watchlist"> {}

export const WatchlistScreen: FC<WatchlistScreenProps> = observer(function WatchlistScreen({navigation}) {
  const [tableData, setTableData] = useState<Quote[]>([])

  //   [
  //     {
  //         "symbol": "AAPL",
  //         "name": "Apple Inc.",
  //         "price": 178.825,
  //         "changesPercentage": 0.4804,
  //         "change": 0.855,
  //         "dayLow": 177.13,
  //         "dayHigh": 179.62,
  //         "yearHigh": 198.23,
  //         "yearLow": 124.17,
  //         "marketCap": 2795785734886,
  //         "priceAvg50": 184.4656,
  //         "priceAvg200": 164.92345,
  //         "exchange": "NASDAQ",
  //         "volume": 37845741,
  //         "avgVolume": 57543112,
  //         "open": 177.52,
  //         "previousClose": 177.97,
  //         "eps": 5.96,
  //         "pe": 30,
  //         "earningsAnnouncement": "2023-10-25T10:59:00.000+0000",
  //         "sharesOutstanding": 15634199552,
  //         "timestamp": 1695150724
  //     }
  // ]

  const dummyStockData: Quote[] = [
    {
      symbol: "AAPL",
      name: "Apple Inc.",
      price: 178.825,
      changesPercentage: 0.4804,
      change: 0.855,
      dayLow: 177.13,
      dayHigh: 179.62,
      yearHigh: 198.23,
      yearLow: 124.17,
      marketCap: 2795785734886,
      priceAvg50: 184.4656,
      priceAvg200: 164.92345,
      exchange: "NASDAQ",
      volume: 37845741,
      avgVolume: 57543112,
      open: 177.52,
      previousClose: 177.97,
      eps: 5.96,
      pe: 30,
      earningsAnnouncement: "2023-10-25T10:59:00.000+0000",
      sharesOutstanding: 15634199552,
      timestamp: 1695150724,
    },
    {
      symbol: "GOOGL",
      name: "Alphabet Inc.",
      price: 2778.12,
      changesPercentage: 1.235,
      change: 33.84,
      dayLow: 2760.55,
      dayHigh: 2795.88,
      yearHigh: 2897.99,
      yearLow: 2437.04,
      marketCap: 1854300134705,
      priceAvg50: 2720.768,
      priceAvg200: 2638.482,
      exchange: "NASDAQ",
      volume: 1546233,
      avgVolume: 1856421,
      open: 2763.45,
      previousClose: 2744.28,
      eps: 103.75,
      pe: 26.74,
      earningsAnnouncement: "2023-10-26T11:30:00.000+0000",
      sharesOutstanding: 331822240,
      timestamp: 1695150730,
    },
    {
      symbol: "MSFT",
      name: "Microsoft Corporation",
      price: 305.43,
      changesPercentage: 0.975,
      change: 2.96,
      dayLow: 302.18,
      dayHigh: 308.57,
      yearHigh: 310.32,
      yearLow: 242.06,
      marketCap: 2298909307458,
      priceAvg50: 299.436,
      priceAvg200: 270.137,
      exchange: "NASDAQ",
      volume: 23988291,
      avgVolume: 29487161,
      open: 303.82,
      previousClose: 302.47,
      eps: 9.9,
      pe: 30.88,
      earningsAnnouncement: "2023-10-24T13:45:00.000+0000",
      sharesOutstanding: 7525500160,
      timestamp: 1695150740,
    },
    {
      symbol: "AMZN",
      name: "Amazon.com Inc.",
      price: 3377.88,
      changesPercentage: 1.654,
      change: 55.02,
      dayLow: 3340.11,
      dayHigh: 3409.87,
      yearHigh: 3773.08,
      yearLow: 2905.91,
      marketCap: 1704066101846,
      priceAvg50: 3450.887,
      priceAvg200: 3360.635,
      exchange: "NASDAQ",
      volume: 3479616,
      avgVolume: 3504051,
      open: 3352.11,
      previousClose: 3322.86,
      eps: 52.11,
      pe: 64.85,
      earningsAnnouncement: "2023-10-27T14:15:00.000+0000",
      sharesOutstanding: 504316000,
      timestamp: 1695150750,
    },
    {
      symbol: "TSLA",
      name: "Tesla, Inc.",
      price: 773.24,
      changesPercentage: 2.331,
      change: 17.6,
      dayLow: 760.31,
      dayHigh: 785.65,
      yearHigh: 901.71,
      yearLow: 591.52,
      marketCap: 779864187545,
      priceAvg50: 753.334,
      priceAvg200: 796.875,
      exchange: "NASDAQ",
      volume: 19747132,
      avgVolume: 23888114,
      open: 762.55,
      previousClose: 755.64,
      eps: 5.67,
      pe: 136.35,
      earningsAnnouncement: "2023-10-28T12:20:00.000+0000",
      sharesOutstanding: 1008984000,
      timestamp: 1695150760,
    },
  ]


  const apiKey = "2e9e73649e1e4dbfbc525e2d716fcb46"

  const url = `https://financialmodelingprep.com/api/v3/quote/AAPL?apikey=${apiKey}`

  useEffect(() => {
    //   fetch(url)
    //     .then((response) => response.json())
    //     .then((json) => {
    //       console.log(json);
    //       setTableData(json)
    //     })
    //     .catch((error) => console.error(error))

    setTableData(dummyStockData)
  }, [])

  return (
    <Screen style={$root} preset="scroll">
      {tableData.map((data, index) => {
        const isOdd = index % 2 != 0
        const isFall = data.change < 0
        return (
          <TouchableOpacity
            key={data.name}
            style={tw.style("flex-row justify-between", isOdd ? "bg-primary" : "bg-secondary")}
            onPress={()=>navigation.navigate('Chart',{quote:data})}
          >
            <Text style={tw`p-2 text-[16px] w-[167px]`} ellipsizeMode="tail" numberOfLines={1}>
              {data.name}{" "}
            </Text>
            <Text style={tw`p-2 text-[16px]`}>{data.price} </Text>
            <Text style={tw`p-2 text-[16px] ${isFall ? "text-red-500" : "text-green-500"}`}>
              {data.change} %
            </Text>
          </TouchableOpacity>
        )
      })}
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
