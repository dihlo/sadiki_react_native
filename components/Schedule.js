import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Pagination, WhiteSpace, WingBlank, Steps } from 'antd-mobile-rn';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Schedule extends Component {

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
    const Step = Steps.Step;

	return (
	  <ScrollView>
	  	<WhiteSpace />   
	  	<WingBlank size="sm">
	  		<Text style={{color: 'black', fontSize: 14}}>29.10.2018</Text>
	  	</WingBlank>
		<WhiteSpace />   	  	
	  	<WingBlank size="sm">
		    <Steps>
		      <Step status="finish" title="Завтрак" description="8:30 - 9:30" />
		      <Step status="finish" title="Рисование" description="9:30 - 11:00" />
		      <Step status="process" title="Свободное время" description="11:00 - 13:00" />
		      <Step status="wait" title="Обед" description="13:00 - 14:00" />
		      <Step status="wait" title="Сон" description="14:00 - 15:00" />
		      <Step status="wait" title="Свободное время" description="15:00 - 16:00" />
		      <Step status="wait" title="Лепка" description="16:00 - 17:00" />
		      <Step status="wait" title="Свободное время" description="17:00 - 18:00" />
		    </Steps>	  		
	  	</WingBlank>
	    <WhiteSpace /> 
	   	<Pagination total={5} current={1} locale={locale} />
	   	<WhiteSpace />
	  </ScrollView>
	)}
}
