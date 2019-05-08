import React, { useState } from 'react'
import ArticleList from './ArticleList'
// tslint:disable-next-line: no-implicit-dependencies
import StateApi from 'state-api'

const App: React.FC<{ store: StateApi }> = ({ store }) => {
  const [storeState] = useState(store.getState())

  return <ArticleList articles={storeState.articles} store={store} />
}

export default App
