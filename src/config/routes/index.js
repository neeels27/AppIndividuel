import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Characters from '../../screens/characters'
import HomeStack from './homeStack'

const BottomTab = createBottomTabNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name='HomeStack' component={HomeStack} />
        <BottomTab.Screen name='Characters' component={Characters} />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}

export default Routes
