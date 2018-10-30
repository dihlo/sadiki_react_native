import React, { Component } from 'react';
import { Text, View, ScrollView, Image, Dimensions  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Pagination, WhiteSpace, WingBlank, List, Badge, Switch } from 'antd-mobile-rn';
import Icon from 'react-native-vector-icons/Ionicons';

import NewsUnit from './NewsUnit';


export default class News extends Component {

	constructor(props) {
		super(props);
		this.state = {	
		}
	}

	render () {
    const locale = {
      prevText: '<',
      nextText: '>',
    };
    const win = Dimensions.get('window');
    const ratio = win.width/541;
	return (
	  <ScrollView>
	  	<WhiteSpace />   
	  	<WingBlank size="sm">
	  		<Text style={{color: 'black', fontSize: 14}}>29.10.2018</Text>
	  	</WingBlank> 	
		<NewsUnit newsimgurl="http://www.bfoto.ru/foto/panorams/bfoto_ru_443.jpg" newstitle="Проверка" newstext="Lorem asjdsakd hsai hsaiu nsia hisausaisa isua asgdusa"/>   	  	
	  	<NewsUnit newsimgurl="http://dogvdome.ru/wp-content/uploads/2017/06/%D0%9A%D0%B0%D0%BA%D0%B8%D0%B5-%D0%B5%D1%81%D1%82%D1%8C-%D0%BF%D0%BE%D1%80%D0%BE%D0%B4%D1%8B-%D1%81%D0%BE%D0%B1%D0%B0%D0%BA-%D1%81%D1%80%D0%B5%D0%B4%D0%BD%D0%B5%D0%B3%D0%BE-%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80%D0%B0-1.jpg" newstitle="Второя новость" newstext="Lorem asjdsakd hsai hsaiu nsia hisausaisa isua asgdusa"/>
 	   	<Pagination total={5} current={1} locale={locale} />
	   	<WhiteSpace />
	  </ScrollView>
	)}
}
