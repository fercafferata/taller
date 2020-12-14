import React from 'react';

const Ofertas = () => {
    return (
        <div className="row">
            <h6>Ofertas</h6>
            <hr/>
            <div class="carousel">
                <a class="carousel-item" href="#one!"><img src=""></img></a>
                <a class="carousel-item" href="#two!"><img src=""></img></a>
                <a class="carousel-item" href="#three!"><img src=""></img></a>
                <a class="carousel-item" href="#four!"><img src=""></img></a>
                <a class="carousel-item" href="#five!"><img src=""></img></a>
            </div>
            <div className= "col s12 m6 l3">
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
 
export default Ofertas;