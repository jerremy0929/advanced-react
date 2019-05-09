import React, { Component, ChangeEvent } from 'react'
import debounce from 'lodash.debounce'

export default class SearchBar extends Component<
  { doSearch: (text: string) => void },
  { searchTerm: string }
> {
  state = {
    searchTerm: '',
  }

  doSearch = debounce(() => {
    this.props.doSearch(this.state.searchTerm)
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
