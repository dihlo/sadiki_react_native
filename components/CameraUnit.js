import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, TouchableWithoutFeedback, WebView, Dimensions  } from 'react-native';
import { Flex, WhiteSpace } from 'antd-mobile-rn';
import { Actions } from 'react-native-router-flux';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';

export default class CameraUnit extends Component {
	
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
		const {videourl} = this.props;
		
		const win = Dimensions.get('window');

		const ratio = win.width/541;

		const newWinwidth = win.width - 20;
		const newWinheight = win.width/1.8;



		return (
		<View>
			<View style={styles.container}>
				<Text style = {{ textAlign: 'center', fontSize:14, margin:10 }}>Камера {this.props.cameraname}</Text>
				<TouchableWithoutFeedback onPress={() => this.setState({paused: !this.state.paused})}>
					<WebView
						source={{html: '<iframe src="https://open.ivideon.com/embed/v2/?server=100-e0kE14gOCLccUtJjLFMWSe&amp;camera=0&amp;width=&amp;height=&amp;lang=en" width="' + newWinwidth + '"  height="' + newWinheight + '" frameborder="0" allowfullscreen></iframe>'}}						
					/>
				</TouchableWithoutFeedback>	
			</View>
		</View>	 
   );}
}



const styles = StyleSheet.create({
	container: {
		height: 300,
	},
	backgroundVideo: {
		position: 'absolute',
		top: 30,
		left: 0,
		bottom: 0,
		right: 0,
	},		
})
