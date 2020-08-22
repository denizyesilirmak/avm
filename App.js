import React from 'react'
import { View } from 'react-native'
import CityPicker from './Components/Cities/CityPicker'


class App extends React.Component {
  render(){
    return(
      <View>
        <CityPicker/>
      </View>
    )
  }
}

export default App