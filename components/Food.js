import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

const Food = () => {
   const goToHome = () => {
      Actions.home()
   }
   return (
      <TouchableOpacity style = {{ margin: 128 }} onPress = {goToHome}>
         <Text>This is Food</Text>
      </TouchableOpacity>
   )
}
export default Food