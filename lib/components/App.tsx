import React from 'react'
// tslint:disable-next-line: no-implicit-dependencies
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
// tslint:disable-next-line: no-implicit-dependencies
import StateApi, { IArticle } from 'state-api'
import SearchBar from './SearchBar'
import Timestamp from './Timestamp'
import pickby from 'lodash.pickby'

class App extends React.PureComponent<{ store: StateApi }> {
  private subscriptionId: number = 0

  static childContextTypes = {
    store: PropTypes.object,
  }

  getChildContext = () => ({
    store: this.props.store,
  })

  appState = () => {
    const { articles, searchTerm } = this.props.store.getState()
    return { articles, searchTerm }
  }

  state = this.appState()

  onStoreChange = () => {
    this.setState(this.appState)
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
      const regexp = new RegExp(searchTerm!, 'i')
      articles = pickby<IArticle>(articles, value => {
        return value.title.match(regexp) || value.body.match(regexp)
      })
    }

    return (
      <div>
        <Timestamp />
        <SearchBar />
        <ArticleList articles={articles} />
      </div>
    )
  }
}

export default App
