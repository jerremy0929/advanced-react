import React from 'react'
// tslint:disable-next-line: no-implicit-dependencies
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
// tslint:disable-next-line: no-implicit-dependencies
import StateApi, { IndexArticle, IArticle } from 'state-api'
import SearchBar from './SearchBar'
import pickby from 'lodash.pickby'

class App extends React.Component<
  { store: StateApi },
  {
    articles: IndexArticle
    searchTerm: string
  }
> {
  state = {
    articles: this.props.store.getState().articles,
    searchTerm: '',
  }

  static childContextTypes = {
    store: PropTypes.object,
  }

  getChildContext = () => ({
    store: this.props.store,
  })

  setSearchTerm = (searchTerm: string) => {
    this.setState({ searchTerm })
  }

  render() {
    let { articles } = this.state
    const { searchTerm } = this.state
    if (searchTerm) {
      articles = pickby<IArticle>(articles, value => {
        return value.title.match(searchTerm) || value.body.match(searchTerm)
      })
    }

    return (
      <div>
        <SearchBar doSearch={this.setSearchTerm} />
        <ArticleList articles={articles} />
      </div>
    )
  }
}

export default App
