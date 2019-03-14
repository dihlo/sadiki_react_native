import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, TouchableWithoutFeedback, WebView, Dimensions} from 'react-native';
import { Flex, WhiteSpace, Button } from 'antd-mobile-rn';
import { Actions } from 'react-native-router-flux';
import Orientation from 'react-native-orientation';


export default class FullScreen extends Component {
	
	constructor(props) {
		super(props);

		this.state = {	
		}
	}

    componentDidMount () {
        Orientation.lockToLandscape();
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
		const {uri} = this.props;
		
		const win = Dimensions.get('window');

		const ratio = win.width/541;

		const newWinwidth =   Dimensions.get('window').height;
		const newWinheight = Dimensions.get('window').width;
        




		return (
            <View style={{ width: "100%", height:newWinheight}}>
                <WebView
                    source={{html: '<iframe src="https://www.youtube.com/embed/o_RcbNmzFC0" width="' + newWinwidth + '"  height="' + newWinheight + '" frameborder="0" allowfullscreen></iframe>'}}                        
                />
            </View>
   );}
}
