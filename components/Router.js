import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import {Text, View} from 'react-native';
import Camera from './Camera.js';
import Food from './Food.js';
import News from './News.js';
import Schedule from './Schedule.js';
import NewsFullText from './NewsFullText.js';
import Auth from './Auth.js';
import Icon from 'react-native-vector-icons/AntDesign';

const TabIcon = ({selected, iconname}) => {
	return (
		  <Icon name={iconname} style={{color: 'black'}} size={18}/>
	)
}

const Routes = () => (
   <Router>
	   <Scene key="root">
	   	  <Scene key="auth" component={Auth} initial = {true}></Scene>
	      <Scene hideNavBar = "true">
	           <Stack key = "tabbar" 
				   tabs={true} 
				   activeBackgroundColor="#f7f7f7" 
				   activeTintColor="black"
				   inactiveTintColor="#848484"
				   tabBarStyle={{backgroundColor: 'white'}}
				   tabStyle={{
						width: '100%',
						height: '100%',
						color: 'black',                        
					}}
					swipeEnabled={false}
					animationEnabled={false}
					panHandlers={null}
				>
	      	 	<Scene key = "cameratab" title="Камеры" iconname="videocamera" icon={TabIcon}>
			      	 <Scene key = "camera" component = {Camera} title = "Камеры" />
		        </Scene>
	      	 	<Scene key = "foodtab" title="Питание" iconname="rest" icon={TabIcon}>
			         <Scene key = "food" component = {Food} title = "Питание" />
		        </Scene>
	      	 	<Scene key = "newstab" title="Новости" iconname="solution1" icon={TabIcon}>
			         <Scene key = "news" component = {News} title = "Новости" />
			         <Scene key = "NewsFullText" component = {NewsFullText} />
		        </Scene>
	      	 	<Scene key = "scheduletab" title="Расписание" iconname="calendar" icon={TabIcon}>
			         <Scene key = "schedule" component = {Schedule} title = "Расписание" />
		        </Scene>  	        
	         </Stack>
	      </Scene>
	   </Scene>   
   </Router>
)
export default Routes