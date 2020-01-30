import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from './Components/layout/Header';
import Contacts from './Components/contacts/Contacts';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContact from './Components/contacts/AddContact';
import NotFound from './Components/NotFound';


function App() {
  return (
    <Router>
      <div className="App">
        <Header heading="Contact Manager" />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/contact/add" component={AddContact} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;


{/* <App />
<Router>
  //it'll pass router props to child compoent -> these router props we can manipulate the history
  // Actual Browser history -> Router history

<child-compoents/>
</Router> */}