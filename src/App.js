
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./pages/Create";
import Home from "./components/Home";
import NewFeedback from "./components/NewFeedback";
import Feedback_list from "./components/Feedback_list";
import Feedback from "./components/Feedback";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/create" component = {NewFeedback}/>
      </Switch>
    </Router>

    
  );
}

export default App;
