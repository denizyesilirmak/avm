import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';

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
        <ImageBackground source={item.image} style={{
          width: '100%',
          height: 600,
          resizeMode: 'cover',
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <LinearGradient locations={[0, 0.6]} colors={["#ffffff00", "#ffffff"]} style={{
            width: '100%',
            height: 250,
            padding: 15,
            justifyContent: 'flex-end'
          }}>
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold'
            }}>Lorem Ipsum</Text>
            <Text style={{
              fontWeight: '100'
            }}>
            Proin mattis, ligula ut semper efficitur, purus odio accumsan velit, non porttitor enim felis et nunc. In ultrices nulla a dolor finibus, sit amet commodo ligula accumsan. Aliquam justo lacus, hendrerit non auctor sit amet, consequat a lectus.
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }

  render() {
    return (
      <View>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={entries}
          layout='default'
          renderItem={this._renderItem}
          sliderWidth={Dimensions.get('screen').width}
          itemWidth={Dimensions.get('screen').width}
          inactiveSlideScale={0.5}
          inactiveSlideOpacity={1}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  slide: {
    width: Dimensions.get('window').width - 50,
    height: 600,
    elevation: 4,
    marginBottom: 10,
    marginLeft: 25,
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 20

  }
})

export default Intro