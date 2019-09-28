import React from 'react';

import Count from './components/counter/counter';
// import Increment from './components/increment/increment';
// import Decrement from './components/decrement/decrement'

import CounterContext from "./components/counter/counter-context";

export default class App extends React.Component {
  render() {
    return (
        <CounterContext>
          <Count />
        </CounterContext>
    );
  }
}
