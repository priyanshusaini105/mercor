import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { AppStackScreenProps, TopTabNavigator } from "app/navigators"
import { Screen, Text } from "app/components"
import { useHeader } from "app/utils/useHeader"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"
import tw from "app/lib/tw"

interface DashboardScreenProps extends AppStackScreenProps<"Dashboard"> {}

export const DashboardScreen: FC<DashboardScreenProps> = observer(function DashboardScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  useHeader({
    // backgroundColor:tw.color('primary')
    backgroundColor: tw.color("primary"),
    title: "Dashboard",
    titleStyle: tw`text-white`,
    rightIcon: "more",
    rightIconColor: "white",
  })

  return (
    <Screen style={$root} preset="scroll">
      <TopTabNavigator />
      <View style={[tw`h-full `, { flex: 1 }]}></View>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
