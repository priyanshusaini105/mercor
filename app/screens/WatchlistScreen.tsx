import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { TouchableOpacity, View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import tw from "app/lib/tw"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface WatchlistScreenProps extends AppStackScreenProps<"Watchlist"> {}

interface TableData {
  name: string
  price: number
  change: number
  ticker: string
}

export const WatchlistScreen: FC<WatchlistScreenProps> = observer(function WatchlistScreen() {

  const [tableData, setTableData] = useState<TableData[]>([])
  

  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()

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

  const apiKey='2e9e73649e1e4dbfbc525e2d716fcb46';

  const url = `https://financialmodelingprep.com/api/v3/quote/AAPL?apikey=${apiKey}`;
  
  useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json);
  //       setTableData(json)
  //     })
  //     .catch((error) => console.error(error))

  setTableData([
  {
    name: "AT&T Inc.",
    ticker: "T",
    price: 32.445,
    change: 0.09,
  },
  {
    name: "MSCI Inc.",
    ticker: "MSCI",
    price: 233.6,
    change: 0.05,
  },
  {
    name: "Cisco Systems",
    ticker: "CSCO",
    price: 56.205,
    change: 0.3,
  },
  {
    name: "3M Co.",
    ticker: "MMM",
    price: 171.59,
    change: -0.13,
  },
  {
    name: "Apple Inc.",
    ticker: "AAPL",
    price: 198.35,
    change: 0.03,
  },
  {
    name: "Blackrock Inc.",
    ticker: "BLK",
    price: 452.91,
    change: 0.78,
  },
  {
    name: "Microsoft Corp.",
    ticker: "MSFT",
    price: 135.04,
    change: -0.09,
  },
  {
    name: "Zoom Video Communications",
    ticker: "ZM",
    price: 88.847,
    change: 0.2,
  },
  {
    name: "Beyond Meat Inc.",
    ticker: "BYND",
    price: 113.0,
    change: 1.54,
  },
])
  }
  , [])



  return (
    <Screen style={$root} preset="scroll" >
      {tableData.map((data, index) => {
        const isOdd = index % 2 != 0;
        const isFall = data.change < 0;
        return (
          <TouchableOpacity key={data.name} style={tw.style("flex-row justify-between", isOdd ? "bg-primary" : "bg-secondary")}>
            <Text style={tw`p-2 text-[16px] w-[167px]`} ellipsizeMode="tail" numberOfLines={1}>{data.name} </Text>
            <Text style={tw`p-2 text-[16px]`}>{data.price} </Text>
            <Text style={tw`p-2 text-[16px] ${isFall ? "text-red-500" : "text-green-500"}`}>{data.change} %</Text>
          </TouchableOpacity>
        )
      })}
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
