import logo from './logo.svg';
import './App.scss';
import Blog from "./Blog";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink> 
              <NavLink to={"/blog"}>Blog</NavLink> 
            </li>
          </ul>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
