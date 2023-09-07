import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import { useHeader } from "app/utils/useHeader"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"
import tw from 'app/lib/tw'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


interface DashboardScreenProps extends AppStackScreenProps<"Dashboard"> {}

export const DashboardScreen: FC<DashboardScreenProps> = observer(function DashboardScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  useHeader({
    // backgroundColor:tw.color('primary')
    backgroundColor:tw.color('primary'),
    title:'Dashboard',
    titleStyle:tw`text-white`,
    rightIcon:'more',
    rightIconColor:'white',
  })

  const tableData=[
    {
      title:'AT&T Inc.',
      price:'32,445',
      inc:'0.12'
    },
    {
      title:'AT&T Inc.',
      price:'32,445',
      inc:'0.12'
    },
    {
      title:'AT&T Inc.',
      price:'32,445',
      inc:'0.12'
    },
    {
      title:'AT&T Inc.',
      price:'32,445',
      inc:'0.12'
    },
    {
      title:'AT&T Inc.',
      price:'32,445',
      inc:'0.12'
    },
    {
      title:'AT&T Inc.',
      price:'32,445',
      inc:'0.12'
    },
    {
      title:'AT&T Inc.',
      price:'32,445',
      inc:'0.12'
    },
  ]
  return (
    <Screen style={$root} preset="scroll">
      <View>
        {/*  */}
        {
          tableData.map((data,index)=>{
            const isOdd=index%2!=0;
            return(
              <View style={tw`flex-row gap-6 ${isOdd?'bg-slate-800':''} justify-between px-2`}>
          <Text style={tw`text-white`}>AT&T Inc.</Text>
          <Text style={tw`text-white`}>32,445 $</Text>
          <Text style={tw`text-white`}>0,12</Text>
        </View>
            )
          })
        }
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
