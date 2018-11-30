import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Pagination, WhiteSpace, WingBlank, Steps } from 'antd-mobile-rn';
import Icon from 'react-native-vector-icons/Ionicons';
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

		this.test();

	return (
	  <ScrollView>
	  	<WhiteSpace />   
	  	<WingBlank size="sm">
	  		<Text style={{color: 'black', fontSize: 14}}>123123213</Text>
	  	</WingBlank>
		<WhiteSpace />   	  	
	  	<WingBlank size="sm">
		    <Steps>
					{itemStep}
		    </Steps>	  		
	  	</WingBlank>
	    <WhiteSpace /> 
	   	<Pagination total={5} current={1} locale={locale} />
	   	<WhiteSpace />
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
