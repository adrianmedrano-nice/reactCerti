import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import User from "./components/User";
import About from "./components/About";
import Home from "./components/Home";
import "./styles/custom.scss";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}>
          <Home />
        </Route>
        <Route path="/users">
          <User />
          <About />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
