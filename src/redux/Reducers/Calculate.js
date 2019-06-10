import * as Types from './Types';

export const calculate = (key) => {
    return {
        type: Types.SET_EXPRESSION,
        payload: key
    }
}


export const clear = () => {
    return {
        type: Types.CLEAR_EXPRESSION
    }
}

export const square = () => {
    return {
        type: Types.SQUARE
    }
}
export const squareRoot = () => {
    return {
        type: Types.SQUARE_ROOT
    }
}


export const deleteLastEntry = () => {
    return {
        type: Types.DELETE_LAST_EXPRESSION_ENTRY
    }
}


export const evaluateExpression = () => {
    return {
        type: Types.EVALUATE_EXPRESSION
    }
}