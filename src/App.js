import React, { Component } from 'react';
import Header from './components/Header'
import Form from './components/Form'
import List from './components/List'
import {validarPresupuesto} from './helper'
import BudgetControl from './components/BudgetControl'
import './css/App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      presupuesto: '',
      restante: '',
      gasto: {}
    }

    this.restarPresupuesto = this.restarPresupuesto.bind(this)
  }

  componentDidMount(){
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto = () => {
    let presupuesto = prompt('Cuál es tu presupuesto?');

    let resultado = validarPresupuesto(presupuesto)

    if (resultado) {      
      this.setState({
        presupuesto: presupuesto, 
        restante: presupuesto
      })

    } else {
      //Nos aseguramos que haya un valor, sino la función se va a seguir llamando
      this.obtenerPresupuesto() 
    }
  }

  //Add a new spend to the state
  addSpend = gasto => {
    //Take a copy from actual state
    const gastos = {...this.state.gasto};

    //Add the spend to object of state
    gastos[`gasto${Date.now()}`] = gasto;

    this.restarPresupuesto(gasto.quantity)
    
    //Put it to the state
    this.setState({
      gasto: gastos
    })
  }

  restarPresupuesto(cantidad){
    //Leer y convertir la cantidad
    let restar = Number(cantidad)

    //Tomar una copia del state actual
    let restante = this.state.restante

    //Restar el gasto agregado 
    restante -= restar

    restante = String(restante)

    //Agregar cambio al state
    this.setState({
      restante
    })

  }

  render() {
    return (
      <div className="App container">
        <Header title='Week spending' />

        <div className="principal-content content">
          <div className="row">
            <div className="one-half column">
              <Form 
                addSpend={this.addSpend}
              />
            </div>
            <div className="one-half column">
              <List 
                gastos={this.state.gasto}
              />
              <BudgetControl 
                budget={this.state.presupuesto}
                remaining={this.state.restante}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
