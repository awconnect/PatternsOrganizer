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


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h3>Pattern Manager </h3>
         <FormDataComponent />
      </div>
    );
  }
}

export default App;