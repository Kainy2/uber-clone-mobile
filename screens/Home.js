import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import NavOptions from '../components/NavOptions'
import uber from '../assets/Uber.png'


const Home = () => {
  return (
    <SafeAreaView style={[tw`pt-5`, styles.container]}>
      <View style={tw`p-5`}>
        <Image style={{ width: 100, height: 100, resizeMode: 'contain' }} source={uber} />
      </View>
      <View style={tw`p-5`}>
        <NavOptions />
      </View>
    </SafeAreaView >
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff'
  }
})  