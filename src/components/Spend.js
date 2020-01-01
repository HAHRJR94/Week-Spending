import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Spend extends Component {
    render() {
        const {spendname, quantity} = this.props.gasto; 
        
        return (
            <li className="gastos">
                <p>
                    {spendname}
                    <span className="gasto">$ {quantity}</span>
                </p>
            </li>
            
        )
    }
}

Spend.propTypes = {
    gasto: PropTypes.object.isRequired
}
