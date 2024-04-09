import {Route, Switch, Redirect} from 'react-router-dom'

import Header from './components/Header/index'

import Home from './components/Home/index'

import About from './components/About/index'

import NotFound from './components/NotFound/index'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <NotFound exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </>
)

export default App
