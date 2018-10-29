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

    const locale = {
      prevText: '<',
      nextText: '>',
    };

	return (
	  <ScrollView>
	  	<WhiteSpace />   
	  	<WingBlank size="sm">
	  		<Text style={{color: 'black', fontSize: 14}}>29.10.2018</Text>
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
		      <Card.Footer content="Колорийность" extra={<Text>500 ккал</Text>} />
		    </Card>
	    </WingBlank>
	    <WhiteSpace size="sm" />
	    <WingBlank size="sm">
		    <Card full>
		      <Card.Header
		        title="Полдник"
		        thumb={<Icon name="ios-beer" size={25} color="#FF9933" style={{paddingRight: 10 }}/>}		        
		      />
		      <Card.Body>
		        <Text style={{fontSize: 18, paddingLeft: 15, color: 'black'}}>Яблоко 150 г.</Text>
		        <Text style={{fontSize: 18, paddingLeft: 15, color: 'black'}}>Булочка 250 г.</Text>
		      </Card.Body>
		      <Card.Footer content="Колорийность" extra={<Text>500 ккал</Text>} />
		    </Card>
	    </WingBlank>
	    <WhiteSpace size="sm" />
	   	<WingBlank size="sm">
		    <Card full>
		      <Card.Header
		        title="Обед"
		        thumb={<Icon name="md-nutrition" size={25} color="#FF9933" style={{paddingRight: 10 }}/>}		        
		      />
		      <Card.Body>
		        <Text style={{fontSize: 18, paddingLeft: 15, color: 'black'}}>Суп борщ 150 г.</Text>
		        <Text style={{fontSize: 18, paddingLeft: 15, color: 'black'}}>Котлета 250 г.</Text>
		        <Text style={{fontSize: 18, paddingLeft: 15, color: 'black'}}>Хлеб 20 г.</Text>
		      </Card.Body>
		      <Card.Footer content="Колорийность" extra={<Text>500 ккал</Text>} />
		    </Card>
	    </WingBlank>
	    <WhiteSpace size="sm" />
	    <Pagination total={5} current={1} locale={locale} />
	    <WhiteSpace />  
	  </ScrollView>
	)}
}
