import React, { useState } from 'react'
import DataApi, { IndexArticle, IndexAuthor, IAuthor } from '../DataApi'
import ArticleList from './ArticleList'

import dummy from '../testData.json'

const api = new DataApi(dummy.data)

const App: React.FC = () => {
  const [articles /* , setArticles */] = useState<IndexArticle>(
    api.getArticles(),
  )
  const [authors /* , setAuthors */] = useState<IndexAuthor>(api.getAuthors())
  const articleActions: { [key: string]: (id: string) => IAuthor } = {
    lookupAuthor: authorId => authors[authorId],
  }

  return <ArticleList articles={articles} articleActions={articleActions} />
}

export default App
