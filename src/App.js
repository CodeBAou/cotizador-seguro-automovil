import React from 'react';

import './assets/css/App.css';

function App() {
  return (
    <div className="App">

      <div className="content_App">

        <header>
          <h1 className="Titulo_Page">Seguro</h1> <h1 className="Titulo_Page cero-rotate">0</h1>
        </header>
        
        <div className="content_form">

          <h2>Calcula tu Seguro</h2>
          
          <form>

            <section>
              <label><strong>Marca</strong></label>
              <select name="marca">
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
              <select name="año">
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
              <input type="checkbox" name="terceros" value="terceros"/>
              <label  for="terceros">Terceros</label>
              <input type="checkbox" name="riesgo" value="riesgo"/>
              <label for="riesgo">Cobertura Completa</label>
            </section>

            <button type="submit">Calcular</button>

        </form>

        </div>

      </div>

    </div>
  );
}

export default App;
