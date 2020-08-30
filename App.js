import React from 'react'
import { View } from 'react-native'

import CityPicker from './Components/Cities/CityPicker'
import Intro from './Components/Intro/Intro'
import ShoppingCenterView from './Components/ShoppingCenter/ShoppingCenter'

class App extends React.Component {
  render(){
    return(
      <View>
        <ShoppingCenterView/>
      </View>
    )
  }
}

export default App