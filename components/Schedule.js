import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Pagination, WhiteSpace, WingBlank, Steps } from 'antd-mobile-rn';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {schedules} from '../actions';

class Schedule extends Component {

	constructor(props) {
		super(props);
		this.state = {	
		}

		this.test = this.test.bind(this);
	}

	componentDidMount() {
		this.props.schedules();
	}

	test() {
		data = this.props.data;
		console.log(data);
	}

	render () {
    const locale = {
      prevText: '<',
      nextText: '>',
    };
    const Step = Steps.Step;
		const itemStep = this.props.data.map((id)=> <Step status="finish" title={id.Name} description={id.Date} />);
		// Return today date and time
		let currentTime = new Date();
		let month = currentTime.getMonth() + 1;
		let day = currentTime.getDate();
		var year = currentTime.getFullYear(); 
		if( day < 10) {
			day = "0" + day.toString();			
		}
		if( month < 10) {
			month = "0" + month.toString();			
		}


		this.test();

	return (
	  <ScrollView style={{backgroundColor: 'white'}}>
	  	<WhiteSpace />   
	  	<WingBlank size="sm">
	  		<Text style={{color: 'black', fontSize: 14}}>{day + "." + month + "." + year}</Text>
	  	</WingBlank>
		<WhiteSpace />   	  	
	  	<WingBlank size="sm">
		    <Steps>
					{/*itemStep*/}
					<Step status="finish" title={"Прием детей, гимнастика"} description={"7:30-8:25"} />
					<Step status="finish" title={"Завтрак"} description={"8:25-8:50"} />
					<Step status="finish" title={"Подготовка к занятиям"} description={"8:50-9:00"} />
					<Step status="finish" title={"Образовательная деятельность, игровые занятия"} description={"9:00-10:00"} />
					<Step status="finish" title={"Прогулка"} description={"10:00-12:00"} />
					<Step status="finish" title={"Обед"} description={"12:00-12:30"} />
					<Step status="finish" title={"Подготовка ко сну, сон"} description={"12:30-15:00"} />
					<Step status="finish" title={"Постепенный подъем. Закаливающие процедуры"} description={"15:00-15:30"} />
					<Step status="finish" title={"Полдник"} description={"15:30-16:00"} />
					<Step status="finish" title={"Занятия, кружки, игры, инд. работа с детьми"} description={"16:00-16:15"} />
					<Step status="finish" title={"Самост. деятельность"} description={"16:15-17:10"} />
					<Step status="finish" title={"Ужин"} description={"17:20-17:50"} />
					<Step status="finish" title={"Игры, уход домой"} description={"18:00-19:30 "} />
		    </Steps>	  		
	  	</WingBlank>
	  </ScrollView>
	)}
}

function mapStateToProps(state) {
  const {data, loading} = state.schedules.schedulesData;
  return {data, loading};
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators ({ schedules: schedules}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Schedule);
