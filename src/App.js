import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import { Form, Button } from 'semantic-ui-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormDataComponent from './form-data-component';



// class App extends React.Component {
//   render(){
//     return (
//       <div>
//         <Welcome name="Sara" />
//         <Welcome name="Cahal" />
//         <Welcome name="Edite" />
//       </div>
//     );
//   }

// }

// export default App;
///Users/abhiwadekar/node_modules/semantic-ui-react

class App extends React.Component {
  render() {
    return (
      <div className="App">
      	<h3> Tasks </h3>
      	<h2> Task 4 </h2>
         	<FormDataComponent />
      </div>
    );
  }
}

export default App;