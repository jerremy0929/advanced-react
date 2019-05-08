// tslint:disable-next-line: no-implicit-dependencies
import StateApi, { IArticle, IAuthor } from 'state-api'
import dummy from '../testData.json'

const store = new StateApi(dummy.data)

describe('StateApi', () => {
  it('exposes articles as an object', () => {
    const articles = store.getState().articles
    const articleId = dummy.data.articles[0].id
    const articleTitle = dummy.data.articles[0].title

    expect(articles).toHaveProperty(articleId)
    expect((<IArticle>articles[articleId]).title).toBe(articleTitle)
  })

  it('exposes authors as an object', () => {
    const authors = store.getState().authors
    const authorId = dummy.data.authors[0].id
    const authorFirstName = dummy.data.authors[0].firstName
    expect(authors).toHaveProperty(authorId)
    expect((<IAuthor>authors[authorId]).firstName).toBe(authorFirstName)
  })
})
