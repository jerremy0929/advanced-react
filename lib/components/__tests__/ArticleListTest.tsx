import React from 'react'
import ArticleList from '../ArticleList'
import { IndexArticle, IAuthor } from '../../DataApi'
import renderer from 'react-test-renderer'

describe('ArticleList', () => {
  const testProps: {
    articles: IndexArticle
    articleActions: { [key: string]: (id: string) => IAuthor }
  } = {
    articles: {
      a: { id: 'a', title: '', date: '', authorId: '', body: '' },
      b: { id: 'b', title: '', date: '', authorId: '', body: '' },
    },
    articleActions: {
      lookupAuthor: jest.fn(() => ({
        id: '',
        firstName: '',
        lastName: '',
        website: '',
      })),
    },
  }

  it('renders correctly', () => {
    // const element = renderer.create(<div>Hello</div>).toJSON()
    // console.log(element)

    const tree = renderer
      .create(
        <ArticleList
          articles={testProps.articles}
          articleActions={testProps.articleActions}
        />,
      )
      .toJSON()
    // console.log(tree)
    expect(tree!.children!.length).toBe(2)
    expect(tree).toMatchInlineSnapshot()
  })
})
