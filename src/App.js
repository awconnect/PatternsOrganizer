import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Form, Button } from 'semantic-ui-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormDataComponent from './form-data-component';
import TaskManager from "./TaskManager"
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
                <TaskManager />
              </div>
            </Route>

            <Route exact path ="/task">
              <FormDataComponent />
            </Route>

            <Route exact path ="/taskmanager">
              <TaskManager />
            </Route>

          </Switch>
        </div>
      </Router>
  );
  }
}


