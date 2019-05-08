import React from 'react'
import ReactDOMServer from 'react-dom/server'
import axios, { AxiosResponse } from 'axios'
// tslint:disable-next-line: no-implicit-dependencies
import StateApi, { IData } from 'state-api'
// tslint:disable-next-line: no-implicit-dependencies
import App from 'components/App'
// tslint:disable-next-line: no-implicit-dependencies
import config from 'config'

const serverRender = async () => {
  // axios
  const rowData: AxiosResponse<IData> = await axios.get(
    `http://${config.host}:${config.port}/data`,
  )
  const store = new StateApi(rowData.data)
  // const initialData = {
  //   articles: store.getArticles(),
  //   authors: store.getAuthors(),
  // }
  return {
    initialData: rowData.data,
    initialMarkup: ReactDOMServer.renderToString(<App store={store} />),
  }
}

export default serverRender
