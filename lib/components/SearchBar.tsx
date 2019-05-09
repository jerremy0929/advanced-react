import React, { Component, ChangeEvent } from 'react'
import storeProvider from './storeProvider'
// tslint:disable-next-line: no-implicit-dependencies
import StateApi from 'state-api'
import debounce from 'lodash.debounce'

class SearchBar extends Component<
  { store?: StateApi },
  { searchTerm: string }
> {
  state = {
    searchTerm: '',
  }

  doSearch = debounce(() => {
    this.props.store!.setSearchTerm(this.state.searchTerm)
  }, 300)

  handleSearch = (evt: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: evt.target.value }, () => {
      this.doSearch()
    })
  }

  render() {
    return (
      <input
        type="search"
        placeholder="Enter search term"
        value={this.state.searchTerm}
        onChange={this.handleSearch}
      />
    )
  }
}

export default storeProvider()(SearchBar)
