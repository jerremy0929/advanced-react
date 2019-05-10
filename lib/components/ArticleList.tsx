import React from 'react'
import Article from './Article'
// tslint:disable-next-line: no-implicit-dependencies
import { IndexArticle } from 'state-api'

class ArticleList extends React.PureComponent<{ articles: IndexArticle }> {
  render() {
    return (
      <div>
        {Object.values(this.props.articles).map(article => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    )
  }
}

export default ArticleList
