import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import { Box } from '@material-ui/core'
import { Container } from '@material-ui/core'
import GameWrapper from './components/game-wrapper'

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Box maxWidth="md">
          <GameWrapper />
        </Box>
      </Container>
    </Provider>
  )
}

export default App
