import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match, Miss, Route, Switch } from 'react-router'
// import { RouteTransition } from 'react-router-transition'

import './css/style.css'
import App from './components/App'
import Subjects from './components/Subjects'
import Survey from './components/Survey'
import Chat from './components/Chat'

const Root = () => {
   return (
      <BrowserRouter>
         <div>
            <Match exactly pattern="/" component={App} />
            <Match pattern="/subjects" component={Subjects} />
            <Match exactly pattern="/survey/:subject" component={Survey} />
            <Match exactly pattern="/survey/:subject/:index" component={Survey} />
            <Match pattern="/chat/:subject" component={Chat} />
         </div>
      </BrowserRouter>
   )
}

render(<Root/>, document.querySelector('#main'))




// import { Router, Route, IndexRoute, browserHistory } from 'react-router'
// import { Provider } from 'react-redux'
// import store, { history } from './store'
//
// const router = (
//    <Provider store={store}>
//       <Router history={history}>
//          <Route path="/" component={App} />
//          {/* <Route path="/" component={App}>
//             <IndexRoute component={PhotoGrid}></IndexRoute>
//          </Route>
//          <Route path="/subjects" component={Subjects} />
//          <Route path="/survey/:subject" component={Survey} /> */}
//       </Router>
//    </Provider>
// )
//
// render(router, document.querySelector('#main'))
