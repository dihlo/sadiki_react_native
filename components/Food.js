import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { List, Badge, WhiteSpace, WingBlank, Pagination, Flex, Button, Card } from 'antd-mobile-rn';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Food extends Component {

	constructor(props) {
		super(props);
		this.state = {	
		}
	}



	render () {
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

    const locale = {
      prevText: '<',
      nextText: '>',
    };

	return (
	  <ScrollView style={{backgroundColor: '#f7f7f7'}}>
	  	<WhiteSpace />   
	  	<WingBlank size="sm">
	  		<Text style={{color: 'black', fontSize: 14}}>{day + "." + month + "." + year}</Text>
	  	</WingBlank>
	    <WhiteSpace />       
	    <WingBlank size="sm">
		    <Card full>
		      <Card.Header
		        title="Завтрак"
		        thumb={<Icon name="ios-restaurant" size={25} color="#FF9933" style={{paddingRight: 10 }}/>}		        
		      />
		      <Card.Body>
		        <Text style={{fontSize: 18, paddingLeft: 15, color: 'black'}}>Каша манная 150 г.</Text>
		        <Text style={{fontSize: 18, paddingLeft: 15, color: 'black'}}>Компот малиновый 250 г.</Text>
		        <Text style={{fontSize: 18, paddingLeft: 15, color: 'black'}}>Хлеб 20 г.</Text>
		      </Card.Body>
		      <Card.Footer content="Калорийность" extra={<Text>500 ккал</Text>} />
		    </Card>
	    </WingBlank>
	    <WhiteSpace size="sm" />
	    <WingBlank size="sm">
		    <Card full>
		      <Card.Header
		        title="Полдник"
		        thumb={<Icon name="ios-restaurant" size={25} color="#FF9933" style={{paddingRight: 10 }}/>}		        
		      />
		      <Card.Body>
		        <Text style={{fontSize: 18, paddingLeft: 15, color: 'black'}}>Яблоко 150 г.</Text>
		        <Text style={{fontSize: 18, paddingLeft: 15, color: 'black'}}>Булочка 250 г.</Text>
		      </Card.Body>
		      <Card.Footer content="Калорийность" extra={<Text>500 ккал</Text>} />
		    </Card>
	    </WingBlank>
	    <WhiteSpace size="sm" />
	   	<WingBlank size="sm">
		    <Card full>
		      <Card.Header
		        title="Обед"
		        thumb={<Icon name="ios-restaurant" size={25} color="#FF9933" style={{paddingRight: 10 }}/>}		        
		      />
		      <Card.Body>
		        <Text style={{fontSize: 18, paddingLeft: 15, color: 'black'}}>Суп борщ 150 г.</Text>
		        <Text style={{fontSize: 18, paddingLeft: 15, color: 'black'}}>Котлета 250 г.</Text>
		        <Text style={{fontSize: 18, paddingLeft: 15, color: 'black'}}>Хлеб 20 г.</Text>
		      </Card.Body>
		      <Card.Footer content="Калорийность" extra={<Text>500 ккал</Text>} />
		    </Card>
	    </WingBlank>
			<WhiteSpace size="sm" />
			<WingBlank size="sm">
		    <Card full>
		      <Card.Header
		        title="Ужин"
		        thumb={<Icon name="ios-restaurant" size={25} color="#FF9933" style={{paddingRight: 10 }}/>}		        
		      />
		      <Card.Body>
		        <Text style={{fontSize: 18, paddingLeft: 15, color: 'black'}}>Макароны 150 г.</Text>
		        <Text style={{fontSize: 18, paddingLeft: 15, color: 'black'}}>Сосиска 250 г.</Text>
		        <Text style={{fontSize: 18, paddingLeft: 15, color: 'black'}}>Хлеб 20 г.</Text>
		      </Card.Body>
		      <Card.Footer content="Калорийность" extra={<Text>500 ккал</Text>} />
		    </Card>
	    </WingBlank>
	  </ScrollView>
	)}
}
