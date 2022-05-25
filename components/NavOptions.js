import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import car from '../assets/carsclipart.png'
import basket from '../assets/basket.png'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
const data = [
  {
    id: 101,
    name: 'Get a Ride',
    image: car,
    screen: 'MapScreen'
  },
  {
    id: 102,
    name: 'Order Food',
    image: basket,
    screen: 'EatScreen'
  },
]

const NavOptions = () => {
  const navigator = useNavigation()

  return (
    <View>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigator.navigate(item.screen)} style={tw`py-5 px-5 bg-gray-100 m-2 w-40 rounded-md`}  >
            <View style={tw``}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: 'contain'
                }}
                source={item.image} />
              <Text style={tw`text-center text-lg font-semibold`}>{item.name}</Text>
              <Icon style={tw`p-2 bg-black rounded-full w-10 mt-4 mx-auto`} type='antdesign' name='arrowright' color={'white'} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default NavOptions

const styles = StyleSheet.create({})