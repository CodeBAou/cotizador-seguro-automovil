import React,{useState,useEffect} from 'react';
import '../assets/css/resultado.css';
import Consulta from '../components/Consulta';

const Resultado= ({propuestas,datos}) => {

    return(

        <div className="resultado_Content">

            Informe consulta:
            <div className="consulta_content">
                {
                    propuestas.consulta != null
                    ?   <Consulta 
                            marca={datos.marca}
                            año={datos.año}
                            plan={datos.plan}
                            propuesta={propuestas.consulta}
                        />

                    :  <p>...</p>
                }
               
            </div>

            Otra propuesta:
            <div className="propuesta_content">
                {
                        propuestas.consulta != null
                        ?   <Consulta 
                                marca={datos.marca}
                                año={datos.año}
                                plan={ datos.plan == 'terceros' ? 'riesgo' : 'terceros'}
                                propuesta={propuestas.propuesta}
                            />

                        :<p>...</p>
                }
            </div>
        </div>
        
    )
}

export default Resultado;