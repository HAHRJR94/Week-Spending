import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Spend from './Spend'

export default class List extends Component {
    render() {
        return (
            <div className="gastos-realizados">
                <h2>List</h2>

                {/* Object.keys() iteramos en un objeto y con map accedemos al objeto */}
                {Object.keys(this.props.gastos).map(key => (
                    <Spend key={key} gasto={this.props.gastos[key]} />
                ))}
            </div>
        )
    }
}

List.propTypes = {
    gastos: PropTypes.object.isRequired
}
