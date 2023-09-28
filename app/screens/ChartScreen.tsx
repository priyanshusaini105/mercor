import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AppStackParamList, AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface ChartScreenProps extends NativeStackScreenProps<AppStackParamList, "Chart"> {}

export const ChartScreen: FC<ChartScreenProps> = observer(function ChartScreen({route}) {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()

  const quote = route.params.quote;

  return (
    <Screen style={$root} preset="scroll">
      <Text text="chart" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
