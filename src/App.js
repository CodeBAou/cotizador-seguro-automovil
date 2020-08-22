import React,{useState} from 'react';
import Resultado from './components/Resultado';
import './assets/css/App.css';
import {calculo_Año, calculo_marca, calculo_Plan} from './cotizador';

function App() {

  const [prima,setPrimaData] = useState(
    {
      gastos_administrativos_anuales:
        {
          gestión_interna_anual:52,
          gestión_externa_anual:36
        },
      total_tributos_complementarios:21 
    }
  );

  const [datos,setDatos] = useState(
    {
      marca:'',
      año:'',
      plan:''
    }
  );

  const {marca,año,plan}=datos;

  const [propuestas,setPropuestas] = useState(
    {
      plan:plan,
      consulta:null,
      propuesta:null,
    }
  );

  const Set_Informacion = e => {

    document.getElementsByName([e.target.name])[0].style.background="rgba(159, 0, 0,0.80)";

    if(e.target.name==='plan')
    {
      document.getElementById("L_terceros").style.color="black";
      document.getElementById("L_riesgo").style.color="black";
    }
  
    setDatos(
      {
        ...datos,
        [e.target.name]: e.target.value
      }
    );

  }

  const EnvioFormulario= e => {

    e.preventDefault();

    if(marca == '' || año == '' || plan == '')

    {
      if(marca == '')

      {
        document.getElementsByName('marca')[0].style.background="red";
      }

      else if(año == '')

      {
        document.getElementsByName('año')[0].style.background="red";
      }

      else if (plan == '')

      {
        document.getElementById("L_terceros").style.color="red";
        document.getElementById("L_riesgo").style.color="red";
      }
    }

    else
    {
      cotizar();
    }

  }

  const cotizar = () => {
    
    let result_consulta=0;
    let result_propuesta=0;
    let cotizacion = calculo_marca(marca) * calculo_Año(año);
    let total_prima = ((prima.gastos_administrativos_anuales.gestión_externa_anual + prima.gastos_administrativos_anuales.gestión_interna_anual) * prima.total_tributos_complementarios)/100 ;
    
    result_consulta = (cotizacion * calculo_Plan(plan).consulta);
    result_propuesta = (cotizacion * calculo_Plan(plan).propuesta);
    result_consulta = total_prima * result_consulta;
    result_propuesta = total_prima * result_propuesta;
    
    setPropuestas(
      {
        plan:plan,
        consulta:result_consulta.toFixed(2),
        propuesta:result_propuesta.toFixed(2)
      }
    )
    

  }

  
  return (
    <div className="App">

      <div className="content_App">

        <header>
          <h1 className="Titulo_Page">Seguro</h1> <h1 className="Titulo_Page cero-rotate">0</h1>
        </header>
        
        <div className="content_form">

          <h2>Calcula tu Seguro</h2>
          
          <form onSubmit={EnvioFormulario}>

            <section>

              <label><strong>Marca</strong></label>

              <select name="marca" value={marca} onChange={Set_Informacion} >

                  <option>Audi</option>
                  <option>Alfa Romeo</option>
                  <option>Aston Martin</option>
                  <option>BMW</option>
                  <option>Seat</option>
                  <option>Suzuki</option>
                  <option >Volvo</option>
                  <option >Saab</option>
                  <option>Mercedes</option>

              </select >

              <br/>

            </section>

            <section>

              <label><strong>Año</strong></label>

              <select name="año" value={año} onChange={Set_Informacion}>

                  <option value="1999">1999</option>
                  <option value="2000">2000</option>
                  <option value="2001">2001</option>
                  <option value="2002">2002</option>
                  <option value="2003">2003</option>
                  <option value="2004">2004</option>
                  <option value="2005">2005</option>
                  <option value="2006">2006</option>
                  <option value="2007">2007</option>

              </select>

            </section>

            <section className="section_check">

              <label><strong>Plan</strong></label>
              <input type="checkbox" className="checking" name="plan" value='terceros' onChange={Set_Informacion} checked={plan === 'terceros'} />
              <label id="L_terceros" htmlFor="terceros">Terceros</label> 
              <input type="checkbox" className="checking" name="plan" value='riesgo' onChange={Set_Informacion} checked={plan === 'riesgo'} />
              <label id="L_riesgo" htmlFor="riesgo">Cobertura Completa</label>

            </section>

            <button type="submit">Calcular</button>

        </form>

        <Resultado
          propuestas={propuestas}
          datos={datos}
        />

      </div>
     
    </div>

  </div>
  );
}

export default App;
