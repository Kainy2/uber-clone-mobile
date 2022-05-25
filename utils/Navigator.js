import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import EatScreen from '../screens/EatScreen'
import MapScreen from '../screens/MapScreen'

const Navigator = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name='EatScreen' component={EatScreen}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen name='MapScreen' component={MapScreen}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>

  )
}

export default Navigator