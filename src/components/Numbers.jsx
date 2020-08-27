import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const renderButtons = onClickNumber => {
    var numbers = [1, 5, 10, 15];
    var doubles = numbers.map(number => {
        <Button text="number.toString()" clickHandler={onClickNumber} />
    });
}


const Numbers = ({ onClickNumber }) => (
    <section className="numbers">
        
    </section>
)

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers
