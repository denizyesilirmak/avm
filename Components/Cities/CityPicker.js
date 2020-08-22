import React from 'react'
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native'
import CitiesList from './Cities.json'


class City extends React.PureComponent {
  render() {
    return (
      <View style={styles.cityStyle} >
        <Text style={styles.cityName}>{this.props.city.name}</Text>
        <Text style={styles.cityCode}>{this.props.city.code}</Text>
      </View>
    )
  }
}

class CityPicker extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: '#F2F2F2' }}>
        <FlatList
          style={{ width: "100%" }}
          numColumns={1}
          horizontal={false}
          numColumns={2}
          data={CitiesList.sort()}
          keyExtractor={(item) => item.code}
          renderItem={({ item }) => (
            <TouchableOpacity style={{ width: '40%', margin: '5%' }} onPress={() => alert("anan")}>
              <City city={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cityStyle: {
    width: '100%',
    height: 150,
    backgroundColor: '#0476D9',
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: 'center',
    alignItems: 'center'
  },
  cityCode: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#F2F2F2',
    transform: [
      { rotateZ: "-20deg" }
    ],
    position: 'absolute',
    bottom: -25,
    right: -10
  },
  cityName: {
    color: '#F2F2F2',
    fontSize: 18,
    fontWeight: 'bold',
    elevation: 2
  }
})

export default CityPicker