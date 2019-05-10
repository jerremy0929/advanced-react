import React from 'react'
import storeProvider from './storeProvider'
// tslint:disable-next-line:no-implicit-dependencies
import StateApi from 'state-api'

const timeDisplay = (timestamp: Date) =>
  timestamp!.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  })
class Timestamp extends React.PureComponent<{ timestamp?: Date }> {
  render() {
    return <div>{this.props.timestamp}</div>
  }
}

const extraProps = (store: StateApi) => ({
  timestamp: timeDisplay(store.getState().timestamp),
})

export default storeProvider(extraProps)(Timestamp)
