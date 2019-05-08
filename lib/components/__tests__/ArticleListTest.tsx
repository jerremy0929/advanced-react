import React from 'react'
// import renderer from 'react-test-renderer'

import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

import ArticleList from '../ArticleList'
// tslint:disable-next-line: no-implicit-dependencies
import StateApi, { IndexArticle } from 'state-api'
import dummy from '../../testData.json'

const store = new StateApi(dummy.data)

describe('ArticleList', () => {
  const testProps: {
    store: StateApi
    articles: IndexArticle
  } = {
    store,
    articles: store.getState().articles,
  }

  it('renders correctly', () => {
    const wrapper = shallow(<ArticleList {...testProps} />)

    expect(wrapper.find('ArticleContainer').length).toBe(5)
    expect(wrapper).toMatchSnapshot()
  })
})
