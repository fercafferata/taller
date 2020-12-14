import React from 'react';

const Paquetes = () => {
    return (
        <div className="row">
            <div className= "col s12 m6 l3">
                <label>Filtrar por:</label>
                    <select class="browser-default">
                        <option value="" disabled selected>Seleccione una opcion</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                <div className="card  grey lighten-1">
                    <div className="card-image">
                        <img src=""/>
                    </div>
                    <div className="card-content">
                        <h6><b>Precio</b></h6>
                        <h6>Nombre</h6>
                        <h6>Destino</h6>
                        <h6>Duracion</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Paquetes;