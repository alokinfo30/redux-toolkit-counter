import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from "./redux/countslice"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <>
      <div className='App'>
        <h1>The count is {count}</h1>
        <div className="button">
        <button
          onClick={() => dispatch(increment())}
        >
          Increase
        </button>
        <button
          onClick={() => dispatch(decrement())}
        >
          Decrease
        </button>
        <button onClick={()=>dispatch(incrementByAmount(10))} > Increase by 10</button>

        </div>
        
      </div>
    </>
  )
}

export default App
