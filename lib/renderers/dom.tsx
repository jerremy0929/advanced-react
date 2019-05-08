import React from 'react'
import ReactDOM from 'react-dom'
// tslint:disable-next-line: no-implicit-dependencies
import App from 'components/App'
// tslint:disable-next-line: no-implicit-dependencies
import StateApi, { IData } from 'state-api'

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
declare global {
  interface Window {
    initialData: IData
  }
}
const store = new StateApi(window.initialData)
ReactDOM.hydrate(<App store={store} />, document.getElementById('root'))
