import React from 'react';
import '../assets/css/consulta.css';

const Consulta = ({marca,año,plan,propuesta}) => {
   return (
       <div className="content">
           <ul>
               <li> <strong>Marca:</strong> {marca}</li>
               <li> <strong>Año:</strong> {año}</li>
               <li> <strong>Plan:</strong> {plan}</li>
           </ul>
           <span className="precio">{propuesta}€</span>
       </div>
   )
}

export default Consulta;