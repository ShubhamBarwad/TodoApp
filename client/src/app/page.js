'use client'
import Header from './components/Header'
import Container from './components/Container'
import store from './store'
import { Provider } from 'react-redux'

export default function Home() {
  return (
    <Provider store={store}>
      <Header />
      <Container />
    </Provider>
  )
}
