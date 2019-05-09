import React from 'react'
import storeProvider from './storeProvider'
// tslint:disable-next-line:no-implicit-dependencies
import StateApi from 'state-api'

const Timestamp: React.FC<{ timestamp?: Date }> = props => {
  return <div>{props.timestamp!.toString()}</div>
}

const extraProps = (store: StateApi) => ({
  timestamp: store.getState().timestamp,
})

export default storeProvider(extraProps)(Timestamp)
