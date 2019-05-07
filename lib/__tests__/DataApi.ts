import DataApi, { IArticle, IAuthor } from '../DataApi'
import dummy from '../testData.json'

const api: DataApi = new DataApi(dummy.data)

describe('DataApi', () => {
  it('exposes articles as an object', () => {
    const articles = api.getArticles()
    const articleId = dummy.data.articles[0].id
    const articleTitle = dummy.data.articles[0].title

    expect(articles).toHaveProperty(articleId)
    expect((<IArticle>articles[articleId]).title).toBe(articleTitle)
  })

  it('exposes authors as an object', () => {
    const authors = api.getAuthors()
    const authorId = dummy.data.authors[0].id
    const authorFirstName = dummy.data.authors[0].firstName
    expect(authors).toHaveProperty(authorId)
    expect((<IAuthor>authors[authorId]).firstName).toBe(authorFirstName)
  })
})
