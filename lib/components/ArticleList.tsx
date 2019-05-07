import React from 'react'
import Article from './Article'
import { IndexArticle, IAuthor } from '../DataApi'

const ArticleList: React.FC<{
  articles: IndexArticle
  articleActions: { [key: string]: (id: string) => IAuthor }
}> = ({ articles, articleActions }) => {
  return (
    <div>
      {Object.values(articles).map(article => (
        <Article key={article.id} article={article} action={articleActions} />
      ))}
    </div>
  )
}

export default ArticleList
