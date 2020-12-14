import React, {useState} from 'react';
import AltaPaquete from './components/AltaPaquete';
import Contacto from './components/ui/Contacto';
import Header from './components/ui/Header';
import Ofertas from './components/ui/Ofertas';
import Paquetes from './components/ui/Paquetes';

function App(){
  
  let paque = localStorage.getItem('paquetes')
  if(!paque) {
    paque = []
  }

  const [paquetes, guardarPaquete] = useState(paque)

  const crearPaquete = paquete => {
    guardarPaquete([
      ...paquetes,
      paquete
    ]);
  };
    return (
      <>
      <div className="grey darken-3">
      <Header />
      <Contacto />
      {/* <Ofertas /> */}
      {/* <Paquetes /> */}
      <div>
        {/* <AltaPaquete 
          crearPaquete={crearPaquete}
        /> */}
      </div>
      </div>
      </>
    )
}

export default App;