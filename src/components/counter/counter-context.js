import React from 'react';

export const CounterContext = React.createContext();

class CounterContext extends React.Component {
  constructor(){
    super();
    this.state = {
      count: 0,
    }
  }

  const styles = {
    container: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '40%',
    },
    counter: {
      display: 'inline-block',
      fontSize: '1em',
      border: '2px solid #444',
      borderRadius: '50%',
      lineHeight: '5em',
      textAlign: 'center',
      width: '5em',
    },
    button: {
      height: '3em',
    },
  };

  render() {
    return (
      <div style={styles.container}>
        <button style={styles.button} onClick={() => this.setState(this.state.count - 1)}> -</button>
        <span style={styles.counter}>{count}</span>
        <button style={styles.button} onClick={() => this.setState(this.state.count + 1)}> +</button>
      </div>
    );
  }
}

export default CounterContext;