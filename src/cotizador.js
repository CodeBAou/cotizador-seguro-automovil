export function calculo_Año(año){

  let resultado = 2000;
  let diferencia_año = new Date().getFullYear() - año;
  resultado = resultado - ((diferencia_año*3) * resultado) / 100;
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

    return incremento;
  }