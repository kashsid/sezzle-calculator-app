import * as types from './Types'
import calculate from '../../Components/Calculate'

// Making reference to a variable 
//types.SET_EXPRESSION instead of hard coding the action type
let initialState = {
    expression: '',
    total: 0
}
export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_EXPRESSION:
            let expression = state.expression + action.payload
            return {
                ...state,
                expression,
                total: calculate(expression)
            }
        default:
            return state
    }
}