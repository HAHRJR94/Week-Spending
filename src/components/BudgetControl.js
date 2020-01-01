import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Budget from './Budget'
import Remaining from './Remaining'

class BudgetControl extends Component {
    render() {
        return (
            <React.Fragment>
                <Budget budget={this.props.budget}/>
                <Remaining budget={this.props.budget} remaining={this.props.remaining}/>
            </React.Fragment>
        )
    }
}

BudgetControl.propTypes = {
    budget: PropTypes.string.isRequired,
    remaining: PropTypes.string.isRequired
}

export default BudgetControl;