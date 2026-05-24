const datosTexto = `
EQUIPAMENTO FIJO	 $ 82.383 
ACOMETIDA CTS ESTRATO 1 Y 2 FIJO	 $ 117.866 
ACOMETIDA CTS ESTRATO 1 Y 2 VARIABLE	 $ 27.762 
ACOMETIDA CTS ESTRATO 3 Y 4 FIJO	 $ 117.866 
ACOMETIDA CTS ESTRATO 3Y 4 VARIABLE	 $ 27.762 
ACOMETIDA CTS ESTRATO 5 Y 6 FIJO	 $ 146.408 
ACOMETIDA CTS ESTRATO 5 Y 6 VARIABLE	 $ 58.548 
ACOMETIDA IPS ESTRATO 1 Y 2 FIJO	 $ 186.994 
ACOMETIDA IPS ESTRATO 1 Y 2 VARIABLE	 $ 42.161 
ACOMETIDA IPS ESTRATO 3 Y 4 FIJO	 $ 158.406 
ACOMETIDA IPS ESTRATO 3Y 4 VARIABLE	 $ 54.877 
ACOMETIDA IPS ESTRATO 5 Y 6 FIJO	 $ 165.198 
ACOMETIDA IPS ESTRATO 5 Y 6 VARIABLE	 $ 59.346 
ACOMETIDA COMERCIAL IPS FIJO	 $ 173.347 
ACOMETIDA COMERCIAL IPS VARIABLE	 $ 53.401 
ACOMETIDA IPS EN ASFALTO VIA FIJO	 $ 269.862 
ACOMETIDA IPS EN ASFALTO VIA VARIABLE	 $ 105.381 
ACOMETIDA CONSTRUCTORA ESTRATO 1 Y 2 FIJO	 $ 146.287 
ACOMETIDA CONSTRUCTORA ESTRATO 1 Y 2VARIABLE	 $ 19.532 
ACOMETIDA CONSTRUCTORA ESTRATO 3 Y 4 FIJO	 $ 186.483 
ACOMETIDA CONSTRUCTORA ESTRATO 3 Y 4 VARIABLE	 $ 20.468 
ACOMETIDA CONSTRUCTORA ESTRATO 5 Y 6 FIJO	 $ 145.058 
ACOMETIDA CONSTRUCTORA ESTRATO 5 Y 6 VARIABLE	 $ 18.689 
ROTURA Y REPOSICION DE ANDENES EN CONCRETO 3000 PSI 1 M2	 $ 150.653 
TIPO-INTERNA VISTA MULTICAPA 1/2" FIJO	 $ 311.460 
TIPO-INTERNA VISTA MULTICAPA 1/2" VARIABLE	 $ 5.185 
TIPO-INTERNA VISTA MULTICAPA 3/4" FIJO	 $ 374.012 
TIPO-INTERNA VISTA MULTICAPA 3/4" VARIABLE 	 $ 6.299 
TIPO-INTERNA VISTA COBRE RIGIDO 1/2" FIJO	 $ 393.343 
TIPO-INTERNA VISTA COBRE RIGIDO 1/2" VARIABLE	 $ 33.926 
TIPO-INTERNA VISTA COBRE FLEXIBLE 1/2" FIJO	 $ 270.929 
TIPO-INTERNA VISTA COBRE FLEXIBLE 1/2" VARIABLE	 $ 14.744 
TIPO-INTERNA VISTA ACERO 1/2" FIJO	 $ 216.004 
TIPO-INTERNA VISTA ACERO 1/2" VARIABLE	 $ 27.579 
TIPO-INTERNA OCULTA MULTICAPA 1/2" FIJO	 $ 532.430 
TIPO-INTERNA OCULTA MULTICAPA 1/2" VARIABLE	 $ 11.190 
TIPO-INTERNA OCULTA MULTICAPA 3/4" FIJO	 $ 648.168 
TIPO-INTERNA OCULTA MULTICAPA 3/4" VARIABLE	 $ 24.618 
TIPO-INTERNA OCULTA CU R 1/2" FIJO	 $ 576.295 
TIPO-INTERNA OCULTA CU R 1/2" VARIABLE	 $ 54.330 
TIPO-INTERNA OCULTA ACERO 1/2" VARIABLE	 $ 38.397 
TIPO-INTERNA OCULTA ACERO 1/2" FIJO	 $ 512.476 
COT-INTERNA MULTICAPA 1/2" METRO	 $ 24.290 
COT-INTERNA MULTICAPA 3/4" METRO	 $ 45.260 
COT-INTERNA AG 1/2" METRO	 $ 41.428 
COT-INTERNA AG 3/4" METRO	 $ 44.663 
COT-INTERNA AG 1" METRO	 $ 63.713 
COT-INTERNA AG 1 1/2" METRO	 $ 90.110 
COT-INTERNA AG 2" METRO	 $ 111.576 
COT-RANURA Y RESANE PARA EMPOTRAR TUBERÍA	 $ 23.935 
COT-INTERNA PE  3/4" CON EXCAVACIÓN ZONA BLANDA	 $ 35.804 
COT-INTERNA PE  3/4" CON EXCAVACIÓN ZONA DURA	 $ 71.215 
COT-INTERNA PE  2" CON EXCAVACIÓN ZONA BLANDA	 $ 43.459 
COT-INTERNA PE  2" CON EXCAVACIÓN ZONA DURA	 $ 53.268 
COT-INSTALACION DE TUBERA  P.E. 1/2" (SIN EXC)	 $ 5.822 
COT-INSTALACION DE TUBERA  P.E. 3/4" (SIN EXC)	 $ 5.813 
COT-INSTALACION DE TUBERA  P.E. 2" (SIN EXC)	 $ 20.597 
ALTURA-INTERNA MULTICAPA 1/2"  >5M METRO	 $ 35.819 
ALTURA-INTERNA MULTICAPA 1"  >5M METRO	 $ 57.442 
ALTURA-INTERNA AG 1/2"  >5M METRO	 $ 56.053 
ALTURA-INTERNA AG  3/4"  >5M METRO	 $ 65.031 
ALTURA-INTERNA AG 1"  >5M METRO	 $ 78.509 
ALTURA-INTERNA AG 1 1/2"  >5M METRO	 $ 126.428 
ALTURA-INTERNA AG  2"  >5M METRO	 $ 147.520 
ALTURA-INTERNA CU R 1/2" + 3 P METRO	 $ 65.336 
ALTURA-INTERNA CU R 3/4" + 3 P METRO	 $ 94.450 
ALTURA-INTERNA AG 1/2" + 3 P METRO	 $ 51.067 
ALTURA-INTERNA AG 3/4" + 3 P METRO	 $ 57.209 
ALTURA-INTERNA MULTICAPA 1/2" + 3 P METRO	 $ 30.506 
ALTURA-INTERNA MULTICAPA 3/4" + 3 P METRO	 $ 36.710 
ALTURA-INTERNA MULTICAPA 3/4"  >5M METRO	 $ 41.564 
COT-INTERNA MULTICAPA 1" METRO	 $ 54.189 
CENTRO DE MEDICION G 1.6	 $ 435.473 
CENTRO DE MEDICION EN MULTIFAMILIAR	 $ 227.207 
CENTRO MEDICION 2,5 M3 IPS	 $ 469.429 
CENTRO DE MEDICION SIN MEDIDOR	 $ 248.312 
CENTRO MEDICION 6M3 G4 RUE	 $ 689.845 
CENTRO MEDICION 6M3 G4 RPE 40	 $ 892.402 
CENTRO MEDICION 9M3	 $ 1.967.102 
CENTRO MEDICION 16M3	 $ 2.028.276 
CENTRO MEDICION AL-425 0.25PSI	 $ 3.561.651 
CENTRO MEDICION AL-425 5PSI	 $ 2.808.208 
CENTRO MEDICION AL-425 CON REG PILOT	 $ 4.558.907 
CENTRO MEDICION AC 630 RP40	 $ 4.984.432 
CENTRO MEDICION AC-630 CON REG PILOT	 $ 6.542.652 
ADI-VALVULA AG 1/2"	 $ 31.146 
ADI-VALVULA AG 3/4"	 $ 37.828 
ADI-VALVULA AG 1"	 $ 51.571 
ADI-VALVULA AG 1 1/2"	 $ 71.141 
ADI-VALVULA AG 2"	 $ 94.013 
ADI-VALVULA MULTICAPA 1/2"	 $ 33.056 
ADI-VALVULA MULTICAPA 3/4"	 $ 57.837 
ADI-VALVULA MULTICAPA 1"	 $ 94.512 
ADI-UNIVERSAL AG 1/2"	 $ 39.859 
ADI-UNIVERSAL AG 3/4"	 $ 58.122 
ADI-ELEVADOR PE 1/2"	 $ 64.312 
ADI-ELEVADOR PE 3/4"	 $ 69.454 
ADI-TRANSITOMA PE 2"	 $ 844.685 
ADI-BRIDA ROSCADA 2"	 $ 113.159 
ADI-NICHO PARA REGULADOR PILOTADO	 $ 155.953 
ADI-CONEXIÓN GASODOMESTICO 1/2"	 $ 29.145 
ADI-CONEXIÓN GASODOMESTICO 3/4"	 $ 40.091 
ADI-CONEXIÓN GASODOMESTICO CONECTOR FLEXOMETALICO	 $ 56.601 
ADI-JUNTAS FLEXIBLES (DILATACION) 1" 	 $ 400.412 
ADI-JUNTAS FLEXIBLES (DILATACION) 1 1/2" 	 $ 531.360 
ADI-PLACAS DE SEÑALIZACION	 $ 55.433 
ADI-POSTES DE SEÑALIZACION	 $ 657.567 
ADI-INSTALACION TUBERIA PARA VENTEO 1/2"	 $ 17.461 
ADI-INSTALACION TUBERIA PARA VENTEO 3/4"	 $ 19.552 
ADI-INSTALACION REGULADOR R6	 $ 209.982 
ADI-INSTALACION REGULADOR R7	 $ 148.187 
ADI-INSTALACION REGULADOR AJUSTABLE 0,25 - 3 PSI	 $ 179.016 
ADI-INSTALACION REGULADOR RSE20 / RP40	 $ 289.311 
ADI-INSTALACION REGULADOR R496	 $ 974.887 
ADI-INSTALACION REGULADOR RCABP 10M (TAPA NEGRA)	 $ 231.731 
ADI-INSTALACION REGULADOR RCABP 6M (TAPA VERDE)	 $ 288.703 
ADI-INSTALACION REGULADOR PILOTADO CON V ALIVIO	 $ 1.438.129 
ADI-PINTURA TUBERIA X ML	 $ 8.884 
ADI-LEVANTAMIENTO Y ENTREGA DE PLANO ASBUILD FISICO Y DIGITAL	 $ 188.144 
ADI-INSTALACION MANOMETRO Y VALVULA	 $ 763.827 
ADI-OBRA CIVIL RANURA Y REJILLA DE VENTILACION	 $ 66.297 
ADI-CONSTRUCCION PUNTO DE ANCLAJE CERTIFICADO	 $ 815.190 
CENTRO DE MEDICION G 1.6 BUENAVENTURA	 $ 418.228 
ADI-NICHO REGULADOR O ELEVADOR	 $ 71.243 
ADI-CONEXION HIDRAULICA	 $ 294.920 
CAMBIO DE NICHO A DOBLE	 $ 159.267 
CAMBIO DE NICHO A TRIPLE	 $ 249.391 
CAMBIO DE NICHO A CUADRUPLE	 $ 539.758 
INTERNA CONSTRUCTORA 1216-1/2” MULTICAPA METRO	 $ 21.400 
INTERNA CONSTRUCTORA 1620-3/4” MULTICAPA METRO	 $ 27.704 
INTERNA CONSTRUCTORA 2025-1” MULTICAPA METRO	 $ 33.764 
INTERNA CONSTRUCTORA 1/2” AG METRO	 $ 37.478 
INTERNA CONSTRUCTORA 3/4” AG METRO	 $ 45.577 
INTERNA CONSTRUCTORA 1” AG METRO	 $ 63.351 
INTERNA CONSTRUCTORA 1 1/2” AG METRO	 $ 92.594 
INTERNA CONSTRUCTORA 2” AG METRO	 $ 117.045 
ADI-CONTAINER 20 PIES	 $ 123.176 
INSTALACION TUBO PARA ENCAMIZAR TUBERIA	 $ 18.723 
ADI-SOPORTE "PIE DE AMIGO"	 $ 32.562 
ADI-SOPORTE COLGANTE	 $ 35.502 
TIPO  INTERNA A LA VISTA MIXTA FIJA	 $ 877.963 
TIPO  INTERNA A LA VISTA MIXTA VARIABLE	 $ 38.143 
CM CON MED X 3ROS	 $ 343.711 
CENTRO DE MEDICION PREPAGO	 $ 998.952 
CENTRO DE MEDICION G4 DIGITAL ATIF RP	 $ 1.977.118 
CENTRO DE MEDICION G4 DIGITAL ATIF RUE	 $ 1.822.226 
CENTRO DE MEDICION AL800	 $ 8.363.780 
CENTRO DE MEDICION AL1000	 $ 9.246.382 
CENTRO DE MEDICION SIN MED AL1000	 $ 2.807.773 
`;

let items = [];
let calculos = [];
let seleccionado = null;

const buscador = document.getElementById("buscador");
const descripcion = document.getElementById("descripcion");
const cantidad = document.getElementById("cantidad");
const precio = document.getElementById("precio");
const tabla = document.getElementById("tabla");
const total = document.getElementById("total");

function formato(valor) {
  return "$ " + valor.toLocaleString("es-CO");
}

function limpiarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function cargarItems() {
  items = datosTexto
    .trim()
    .split("\n")
    .map(linea => {
      const partes = linea.split(/\t+/);

      return {
        descripcion: partes[0].trim(),
        precio: Number(partes[1].replace(/\D/g, ""))
      };
    });

  pintarSelect(items);
}

function pintarSelect(lista) {
  descripcion.innerHTML = `<option value="">Seleccione un ítem</option>`;

  lista.forEach(item => {
    const option = document.createElement("option");
    option.value = item.descripcion;
    option.textContent = item.descripcion;
    descripcion.appendChild(option);
  });
}

buscador.addEventListener("input", () => {
  const texto = limpiarTexto(buscador.value);

  const filtrados = items.filter(item =>
    limpiarTexto(item.descripcion).includes(texto)
  );

  pintarSelect(filtrados);
  descripcion.value = "";
  precio.value = "";
});

descripcion.addEventListener("change", () => {
  const item = items.find(i => i.descripcion === descripcion.value);
  precio.value = item ? formato(item.precio) : "";
});

function agregar() {
  if (descripcion.value === "" || cantidad.value <= 0) {
    alert("Seleccione una descripción y digite una cantidad válida");
    return;
  }

  const item = items.find(i => i.descripcion === descripcion.value);

  if (!item) {
    alert("El ítem seleccionado no existe");
    return;
  }

  calculos.push({
    descripcion: item.descripcion,
    precio: item.precio,
    cantidad: Number(cantidad.value),
    subtotal: item.precio * Number(cantidad.value)
  });

  mostrarTabla();
  limpiarCampos();
}

function mostrarTabla() {
  tabla.innerHTML = "";
  let sumaTotal = 0;

  calculos.forEach((item, index) => {
    sumaTotal += item.subtotal;

    tabla.innerHTML += `
      <tr onclick="seleccionar(${index})" class="${seleccionado === index ? "seleccionado" : ""}">
        <td>${item.descripcion}</td>
        <td>${formato(item.precio)}</td>
        <td>${item.cantidad}</td>
        <td>${formato(item.subtotal)}</td>
        <td>
          <button onclick="eliminar(event, ${index})">Eliminar</button>
        </td>
      </tr>
    `;
  });

  total.textContent = formato(sumaTotal);
}

function seleccionar(index) {
  seleccionado = index;

  const item = calculos[index];

  buscador.value = item.descripcion;
  pintarSelect([item]);

  descripcion.value = item.descripcion;
  cantidad.value = item.cantidad;
  precio.value = formato(item.precio);

  mostrarTabla();
}

function corregir() {
  if (seleccionado === null) {
    alert("Seleccione una fila para corregir");
    return;
  }

  if (descripcion.value === "" || cantidad.value <= 0) {
    alert("Seleccione una descripción y digite una cantidad válida");
    return;
  }

  const item = items.find(i => i.descripcion === descripcion.value);

  if (!item) {
    alert("El ítem seleccionado no existe");
    return;
  }

  calculos[seleccionado] = {
    descripcion: item.descripcion,
    precio: item.precio,
    cantidad: Number(cantidad.value),
    subtotal: item.precio * Number(cantidad.value)
  };

  seleccionado = null;
  mostrarTabla();
  limpiarCampos();
}

function eliminar(event, index) {
  event.stopPropagation();

  calculos.splice(index, 1);
  seleccionado = null;

  mostrarTabla();
}

function limpiarCampos() {
  buscador.value = "";
  descripcion.value = "";
  cantidad.value = "";
  precio.value = "";
  pintarSelect(items);
}

function nuevoCalculo() {
  if (confirm("¿Desea borrar todo el cálculo?")) {
    calculos = [];
    seleccionado = null;

    mostrarTabla();
    limpiarCampos();
  }
}

cargarItems();