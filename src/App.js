import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./pages/Create";
import Home from "./pages/Home";

function App() {
  return (
   <Router>
      <Switch>
<Route path="/" component={Home} exact/>
<Route path="/create" component={Create} exact/>
      </Switch>
  </Router>
    
  );
}

export default App;
