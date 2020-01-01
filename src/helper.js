export const validarPresupuesto = presupuesto => {
    let totalPresupuesto = parseInt(presupuesto, 10) || 0;

    if (totalPresupuesto > 0) {
        return totalPresupuesto;
    } else {
        return false;
    }
}

export const revisarPresupuesto = (presupuesto, restante) => {
    let clase = 'alert alert-success'

    //Comprobar el 25%
    if ((presupuesto/4) > restante) {
        clase = 'alert alert-danger'
    } else if((presupuesto / 2) > restante){
        clase = 'alert alert-warning'        
    }

    return clase;
}