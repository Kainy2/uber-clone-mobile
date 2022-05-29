import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import tw from 'twrnc';


const MapsScreen = () => {
  const origin = useSelector(store => store.nav.origin)
  return (

    <View style={tw`flex-1`}>
      <Text>Map Screen</Text>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={tw`flex-1`}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}

      />
    </View>
  )
}

// const styles = StyleSheet.create({
//   map: {

//   }

// })

export default MapsScreen