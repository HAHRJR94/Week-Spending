import React from 'react';
import PropTypes from 'prop-types'

const Budget = (props) => {
    return (
        <div className="alert alert-primary">
            Budget: $ {props.budget}
        </div>
    );
};

Budget.propTypes = {
    budget: PropTypes.string.isRequired
}

export default Budget;