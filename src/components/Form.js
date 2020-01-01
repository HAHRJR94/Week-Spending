import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Form extends Component {
    constructor(){
        super();

        this.spendRef = React.createRef(); 
        this.quantityRef = React.createRef();
    }

    handleSpend = (e) => {
        e.preventDefault(); //Avoid refresh display

        //create object with the data
        const spend = {
            spendname: this.spendRef.current.value,
            quantity: this.quantityRef.current.value
        }

        //Add it and send it by props
        this.props.addSpend(spend)

        //reset the form
        e.currentTarget.reset();
    }
    render() {
        return (
            <form onSubmit={this.handleSpend}>
                <h2>Add your spend here</h2>
                <div className="campo">
                    <label>Name spend</label>
                    <input type="text" ref={this.spendRef} className="u-full-width" placeholder="Example transport" />
                </div>
                <div className="campo">
                    <label>Quantity</label>
                    <input type="text" ref={this.quantityRef} className="u-full-width" placeholder="Example $50" />
                </div>
                <input type="submit" className="button-primary u-full-width" value="Add" />
            </form>
        )
    }
}

Form.propType = {
    addSpend: PropTypes.func.isRequired
}

export default Form;