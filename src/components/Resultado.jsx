import React,{useState,useEffect} from 'react';
import '../assets/css/resultado.css';
import Consulta from '../components/Consulta';
import PropTypes from 'prop-types';

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

            Tambien te podemos ofrecer:
            <div className="propuesta_content">
                {
                    propuestas.consulta != null
                    ?   <Consulta 
                            marca={datos.marca}
                            año={datos.año}
                            plan={ datos.plan == 'terceros' ? ' Todo Riesgo' : 'terceros'}
                            propuesta={propuestas.propuesta}
                        />

                    :<p>...</p>
                }
            </div>
        </div>
        
    )
}

Consulta.propTypes={
    marca:PropTypes.string,
    año:PropTypes.string,
    plan:PropTypes.string,
    propuesta:PropTypes.object
}

export default Resultado;