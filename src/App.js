import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./components/Home";
import NewFeedback from "./components/NewFeedback";
import View_feed from "./components/View_feed";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Switch location={location} key={location.key}>
        <Route path="/" component={Home} exact />
        <Route path="/create" component={NewFeedback} />
        <Route path="/feedview/:id" component={View_feed} />
      </Switch>
    </AnimatePresence>
  );
}

export default App;
