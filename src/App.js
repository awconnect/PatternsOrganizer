import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Form, Button } from 'semantic-ui-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormDataComponent from './form-data-component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/task">Task</Link>
            </li>
            <li>
              <Link to="/"> Home </Link>
            </li>
          </ul>

          <Switch>

            <Route exact path ="/">
              <div>
                <h3> Hi. </h3>
              </div>
            </Route>
            <Route exact path ="/task">
              <FormDataComponent />
            </Route>

          </Switch>
        </div>
      </Router>
  );
  }
}


