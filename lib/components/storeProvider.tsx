import React from 'react'
// tslint:disable-next-line: no-implicit-dependencies
import PropTypes from 'prop-types'

const storeProvider = (extraProps: Function) => <P extends object>(
  Component: React.FC<P>,
) => {
  const withStore: React.FC<P> = (props, { store }) => (
    <Component {...props} {...extraProps(store, props)} store={store} />
  )

  withStore.contextTypes = {
    store: PropTypes.object,
  }

  withStore.displayName = `${Component.name}Container`

  return withStore
}

export default storeProvider
