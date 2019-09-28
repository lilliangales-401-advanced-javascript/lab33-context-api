import React from 'react';

import { CounterContext } from "../counter/counter-context";

class Increment extends React.Component {

  static.contextType = CounterContext;
}