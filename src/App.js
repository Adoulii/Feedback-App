
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NewFeedback from "./components/NewFeedback";
import View_feed from "./components/View_feed";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/create" component = {NewFeedback}/>
        <Route path="/feedview/:id" component={View_feed}/>
      </Switch>
    </Router>

    
  );
}

export default App;
