import React, { Component } from 'react';
import { Text, View, ScrollView, Image, Dimensions  } from 'react-native';
import { Pagination, WhiteSpace, WingBlank, List, Badge, Switch } from 'antd-mobile-rn';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {news} from '../actions';

import NewsUnit from './NewsUnit';


class News extends Component {

	constructor(props) {
		super(props);
		this.state = {	
		}

	}

	componentDidMount() {
		this.props.news();
	}

	render () {
    const locale = {
      prevText: '<',
      nextText: '>',
    };
    const win = Dimensions.get('window');
		const ratio = win.width/541;

		const NewsOne = this.props.newsdata.map((id)=> <NewsUnit newsimgurl="" newstitle={id.Title} newstext={id.Body} />);		

	return (
	  <ScrollView style={{backgroundColor: 'white'}}>
	  	<WhiteSpace />   
	  	<WingBlank size="sm">
	  		<Text style={{color: 'black', fontSize: 14}}>29.10.2018</Text>
	  	</WingBlank> 	
			{NewsOne}	
 	   	<Pagination total={5} current={1} locale={locale} />
	   	<WhiteSpace />
	  </ScrollView>
	)}
}

function mapStateToProps(state) {
	console.log(state.news.newsData)
  const {newsdata, newsloading} = state.news.newsData;
  return {newsdata, newsloading};
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators ({ news: news}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(News);
