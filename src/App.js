import React, { Component } from 'react'
import { connect } from 'react-redux'
import { calculate } from './redux/Reducers/Calculate'
import Calculator from './Components/Calculator'
import * as fromCalculator from './redux/Reducers'
import './App.css'

export class App extends Component {
  render() {
    return (
      <div className='calculator--container'>
        <Calculator.Screen {...this.props} />
        <Calculator.Keypad {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    expression: fromCalculator.getExpression(state),
    total: fromCalculator.getTotal(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    calculate: (buttonKey) => {
      dispatch(calculate(buttonKey))
    },
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

