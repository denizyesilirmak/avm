import React from 'react'
import { View, FlatList, Text, StyleSheet, Pressable } from 'react-native'
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
            <Pressable style={{ width: '40%', margin: '5%', marginBottom: 5 }} onPress={() => alert("anan")}>
              <City city={item} />
            </Pressable>
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
    backgroundColor: '#ebebeb',
    borderRadius: 30,
    overflow: "hidden",
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2
  },
  cityCode: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#0ed185',
    transform: [
      { rotateZ: "-25deg" }
    ],
    position: 'absolute',
    bottom: -20,
    right: -6
  },
  cityName: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    elevation: 2
  }
})

export default CityPicker