import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Importing the store we created above
import { store } from "./redux/store"
//importing the provider from react-redux  
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
)
