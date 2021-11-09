import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./pages/Create";
import Home from "./components/Home";
import NewFeedback from "./components/NewFeedback";

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
