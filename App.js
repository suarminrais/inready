import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

//props sederhana render nama

class Nama extends Component {
  render() {
    return (
      <View>
        <Text style={styles.biru}>{ this.props.isi }</Text>
      </View>
    );
  }
}

//props sederhana render blink teks

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { blink: true }
    setInterval(() => (
      this.setState(sebelumnya => (
        { blink: !sebelumnya.blink }
      ))
    ), 1000);
  }

  render() {
    if(!this.state.blink) return null;

    return (
        <Text style={this.props.style}>{this.props.kedip}</Text>
    )
  }
}

// buat style 

const styles = StyleSheet.create({
  biru: {
    color:'black',
    fontWeight:'bold',
    fontSize:30
  },
  merah: {
    color:'red'
  }
});


// main program
export default class HelloApp extends Component {
  render() {
    let data = {
      img: {
        uri:'https://pbs.twimg.com/profile_images/2679996558/e345c52a29da0414a5b01fd48d62df72_400x400.jpeg'
      }
    };
    return (
      <View style = {{ backgroundColor:'gray', height:720 }}>
        <Image source={data.img} style={{width: 360, height: 320}} />
        <Nama isi='INREADY' />
        <Blink style={styles.merah} kedip='Worgrup' />
        <Nama style={styles.biru} isi='Bede' />
      </View>
    );
  }
}