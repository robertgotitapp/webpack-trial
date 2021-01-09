import React from 'react'
import { hot } from 'react-hot-loader'

const Warning = React.lazy(() => import('./Warning'))

class App extends React.Component {
  state = {
    count: 0
  }
  
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>Count: {this.state.count} </h2>
        {this.state.count > 10 && 
          (
            <React.Suspense fallback={null}>         
              <Warning />
            </React.Suspense>
          )
        }
        <button 
          onClick={() => this.setState(state => ({count: state.count + 1}))}
        >
          +
        </button>
        <button 
          onClick={() => this.setState(state => ({count: state.count - 1}))}>
          -
        </button>
      </div>
    )
  }
}

// export hot(module)(App) is the same as 2 statements below
// const hotModuleFunc = hot(module)
// export default hotModuleFunc(App)
export default hot(module)(App)