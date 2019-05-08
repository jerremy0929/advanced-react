import React from 'react'
import Article from './Article'
// tslint:disable-next-line: no-implicit-dependencies
import StateApi, { IndexArticle } from 'state-api'

const ArticleList: React.FC<{
  articles: IndexArticle
  store: StateApi
}> = ({ articles, store }) => {
  return (
    <div>
      {Object.values(articles).map(article => (
        <Article key={article.id} article={article} store={store} />
      ))}
    </div>
  )
}

export default ArticleList
