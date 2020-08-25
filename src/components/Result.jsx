import React from 'react'
import PropTypes from 'prop-types'

const Result = ({value}) => {
    return (
        <div className="result">
            <span>
                {value}
            </span>
        </div>
    )
}

Result.propTypes = {
    value: PropTypes.string 
}

Result.defaultProps = {
    value: "Error"
}

export default Result