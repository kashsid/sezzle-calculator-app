import React, { Component } from "react";
import { connect } from "react-redux";
import {
  calculate,
  deleteLastEntry,
  clear,
  evaluateExpression
} from "./redux/Reducers/Calculate";
import Calculator from "./Components/Calculator";
import * as fromCalculator from "./redux/Reducers";
import "./App.css";

export class App extends Component {
  componentDidMount() {
    console.log("mounted calculator!");
  }

  render() {
    return (
      <div className="calculator--container">
        <Calculator.Screen {...this.props} />
        <Calculator.Keypad {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    expression: fromCalculator.getExpression(state),
    total: fromCalculator.getTotal(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    calculate: buttonKey => {
      dispatch(calculate(buttonKey));
    },
    delete: () => {
      dispatch(deleteLastEntry());
    },
    clear: () => {
      dispatch(clear());
    },
    evaluate: () => {
      dispatch(evaluateExpression());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
