import React from 'react'
import storeProvider from './storeProvider'
// tslint:disable-next-line:no-implicit-dependencies
import StateApi from 'state-api'

class Timestamp extends React.Component<{ timestamp?: Date }> {
  shouldComponentUpdate(nextProps: { timestamp: Date }) {
    return (
      this.timeDisplay(this.props.timestamp as Date) !==
      this.timeDisplay(nextProps.timestamp)
    )
  }

  timeDisplay = (timestamp: Date) =>
    timestamp!.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })

  render() {
    return (
      <div>
        {this.props.timestamp!.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </div>
    )
  }
}

const extraProps = (store: StateApi) => ({
  timestamp: store.getState().timestamp,
})

export default storeProvider(extraProps)(Timestamp)
