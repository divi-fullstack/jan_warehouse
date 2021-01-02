import React from 'react';
import {Router as BrowserRouter, Switch, Route} from "react-router"
import Home from "./templates/home"
import Dashboard from "./templates/dashboard"
import {history} from "./utils/history"

const App:React.FC=()=> {
  return (
    <div className="App">
     <BrowserRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/dashboard" component={Dashboard}/>
      </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
