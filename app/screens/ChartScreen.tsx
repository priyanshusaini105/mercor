import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AppStackParamList, AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useHeader } from "app/utils/useHeader"
import tw from "app/lib/tw"
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


  return (
    <Screen style={$root} preset="scroll">
      <Text style={tw`text-8`}>{quote.price.toLocaleString()}</Text>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
