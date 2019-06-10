import React, { Component } from 'react';
import { keypadKeys } from '../../Components/Calculator/Constants';
import Calculator from '../Calculator'
export default class Keypad extends Component {
    handleClick = (key) => {
        this.props.calculate(key)
    }
    render() {

        return (
            <div className="keypad">
                {
                    keypadKeys.map((block, index) => {
                        return (
                            <div key={index} className="block">
                                {
                                    block.map(key => (
                                        <Calculator.Button
                                            key={key}
                                            onButtonClick={this.handleClick}
                                            buttonKey={key}
                                        />
                                    ))
                                }
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}