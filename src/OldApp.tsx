import { useState } from 'react'
import reactLogo from './assets/react.svg'
import dreamLogo from './assets/download.jpg'
import './OldApp.css'

function App() {
  const [count, setCount] = useState(0)
  const [roya, setRoya] = useState(-100)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={dreamLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 10)}>
          count is {count}
        </button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more{count}
      </p>
    </>
  )
}

export default App
