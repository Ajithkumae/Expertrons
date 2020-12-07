import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Headder from '../common/Headder';
import { winsize, winheight } from '../config/assets/gloableconstant';
import Video from 'react-native-video';
import Voice from "@react-native-community/voice"
import { connect } from 'react-redux';
import { searchVideoByVoice, initialVideo, hidelVideo, clean } from '../action';
import Speackericon from '../common/speackericon';

class Chatbot extends Component {
  constructor(props) {
    super(props);
    console.log('ChatBot', props)
    Voice.onSpeechResults = (res) => {
      console.log('respond', res);
      this.props.searchVideoByVoice(res); 
    }
    this.state = {
      mute: false
    };
  }

  componentDidMount() {
    this.props.initialVideo(this.props.route.params.interact.id)
  }
  componentWillUnmount() {
    this.props.clean()
  }
  changemute() {
    let voice = this.state.mute
    voice = voice === true ? false : true
    this.setState({
      mute: voice
    })
  }
  render() {
    console.log('props', this.props);
    return (
      <View style={styles.continer}>
        <Headder
          backbtn={true}
          title={this.props.route.params.interact.name}
          navigation={this.props.navigation}
        />
        <View style={styles.imageviewer}>
          <Video
            ref={(ref) => {
              this.player = ref
            }}
            source={{ uri: this.props.video.videoURL }}
            resizeMode='cover'
            repeat={this.props.video.repete}
            muted={this.state.mute}
            playWhenInactive={true}
            onEnd={() => this.props.hidelVideo()}
            style={{
              width: '100%',
              height: '100%',
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30
            }}
          />
          <TouchableOpacity
            style={{ position: 'absolute', left: winsize - 70, top: 30 }}
            onPress={() => this.changemute()}
          >
            <Speackericon mute={this.state.mute} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.micbackgroung}
          onPress={() => Voice.start('en-US')}
        >
          <Image source={require("../config/assets/mic.png")} style={styles.micimg} />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: 'black',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: winheight,
    width: winsize
  },
  imageviewer: {
    height: winheight - 160,
    marginHorizontal: "2%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#333'
  },
  micimg: {
    height: 70,
    width: 70
  },
  micbackgroung: {
    backgroundColor: "#3280dc",
    height: 100,
    width: 100,
    borderRadius: 50,
    position: 'absolute',
    top: winheight - 130,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: 'center'
  }
})
const mapStateToProps = state => {
  console.log('Mmapstate to props ', state)
  return { video: state };
}
const mapDispatchToProps = dispatch => ({
  searchVideoByVoice: (data) => dispatch(searchVideoByVoice(data)),
  initialVideo: (data) => dispatch(initialVideo(data)),
  hidelVideo: (data) => dispatch(hidelVideo(data)),
  clean: (data) => dispatch(clean(data))

})
export default connect(mapStateToProps, mapDispatchToProps)(Chatbot)