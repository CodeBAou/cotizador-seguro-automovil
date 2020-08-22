export function calculo_Año(año){

  let base = 2000;
  let diferencia_ano = new Date().getFullYear() - base;
  let resultado=(diferencia_ano * 3) / 100;
  console.log(`calculo Años: ${resultado}`);
  return resultado;
}

export function calculo_marca(marca){

    let incremento;

    switch(marca)
    {
      case 'Audi':
        incremento=1.3;
        break;

      case 'Alfa Romeo':
        incremento=1.2;
        break;

      case 'BMW':
        incremento=1.32;
        break;

      case 'Aston Martin':
        incremento=2.3;
        break;

      case 'Seat':
        incremento=1.3;
        break;

      case 'Suzuki':
        incremento=1.4;
        break;

      case 'Volvo':
        incremento=1.32;
        break;

      case 'Saab':
        incremento=1.18;
        break;

      case 'Mercedes':
        incremento=1.72;
        break;
    }

    console.log(`Calculo Marca: ${incremento}`);
    return incremento;
  }

  export function calculo_Plan(plan){

    let data=
    {
      consulta:0,
      propuesta:0
    }

    switch(plan)
    {
      case 'terceros':

        data.consulta = 10;
        data.propuesta=20;
        break;

      case 'riesgo':

        data.consulta = 20;
        data.propuesta = 10;
        break;
    }

    console.log(`Data plan: ${data.consulta}`);
    return data;
  }