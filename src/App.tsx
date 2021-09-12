import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import { Container } from '@material-ui/core'
import GameWrapper from './components/game-wrapper'

function App() {
  return (
    <Provider store={store}>
      <Container style={{ marginTop: 40 }}>
        <GameWrapper />
      </Container>
    </Provider>
  )
}

export default App
