import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const AppWithRouter = () => (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
  const div = document.createElement('div')
  ReactDOM.render(<AppWithRouter />, div)
  ReactDOM.unmountComponentAtNode(div)
})
