import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Functions = ({onContentClear, onDelete}) => (
    <section className="math-operations">
        <Button text="clear" clickHandler={onContentClear} />
        <Button text="remove" clickHandler={onDelete} />
    </section>
)

MathOperations.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default MathOperations
