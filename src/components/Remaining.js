import React from 'react';
import PropTypes from 'prop-types'
import {revisarPresupuesto} from '../helper'

const Remaining = (props) => {
    const budget = props.budget;
    const remaining = props.remaining;
    return (
        <div className={revisarPresupuesto(budget, remaining)}>
            Remaining: $ {props.remaining}
        </div>
    );
};

Remaining.propTypes = {
    remaining: PropTypes.string.isRequired
}

export default Remaining;