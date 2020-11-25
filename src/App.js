import Header from "./components/Header"
import Main from "./components/Main"
import Portfolio from "./components/Portfolio"
import About from "./components/About"
import Repos from "./components/Repos"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
  <div>
  <Header />
  <Switch>

    <Route path="/" exact component={About}/>
    <Route path="/about" component={About}/>
    <Route path="/repos" component={Repos}/>
  </Switch>
  </div>
  </Router>
  )
}

export default App;