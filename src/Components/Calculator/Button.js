import React from 'react';
import { operators, specialOperators } from './Constants'
export default ({ onButtonClick, buttonKey }) => {
    let handleClick = (e) => { onButtonClick(e.target.textContent) }
    let classNames = [
        'btn',
        operators.includes(buttonKey) ? 'btn--orange' : '',
        specialOperators.includes(buttonKey) ? 'btn--grey' : '',
        buttonKey === '0' ? 'btn--zero' : ''
    ];


    return (
        <button
            name={buttonKey}
            className={classNames.join(' ').trim()}
            onClick={handleClick}
        >
            {buttonKey}
        </button>
    );
}