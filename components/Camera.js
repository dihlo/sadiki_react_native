import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Flex, WhiteSpace } from 'antd-mobile-rn';
import { Actions } from 'react-native-router-flux';
import Video from 'react-native-video';
import CameraUnit from './CameraUnit';

export default class Camera extends Component {
	constructor(props) {
		super(props);

		this.state = {
			repeat: true,
			rate: 1,
			volume: 1,
			muted: false,
			resizeMode: 'contain', // video's mode: none, cover, stretch, contain
			duration: 0.0, // video's duration set on event onLoad
			currentTime: 0.0, // set on event onProgress
			paused: true, // check if video is pausing or not
			rateText: '1.0', // rate value in component Picker
			pausedText: 'Play', // view to user: 'Play' - when video is pausing, 'Pause' - when video is playing
			hideControls: false, // hide control button when video is playing and show it when user clicks on 			
		}

		this.onLoad = this.onLoad.bind(this);
		this.onPress = this.onPress.bind(this);
		this.onEnd = this.onEnd.bind(this);
	}

	onLoad(data) {
		this.setState({duration: data.duration});
	}

	onPress(data) {
		this.setState({currentTime: data.currentTime});
	}

	onEnd(data) {
		this.setState({pausedText: 'Play', paused: true});
	}

	render() {
		return (
		<ScrollView style={{backgroundColor: 'white'}}>
			<CameraUnit cameraname="холл" videourl="http://www.streambox.fr/playlists/test_001/stream.m3u8"/>
			<CameraUnit cameraname="игровая" videourl="http://techslides.com/demos/sample-videos/small.mp4"/>
			<CameraUnit cameraname="баня" videourl="http://www.streambox.fr/playlists/test_001/stream.m3u8"/>		
		</ScrollView>	 
   );}
}

const styles = StyleSheet.create({
	container: {
		height: 200,
	},
	backgroundVideo: {
		position: 'absolute',
		top: 30,
		left: 0,
		bottom: 0,
		right: 0,
	},	
})
