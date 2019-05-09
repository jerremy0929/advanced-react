import React from 'react'
// tslint:disable-next-line: no-implicit-dependencies
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
// tslint:disable-next-line: no-implicit-dependencies
import StateApi, { IArticle } from 'state-api'
import SearchBar from './SearchBar'
import Timestamp from './Timestamp'
import pickby from 'lodash.pickby'

class App extends React.Component<{ store: StateApi }> {
  private subscriptionId: number = 0

  state = this.props.store.getState()

  static childContextTypes = {
    store: PropTypes.object,
  }

  getChildContext = () => ({
    store: this.props.store,
  })

  onStoreChange = () => {
    this.setState(this.props.store.getState())
  }

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange)
    this.props.store.startClock()
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId)
  }

  render() {
    const { searchTerm } = this.state
    let { articles } = this.state

    if (searchTerm) {
      articles = pickby<IArticle>(articles, value => {
        return value.title.match(searchTerm) || value.body.match(searchTerm)
      })
    }

    return (
      <div>
        <Timestamp timestamp={this.state.timestamp} />
        <SearchBar doSearch={this.props.store.setSearchTerm} />
        <ArticleList articles={articles} />
      </div>
    )
  }
}

export default App
