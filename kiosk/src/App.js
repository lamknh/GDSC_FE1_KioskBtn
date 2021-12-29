import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import Home from "./routes/Home";
import Result from "./routes/Result";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/result/:phoneNum">
          <Result />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
