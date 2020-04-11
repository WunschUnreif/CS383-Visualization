import React from 'react';
// import logo from './logo.svg';
import './App.css';

import './components/Container'
import Container from './components/Container';
import Panel from './components/Panel'
import CodePanel from './components/CodePanel'
import ExePanel from './components/ExecutionPanel'
import { Env } from './interpreter/interpJS/exec/Env';

var Interface = require('./interpreter/interpJS/interface/interface').InterpreterInterface


export class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time : new Date()
    }
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.setState({time : new Date()}),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    console.log("timer stop")
  }

  render(props) {
    return (
      <Panel width="300px">
        <h3>{this.state.time.toLocaleString()}</h3>
      </Panel>
    )
  }
}

class App extends React.Component {

  render() {
    return (
      <Container>
        <CodePanel handler={_ => this} ref={(ref) => this.codepan = ref}></CodePanel>
        <ExePanel getCode={() => this.codepan.getCode()}></ExePanel>
      </Container>
    );
  }
}

export default App;

