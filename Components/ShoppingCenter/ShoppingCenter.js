import React from 'react'
import { View, StyleSheet, ScrollView, Image, ImageBackground, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

const avmHeadderImage = require('./assets/maltepe-piazza.jpg')

class ShoppingCenterView extends React.Component {
  render() {
    return (
      <View style={styles.sv}>
        <ImageBackground source={avmHeadderImage} resizeMode='cover' style={{ width: '100%', height: 200 }}>
          <LinearGradient locations={[0.5, 1]} colors={["#ffffff00", "#ffffff"]} style={{
            width: '100%',
            height: 200,
            padding: 15,
            justifyContent: 'flex-end'
          }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 20
            }}>Maltepe Piazza AVM</Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  sv: {
    backgroundColor: 'red',
    flex: 1,
    width: '100%'
  }
})

export default ShoppingCenterView