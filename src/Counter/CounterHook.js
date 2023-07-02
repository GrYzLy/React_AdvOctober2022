import React, {useState} from 'react'

const CounterHook = (props) => {

  const [counter, setCounter] = useState(0)

  return (
      <div>
        Counter:{counter}
        <button onClick={() => setCounter(counter + 1)}>Click!</button>
      </div>
  )
  
}



export default CounterHook;
