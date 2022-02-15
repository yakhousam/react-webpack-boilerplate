import { hot } from 'react-hot-loader'
import React from 'react'

const Warning = React.lazy(() => import('./Warning'))

class App extends React.Component {
  state = {
    count: 0,
  }

  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <h2>Count: {this.state.count}</h2>
        <button
          onClick={() => this.setState((state) => ({ count: state.count + 1 }))}
        >
          +
        </button>
        <button
          onClick={() => this.setState((state) => ({ count: state.count - 1 }))}
        >
          -
        </button>
        {this.state.count > 10 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    )
  }
}

export default hot(module)(App)
