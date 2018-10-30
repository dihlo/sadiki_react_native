import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import {Text, View} from 'react-native';
import Camera from './Camera.js';
import Food from './Food.js';
import News from './News.js';
import Schedule from './Schedule.js';
import NewsFullText from './NewsFullText.js';
import Icon from 'react-native-vector-icons/AntDesign';

const TabIcon = ({selected, iconname}) => {
	return (
		  <Icon name={iconname} size={18}/>
	)
}

const Routes = () => (
   <Router>
      <Scene key = "root" hideNavBar = "true">
      	 <Stack key = "tabbar" tabs activeTintColor="black" tabBarStyle={{background: '#FFFFFF'}}>
      	 	<Scene key = "cameratab" title="Камеры" iconname="videocamera" icon={TabIcon}>
		      	 <Scene key = "camera" component = {Camera} title = "Камеры" initial = {true} />
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
   </Router>
)
export default Routes