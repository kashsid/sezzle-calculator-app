export default (expression) => {
/* Exporting a default function that uses regex (regular expressions)
to match a portion of the expressions entered */
    const matched = (new RegExp('([\\d]+\\.?[\\d]*)?([-+/*][\\d]+\\.?[\\d]*)*')).exec(expression)

    if (!matched) {
        return 0;
    }
// check if user tries to start the expression with invalid operator( other than negative)
    if (/^[*+\/]/.test(expression)) {
        return () => {
            throw new Error('Cannot start the expression with invalid operators')
        }
    }

    return new Function(`return ${matched[0]}`)()
}