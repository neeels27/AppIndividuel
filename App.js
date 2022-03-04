import React from 'react'
import { ThemeProvider } from 'styled-components'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'
import Counter from './src/components/counter'

import Header from './src/components/header'
import StyledExamples from './src/components/styledExamples'
import TodoList from './src/components/todoList'
import Trombi from './src/components/trombi'

import { lightTheme, darkTheme } from './src/config/theme'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  // }

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <SafeAreaView>
        {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
        <StyledExamples />
      </SafeAreaView>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400'
  },
  highlight: {
    fontWeight: '700'
  }
})

export default App
