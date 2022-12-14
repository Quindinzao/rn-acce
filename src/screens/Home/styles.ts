// External libraries
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;

  background-color: ${props => props.theme.colors.secondary};
`

export const ImagePromotion = styled.Text`
  color: ${props => props.theme.colors.secondary};
  font-size: 24px;
  font-family: ${props => props.theme.fonts.h4};
`
