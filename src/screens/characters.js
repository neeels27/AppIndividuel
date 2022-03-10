import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Characters = ({ navigation }) => {
  return (
    <>
      <TextStyled>Characters</TextStyled>
      <Button
        onPress={() => navigation.navigate('HomeStack', { screen: 'settings' })}
      >
        <TextStyled>To Home</TextStyled>
      </Button>
    </>
  )
}

const Button = styled.TouchableOpacity``
const TextStyled = styled.Text``

Characters.propTypes = {}

export default Characters
