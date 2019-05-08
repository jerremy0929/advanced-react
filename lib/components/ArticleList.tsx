import React from 'react'
import Article from './Article'
// tslint:disable-next-line: no-implicit-dependencies
import { IndexArticle } from 'state-api'

const ArticleList: React.FC<{
  articles: IndexArticle
}> = ({ articles }) => {
  return (
    <div>
      {Object.values(articles).map(article => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  )
}

export default ArticleList
