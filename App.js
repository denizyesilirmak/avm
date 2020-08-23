import React from 'react'
import { View } from 'react-native'
import CityPicker from './Components/Cities/CityPicker'
import Intro from './Components/Intro/Intro'

class App extends React.Component {
  render(){
    return(
      <View>
        <Intro/>
      </View>
    )
  }
}

export default App