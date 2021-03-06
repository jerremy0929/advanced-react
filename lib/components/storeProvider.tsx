import React from 'react'
// tslint:disable-next-line: no-implicit-dependencies
import PropTypes from 'prop-types'
// import StoreContext from 'components/StoreContext'
/*
const storeProvider = (extraProps: Function) => <P extends object>(
  Component: React.ComponentType<P>,
) => {
  const withStore: React.ComponentType<P> = (props, { store }) => (
    // @ts-ignore
    <Component {...props} {...extraProps(store, props)} store={store} />
  )

  withStore.contextTypes = {
    store: PropTypes.object,
  }

  withStore.displayName = `${Component.name}Container`

  return withStore
}
*/

const storeProvider = (extraProps: Function = () => ({})) => <P extends object>(
  Component: React.ComponentType<P>,
) => {
  class WithStore extends React.PureComponent<P> {
    static displayName = `${Component.name}Container`
    static contextTypes = {
      store: PropTypes.object,
    }
    private subscriptionId: number | null = 0

    usedState = () => {
      return extraProps(this.context.store, this.props)
    }

    state = this.usedState()

    onStoreChange = () => {
      if (typeof this.subscriptionId === 'number') {
        this.setState(this.usedState())
      }
    }

    componentDidMount() {
      this.subscriptionId = this.context.store.subscribe(this.onStoreChange)
    }

    componentWillUnmount() {
      this.context.store.unsubscribe(this.subscriptionId)
      this.subscriptionId = null
    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.usedState()}
          store={this.context.store}
        />
      )
    }
  }
  return WithStore
}

/* 
const storeProvider = (extraProps: Function) => <P extends object>(
  Component: React.ComponentType<P>,
) => {
  return class extends React.PureComponent<P> {
    render() {
      return (
        <StoreContext.Consumer>
          {store => (
            <Component
              {...this.props}
              {...extraProps(store, this.props)}
              store={store}
            />
          )}
        </StoreContext.Consumer>
      )
    }
  }
}
 */
export default storeProvider
