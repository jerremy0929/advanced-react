import React from 'react'
// tslint:disable-next-line: no-implicit-dependencies
import StateApi, { IArticle, IAuthor } from 'state-api'
import storeProvider from './storeProvider'

const styles: { [key: string]: React.CSSProperties } = {
  article: {
    paddingBottom: 10,
    marginBottom: 10,
    border: '1px solid #aaa',
  },
  title: {
    fontWeight: 'bold',
  },
  date: {
    fontSize: '0.8em',
    color: '#888',
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  body: {
    paddingLeft: 20,
  },
}

const dateDisplay = (dateString: string): string => {
  return new Date(dateString).toDateString()
}

const Article: React.FC<{
  article: IArticle
  author?: IAuthor
}> = ({ article, author }) => {
  if (author) {
    return (
      <div style={styles.article}>
        <div style={styles.title}>{article.title}</div>
        <div style={styles.date}>{dateDisplay(article.date)}</div>
        <div style={styles.author}>
          <a href={author.website}>
            {author.firstName} {author.lastName}
          </a>
        </div>
        <div style={styles.body}>{article.body}</div>
      </div>
    )
  }
  return null
}

const extraProps = (store: StateApi, props: { article: IArticle }) => ({
  author: store.lookupAuthor(props.article.authorId),
})

export default storeProvider(extraProps)(Article)
