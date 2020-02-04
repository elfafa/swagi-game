import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Notable');
    body {
        font-family: 'Notable', sans-serif;
    }
`

export const MainWrapper = styled.div`
  width: 75%;
  margin: auto;
`