import { Roboto_400Regular, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto"
import { StatusBar } from "react-native"
import "react-native-gesture-handler"
import { GestureHandlerRootView } from "react-native-gesture-handler"

import { Routes } from "./src/routes"

import { Loading } from "./src/components/Loading"

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />

      <Routes />
    </GestureHandlerRootView>
  )
}
