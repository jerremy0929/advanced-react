import React from 'react'
// tslint:disable-next-line: no-implicit-dependencies
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
// tslint:disable-next-line: no-implicit-dependencies
import StateApi from 'state-api'

class App extends React.Component<{ store: StateApi }> {
  state = this.props.store.getState()

  static childContextTypes = {
    store: PropTypes.object,
  }

  getChildContext = () => ({
    store: this.props.store,
  })

  render() {
    return <ArticleList articles={this.state.articles} />
  }
}

export default App
