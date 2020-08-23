import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import Carousel from 'react-native-snap-carousel';

import A from '../../Assets/intro/1.jpg'
import B from '../../Assets/intro/2.jpg'
import C from '../../Assets/intro/3.jpg'
import D from '../../Assets/intro/4.jpg'

const entries = [
  {
    image: A
  },
  {
    image: B
  },
  {
    image: C
  },
  {
    image: D
  },
]

class Intro extends React.Component {

  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={{ width:'100%', height: 600, resizeMode: 'cover' }} />
      </View>
    );
  }

  render() {
    return (
      <View>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={entries}
          renderItem={this._renderItem}
          sliderWidth={Dimensions.get('screen').width}
          itemWidth={Dimensions.get('screen').width}
          s
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  slide: {
    width: Dimensions.get('window').width - 50,
    height: 600,
    elevation: 2,
    marginBottom: 10,
    marginLeft: 25,
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 20

  }
})

export default Intro