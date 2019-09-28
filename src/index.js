import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import { CounterContext } from "./components/counter/counter-context";

// class Count extends React.Component {
//
//   static contextType = CounterContext;
//
//   render(){
//     return(
//       <div>
//         {this.contextType.count}
//       </div>
//     )
//   }
// }

class Main extends React.Component {
  render() {
    return <App />;
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
