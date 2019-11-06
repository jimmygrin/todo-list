import React from "react"
import { Provider } from "react-redux"
import store from "../store"
import Main from './Main'
import ListForm from './ListForm'


function App() {
  return (
    <Provider store={store}>
      <Main />
      <ListForm />
    </Provider>
  )
}

export default App

