import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import NavOptions from '../components/NavOptions'
import uber from '../assets/Uber.png'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'

const Home = () => {

  const apiKey = 'AIzaSyAwGRGfcv15 - U0arYyUfmacb5PSsnFvrqo'

  return (
    <SafeAreaView style={[tw`pt-5`, styles.container]}>
      <View style={tw`p-5 pb-0`}>
        <Image style={{ width: 100, height: 100, resizeMode: 'contain' }} source={uber} />
      </View>
      <View style={tw`p-5 pt-0`}>

        <GooglePlacesAutocomplete placeholder='Where From?' debounce={400} query={{ key: apiKey, language: 'en' }}
          styles={{
            container: { flex: 0, },
            textInput: { fontSize: 18, }
          }}
          minLength={2}
          returnKeyType={'search'}
          fetchDetails={true}
          enablePoweredByContainer={false}
          nearbyPlacesAPI={'GooglePlacesSearch'}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}

        />
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