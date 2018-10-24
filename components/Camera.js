import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Camera = () => {
   const goToAbout = () => {
      Actions.about()
   }
   return (
      <TouchableOpacity style = {{ margin: 128 }} onPress = {goToAbout}>
         <Text>This is Camera!</Text>
      </TouchableOpacity>
   )
}
export default Camera