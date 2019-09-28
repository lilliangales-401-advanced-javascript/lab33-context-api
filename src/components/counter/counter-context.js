import React from 'react';

// react context that gets imported by individual child components
export const CounterContext = React.createContext();

// the content provider that wraps all children
class CounterContextProvider extends React.Component {
  constructor(){
    super();
    this.state = {
      count: 0,
      increment: this.increment,
      decrement: this.decrement,
    }
  }

  increment = () => {
    this.handleCounter(this.state.count + 1)
  }

  decrement = () => {
    this.handleCounter(this.state.count - 1)
  }

  handleCounter = (count) => {
    this.setState({count})
  }

  render() {
    // const styles = {
    //   container: {
    //     alignItems: 'center',
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'space-evenly',
    //     width: '40%',
    //   },
    //   counter: {
    //     display: 'inline-block',
    //     fontSize: '1em',
    //     border: '2px solid #444',
    //     borderRadius: '50%',
    //     lineHeight: '5em',
    //     textAlign: 'center',
    //     width: '5em',
    //   },
    //   button: {
    //     height: '3em',
    //   },
    // };
    return (
      <CounterContextProvider value={this.state}>
        {this.props.children}
      </CounterContextProvider>
    );
  }
}

export default CounterContextProvider;