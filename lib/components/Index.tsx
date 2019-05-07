import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

/*
const App: React.FC = () => {
  const [anwser, setAnwser] = useState<number>(42)

  useEffect(() => {
    // tslint:disable-next-line: semicolon
    ;(async () => {
      const newAnwser = await asyncFunc()
      setAnwser(newAnwser)
    })()
  }, [anwser])

  const asyncFunc = (): Promise<number> => {
    return Promise.resolve(37)
  }

  return <h2>Hello React -- {anwser}</h2>
}
*/

// ReactDOM.render(<App />, document.getElementById('root'))
// React v17 server side render
ReactDOM.hydrate(<App />, document.getElementById('root'))
