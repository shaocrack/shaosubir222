document.addEventListener('DOMContentLoaded', function() {
    const inicioActividadesInput = document.getElementById('inicio-actividades');
    const tipoActividadesInput = document.getElementById('tipo-actividades');
    //para ingresos
    const ventasInput = document.getElementById('ventas');
    const ingresosFinancierosInput = document.getElementById('ingresos-financieros');
    const ventaActivosInput = document.getElementById('venta-activos');
    const ingresosAlquilerInput = document.getElementById('ingresos-alquiler');
    const totalIngresosElement = document.getElementById('total-ingresos');
    //
    const efectivoInput = document.getElementById('efectivo');
    const cuentasCobrarInput = document.getElementById('cuentas-cobrar');
    const inventariosInput = document.getElementById('inventarios');
    const totalActivosCorrientesElement = document.getElementById('total-activos-corrientes');
    const terrenosInput = document.getElementById('terrenos');
    const edificiosInput = document.getElementById('edificios');
    const maquinariasInput = document.getElementById('maquinarias');
    const mueblesInput = document.getElementById('muebles');
    const equiposInput = document.getElementById('equipos');
    const vehiculosInput = document.getElementById('vehiculos');
    const totalActivosNoCorrientesElement = document.getElementById('total-activos-no-corrientes');
    const totalActivosElement = document.getElementById('total-activos');
    const materiaPrimaInput = document.getElementById('materia-prima');
    const manoObraInput = document.getElementById('mano-obra');
    const gastosAdministrativosInput = document.getElementById('gastos-administrativos');
    const gastosVentaInput = document.getElementById('gastos-venta');
    const gastosFinancierosInput = document.getElementById('gastos-financieros');
    const totalEgresosElement = document.getElementById('total-egresos');
    const cuentasPagarInput = document.getElementById('cuentas-pagar');
    const cacpecoInput = document.getElementById('cacpeco');
    const pichinchaInput = document.getElementById('pichincha');
    const totalPasivosCorrientesElement = document.getElementById('total-pasivos-corrientes');
    const ventas2021Input = document.getElementById('ventas-1');
    const ventas2022Input = document.getElementById('ventas-2');
    const ventas2023Input = document.getElementById('ventas-3');
    const ventas2024Input = document.getElementById('ventas-4');
    const crecimiento2021Element = document.getElementById('crecimiento-1');
    const crecimiento2022Element = document.getElementById('crecimiento-2');
    const crecimiento2023Element = document.getElementById('crecimiento-3');
    const crecimiento2024Element = document.getElementById('crecimiento-4');
    const incobrables2021Input = document.getElementById('incobrables-2021');
    const incobrables2022Input = document.getElementById('incobrables-2022');
    const incobrables2023Input = document.getElementById('incobrables-2023');
    const incobrables2024Input = document.getElementById('incobrables-2024');
    const porcentajeIncobrables2021Element = document.getElementById('porcentaje-incobrables-2021');
    const porcentajeIncobrables2022Element = document.getElementById('porcentaje-incobrables-2022');
    const porcentajeIncobrables2023Element = document.getElementById('porcentaje-incobrables-2023');
    const porcentajeIncobrables2024Element = document.getElementById('porcentaje-incobrables-2024');
    const activosCorrientes1Input = document.getElementById('activos-corrientes-1');
    const activosCorrientes2Input = document.getElementById('activos-corrientes-2');
    const activosCorrientes3Input = document.getElementById('activos-corrientes-3');
    const pasivosCorrientes1Input = document.getElementById('pasivos-corrientes-1');
    const pasivosCorrientes2Input = document.getElementById('pasivos-corrientes-2');
    const pasivosCorrientes3Input = document.getElementById('pasivos-corrientes-3');
    const capitalTrabajoElement = document.getElementById('capital-trabajo');
    const liquidezCorrienteElement = document.getElementById('liquidez-corriente');
    const pruebaAcidaElement = document.getElementById('prueba-acida');
    const pasivoTotalElement = document.getElementById('pasivo-total');
    const activoTotalElement = document.getElementById('activo-total');
    const endeudamientoActivoElement = document.getElementById('endeudamiento-activo');
    const ratioEndeudamientoElements = document.querySelectorAll('.ratio-endeudamiento');
    const ventasRotacionInput = document.getElementById('ventas-rotacion');
    const cuentasPorCobrarInput = document.getElementById('cuentas-por-cobrar');
    const valorRotacionCarteraElement = document.getElementById('valor-rotacion-cartera');
    const cuentasPorCobrarCobranzaInput = document.getElementById('cuentas-por-cobrar-cobranza');
    const ventasCobranzaInput = document.getElementById('ventas-cobranza');
    const valorPeriodoCobranzaElement = document.getElementById('valor-periodo-cobranza');
    const comprasInput = document.getElementById('compras');
    const cuentasPorPagarInput = document.getElementById('cuentas-por-pagar');
    const valorRotacionCuentasPagarElement = document.getElementById('valor-rotacion-cuentas-pagar');
    const cuentasPorPagarPagoInput = document.getElementById('cuentas-por-pagar-pago');
    const comprasPagoInput = document.getElementById('compras-pago');
    const valorPeriodoPagoElement = document.getElementById('valor-periodo-pago');
    const ventasActivoFijoInput = document.getElementById('ventas-activo-fijo');
    const activoFijoInput = document.getElementById('activo-fijo');
    const valorRotacionActivoFijoElement = document.getElementById('valor-rotacion-activo-fijo');
    const ventasRotacionVentasInput = document.getElementById('ventas-rotacion-ventas');
    const activoTotalRotacionVentasInput = document.getElementById('activo-total-rotacion-ventas');
    const valorRotacionVentasElement = document.getElementById('valor-rotacion-ventas');
    const guardarButton = document.getElementById('guardar');

    let inicioActividades = '';
    let tipoActividades = '';
    let ventas = 0;
    let ingresosFinancieros = 0;
    let ventaActivos = 0;
    let ingresosAlquiler = 0;
    let totalIngresos = 0;
    let efectivo = 0;
    let cuentasCobrar = 0;
    let inventarios = 0;
    let totalActivosCorrientes = 0;
    let terrenos = 0;
    let edificios = 0;
    let maquinarias = 0;
    let muebles = 0;
    let equipos = 0;
    let vehiculos = 0;
    let totalActivosNoCorrientes = 0;
    let totalActivos = 0;
    let materiaPrima = 0;
    let manoObra = 0;
    let gastosAdministrativos = 0;
    let gastosVenta = 0;
    let gastosFinancieros = 0;
    let totalEgresos = 0;
    let cuentasPagar = 0;
    let cacpeco = 0;
    let pichincha = 0;
    let totalPasivosCorrientes = 15590.04; // dato estático por ahora
    let ventas2021 = 0;
    let ventas2022 = 0;
    let ventas2023 = 0;
    let ventas2024 = 0;
    let incobrables2021 = 0;
    let incobrables2022 = 0;
    let incobrables2023 = 0;
    let incobrables2024 = 0;


    function guardarDatos() {
        const datos = {
            inicioActividades: inicioActividadesInput.value,
            tipoActividades: tipoActividadesInput.value,
            ventas: parseFloat(ventasInput.value) || 0,
            ingresosFinancieros: parseFloat(ingresosFinancierosInput.value) || 0,
            ventaActivos: parseFloat(ventaActivosInput.value) || 0,
            ingresosAlquiler: parseFloat(ingresosAlquilerInput.value) || 0,
            efectivo: parseFloat(efectivoInput.value) || 0,
            cuentasCobrar: parseFloat(cuentasCobrarInput.value) || 0,
            inventarios: parseFloat(inventariosInput.value) || 0,
            terrenos: parseFloat(terrenosInput.value) || 0,
            edificios: parseFloat(edificiosInput.value) || 0,
            maquinarias: parseFloat(maquinariasInput.value) || 0,
            muebles: parseFloat(mueblesInput.value) || 0,
            equipos: parseFloat(equiposInput.value) || 0,
            vehiculos: parseFloat(vehiculosInput.value) || 0,
            materiaPrima: parseFloat(materiaPrimaInput.value) || 0,
            manoObra: parseFloat(manoObraInput.value) || 0,
            gastosAdministrativos: parseFloat(gastosAdministrativosInput.value) || 0,
            gastosVenta: parseFloat(gastosVentaInput.value) || 0,
            gastosFinancieros: parseFloat(gastosFinancierosInput.value) || 0,
            cuentasPagar: parseFloat(cuentasPagarInput.value) || 0,
            cacpeco: parseFloat(cacpecoInput.value) || 0,
            pichincha: parseFloat(pichinchaInput.value) || 0,
            ventas2021: parseFloat(ventas2021Input.value) || 0,
            ventas2022: parseFloat(ventas2022Input.value) || 0,
            ventas2023: parseFloat(ventas2023Input.value) || 0,
            ventas2024: parseFloat(ventas2024Input.value) || 0,
            incobrables2021: parseFloat(incobrables2021Input.value) || 0,
            incobrables2022: parseFloat(incobrables2022Input.value) || 0,
            incobrables2023: parseFloat(incobrables2023Input.value) || 0,
            incobrables2024: parseFloat(incobrables2024Input.value) || 0,
        };

        localStorage.setItem('datosFormulario', JSON.stringify(datos));
    }

    // Evento para guardar los datos cuando se hace clic en el botón de guardar
    guardarButton.addEventListener('click', guardarDatos);

     //para ingresos
     function updateTotalIngresos() {
        const ventas = parseFloat(ventasInput.value) || 0;
        const ingresosFinancieros = parseFloat(ingresosFinancierosInput.value) || 0;
        const ventaActivos = parseFloat(ventaActivosInput.value) || 0;
        const ingresosAlquiler = parseFloat(ingresosAlquilerInput.value) || 0;

        const totalIngresos = ventas + ingresosFinancieros + ventaActivos + ingresosAlquiler;
        totalIngresosElement.textContent = `$${totalIngresos.toFixed(2)}`;
    }
//

    function updateTotalActivosCorrientes() {
        efectivo = parseFloat(efectivoInput.value) || 0;
        cuentasCobrar = parseFloat(cuentasCobrarInput.value) || 0;
        inventarios = parseFloat(inventariosInput.value) || 0;
        totalActivosCorrientes = efectivo + cuentasCobrar + inventarios;
        totalActivosCorrientesElement.textContent = `$${totalActivosCorrientes.toFixed(2)}`;
            //
        //activosCorrientes1Input.value = totalActivosCorrientes.toFixed(2);
       // activosCorrientes2Input.value = totalActivosCorrientes.toFixed(2);
        //activosCorrientes3Input.value = totalActivosCorrientes.toFixed(2);
        document.getElementById('total-activos-corrientes').textContent = `$${totalActivosCorrientes.toFixed(2)}`;
        //updateTotalActivos();
        updateCapitalTrabajo();
        updateLiquidezCorriente();
        updatePruebaAcida();
        updateTotalActivos();
        updateEndeudamientoActivo();
    }
    
    function updateTotalActivosNoCorrientes() {
        terrenos = parseFloat(terrenosInput.value) || 0;
        edificios = parseFloat(edificiosInput.value) || 0;
        maquinarias = parseFloat(maquinariasInput.value) || 0;
        muebles = parseFloat(mueblesInput.value) || 0;
        equipos = parseFloat(equiposInput.value) || 0;
        vehiculos = parseFloat(vehiculosInput.value) || 0;
        totalActivosNoCorrientes = terrenos + edificios + maquinarias + muebles + equipos + vehiculos;
        totalActivosNoCorrientesElement.textContent = `$${totalActivosNoCorrientes.toFixed(2)}`;
        updateTotalActivos();
        updateEndeudamientoActivo();
    }

    function updateTotalActivos() {
        totalActivos = totalActivosCorrientes + totalActivosNoCorrientes;
        totalActivosElement.textContent = `$${totalActivos.toFixed(2)}`;
        activoTotalElement.textContent = `$${totalActivos.toFixed(2)}`;

   
    }

    function updateTotalEgresos() {
        materiaPrima = parseFloat(materiaPrimaInput.value) || 0;
        manoObra = parseFloat(manoObraInput.value) || 0;
        gastosAdministrativos = parseFloat(gastosAdministrativosInput.value) || 0;
        gastosVenta = parseFloat(gastosVentaInput.value) || 0;
        gastosFinancieros = parseFloat(gastosFinancierosInput.value) || 0;
        totalEgresos = materiaPrima + manoObra + gastosAdministrativos + gastosVenta + gastosFinancieros;
        totalEgresosElement.textContent = `$${totalEgresos.toFixed(2)}`;
    }

    function updateTotalPasivosCorrientes() {
        cuentasPagar = parseFloat(cuentasPagarInput.value) || 0;
        cacpeco = parseFloat(cacpecoInput.value) || 0;
        pichincha = parseFloat(pichinchaInput.value) || 0;
        totalPasivosCorrientes = cuentasPagar + cacpeco + pichincha;
        totalPasivosCorrientesElement.textContent = `$${totalPasivosCorrientes.toFixed(2)}`;
        pasivosCorrientes1Input.value = totalPasivosCorrientes.toFixed(2);
        pasivosCorrientes2Input.value = totalPasivosCorrientes.toFixed(2);
        pasivosCorrientes3Input.value = totalPasivosCorrientes.toFixed(2);
        pasivoTotalElement.textContent = `$${totalPasivosCorrientes.toFixed(2)}`;

       
        updateCapitalTrabajo();
        updateLiquidezCorriente();
        updatePruebaAcida();
        updateEndeudamientoActivo();
    }
//nuevo


function actualizarInterpretacionLiquidez() {
    const capitalTrabajo = parseFloat(document.getElementById('capital-trabajo').textContent.replace('$', '').replace(',', '')) || 0;
    const liquidezCorriente = parseFloat(document.getElementById('liquidez-corriente').textContent) || 0;
    const pruebaAcida = parseFloat(document.getElementById('prueba-acida').textContent) || 0;

    const interpretacionElement = document.getElementById('interpretacion-indice-liquidez');

    let interpretacion = '';
    let colorFondo = '';

    if (capitalTrabajo > 0 && liquidezCorriente > 0 && pruebaAcida > 0) {
        interpretacion = 'El negocio de acuerdo al Capital de Trabajo, Razón Corriente y Prueba Ácida si posee la liquidez necesaria para cubrir sus obligaciones financieras, deudas o pasivos a corto plazo y desarrollar sus actividades sin ningún contratiempo.';
        colorFondo = 'green';
    } else if ((capitalTrabajo > 0 && (liquidezCorriente <= 0 || pruebaAcida <= 0)) ||
               (liquidezCorriente > 0 && (capitalTrabajo <= 0 || pruebaAcida <= 0)) ||
               (pruebaAcida > 0 && (capitalTrabajo <= 0 || liquidezCorriente <= 0))) {
        interpretacion = 'El negocio de acuerdo al Capital de Trabajo, Razón Corriente y Prueba Ácida posee una liquidez neutra que probablemente le permita cubrir sus obligaciones financieras, deudas o pasivos a corto plazo y desarrollar sus actividades sin ningún contratiempo.';
        colorFondo = 'yellow';
    } else {
        interpretacion = 'El negocio de acuerdo al Capital de Trabajo, Razón Corriente y Prueba Ácida no posee la liquidez necesaria para cubrir sus obligaciones financieras, deudas o pasivos a corto plazo y desarrollar sus actividades sin ningún contratiempo.';
        colorFondo = 'red';
    }

    interpretacionElement.textContent = interpretacion;
    interpretacionElement.style.backgroundColor = colorFondo;
    interpretacionElement.style.color = colorFondo === 'yellow' ? 'black' : 'white'; // Ajuste de color del texto para mejor legibilidad
}
//



    function updateCapitalTrabajo() {
        const activosCorrientes = parseFloat(activosCorrientes1Input.value) || 0;
        const pasivosCorrientes = parseFloat(pasivosCorrientes1Input.value) || 0;
        const capitalTrabajo = activosCorrientes - pasivosCorrientes;
        capitalTrabajoElement.textContent = `$${capitalTrabajo.toFixed(2)}`;
        actualizarInterpretacionLiquidez(); 
    }


    function updateLiquidezCorriente() {
        const activosCorrientes = parseFloat(activosCorrientes2Input.value) || 0;
        const pasivosCorrientes = parseFloat(pasivosCorrientes2Input.value) || 0;
        const liquidezCorriente = activosCorrientes / pasivosCorrientes;
        liquidezCorrienteElement.textContent = liquidezCorriente.toFixed(2);
        actualizarInterpretacionLiquidez();
    }

    function updatePruebaAcida() {
        const activosCorrientes = parseFloat(activosCorrientes3Input.value) || 0;
        const inventario = parseFloat(inventariosInput.value) || 0;
        const pasivosCorrientes = parseFloat(pasivosCorrientes3Input.value) || 0;
        const pruebaAcida = (activosCorrientes - inventario) / pasivosCorrientes;
        pruebaAcidaElement.textContent = pruebaAcida.toFixed(2);
        document.getElementById('inventario').value = inventario.toFixed(2);
        actualizarInterpretacionLiquidez();
    }

    function updateCrecimiento() {

        ventas2021 = parseFloat(ventas2021Input.value) || 0;
        ventas2022 = parseFloat(ventas2022Input.value) || 0;
        ventas2023 = parseFloat(ventas2023Input.value) || 0;
        ventas2024 = parseFloat(ventas2024Input.value) || 0;

        crecimiento2021Element.textContent = '----';

        const crecimiento2022 = ((ventas2022 - ventas2021) / ventas2021) * 100;
        crecimiento2022Element.textContent = `${crecimiento2022.toFixed(2)}%`;

        const crecimiento2023 = ((ventas2023 - ventas2022) / ventas2022) * 100;
        crecimiento2023Element.textContent = `${crecimiento2023.toFixed(2)}%`;

        const crecimiento2024 = ((ventas2024 - ventas2023) / ventas2023) * 100;
        crecimiento2024Element.textContent = `${crecimiento2024.toFixed(2)}%`;

    }

    // function updatePorcentajeIncobrables() {

    //      // Obtener los valores de incobrables para cada año
    // incobrables2021 = parseFloat(incobrables2021Input.value) || 0;
    // incobrables2022 = parseFloat(incobrables2022Input.value) || 0;
    // incobrables2023 = parseFloat(incobrables2023Input.value) || 0;
    // incobrables2024 = parseFloat(incobrables2024Input.value) || 0;

    // // Calcular los porcentajes de incobrables comparando con el año anterior
    // porcentajeIncobrables2022Element.textContent = ((incobrables2021 - incobrables2022) / incobrables2021 * 100).toFixed(2) + '%';
    // porcentajeIncobrables2023Element.textContent = ((incobrables2022 - incobrables2023) / incobrables2022 * 100).toFixed(2) + '%';
    // porcentajeIncobrables2024Element.textContent = ((incobrables2023 - incobrables2024) / incobrables2023 * 100).toFixed(2) + '%';

    // // El primer año no tiene año anterior para comparar, por lo que se pone "N/A"
    // porcentajeIncobrables2021Element.textContent = 'N/A';

    // }


    function updatePorcentajeIncobrables() {

        // Obtener los valores de incobrables para cada año
        incobrables2021 = parseFloat(incobrables2021Input.value) || 0;
        incobrables2022 = parseFloat(incobrables2022Input.value) || 0;
        incobrables2023 = parseFloat(incobrables2023Input.value) || 0;
        incobrables2024 = parseFloat(incobrables2024Input.value) || 0;
    
        // El primer año no tiene un año anterior para comparar, por lo que se pone "N/A"
        porcentajeIncobrables2021Element.textContent = 'N/A';

        // Calcular los porcentajes de crecimiento de incobrables comparando con el año anterior
        const porcentajeIncobrables2022 = ((incobrables2022 - incobrables2021) / incobrables2021) * 100;
        porcentajeIncobrables2022Element.textContent = `${porcentajeIncobrables2022.toFixed(2)}%`;


        const porcentajeIncobrables2023 = ((incobrables2023 - incobrables2022) / incobrables2022) * 100;
        porcentajeIncobrables2023Element.textContent = `${porcentajeIncobrables2023.toFixed(2)}%`;


        const porcentajeIncobrables2024 = ((incobrables2024 - incobrables2023) / incobrables2023) * 100;
        porcentajeIncobrables2024Element.textContent = `${porcentajeIncobrables2024.toFixed(2)}%`;


    }



    function updateRotacionCartera() {


        const ventas = parseFloat(document.getElementById('ventas-rotacion').value) || 0;
        const cuentasPorCobrar = parseFloat(document.getElementById('cuentas-por-cobrar').value) || 0;
        const rotacionCartera = ventas / cuentasPorCobrar;
        document.getElementById('rotacion-cartera-valor').textContent = Math.floor(rotacionCartera);
        document.getElementById('rotacion-cartera-interpretacion').textContent = `La empresa en promedio cobra ${Math.floor(rotacionCartera)} veces al año.`;


    }
    

    function updatePeriodoCobranza() {
        const ventas = parseFloat(document.getElementById('ventas-cobranza').value) || 0;
        const cuentasPorCobrar = parseFloat(document.getElementById('cuentas-por-cobrar-cobranza').value) || 0;
        const periodoCobranza = (cuentasPorCobrar * 365) / ventas;
        document.getElementById('periodo-cobranza-valor').textContent = Math.floor(periodoCobranza);
        document.getElementById('periodo-cobranza-interpretacion').textContent = `La empresa otorga a sus clientes un período promedio de ${Math.floor(periodoCobranza)} días para que cancelen sus deudas a crédito.`;
        updateConclusionRotacion();
    }
    
    function updateConclusionRotacion() {
        const periodoCobranza = document.getElementById('periodo-cobranza-valor').textContent;
        const periodoPago = document.getElementById('periodo-pago-valor').textContent;
    
        document.getElementById('conclusion-rotacion').textContent = `La empresa otorga a sus clientes un plazo de cobro de ${periodoCobranza} días y paga a sus proveedores en un período de ${periodoPago} días, por lo tanto la empresa tiene una buena gestión tanto en sus cobros como en sus pagos.`;
    }
    function updateRotacionCuentasPagar() {
        const compras = parseFloat(document.getElementById('compras').value) || 0;
        const cuentasPorPagar = parseFloat(document.getElementById('cuentas-por-pagar').value) || 0;
        const rotacionCuentasPagar = compras / cuentasPorPagar;
        document.getElementById('rotacion-cuentas-pagar-valor').textContent = Math.floor(rotacionCuentasPagar);
        document.getElementById('rotacion-cuentas-pagar-interpretacion').textContent = `La empresa paga en promedio ${Math.floor(rotacionCuentasPagar)} veces al año.`;
    }
    
    function updatePeriodoPago() {
        const cuentasPorPagar = parseFloat(document.getElementById('cuentas-por-pagar-pago').value) || 0;
        const compras = parseFloat(document.getElementById('compras-pago').value) || 0;
        const periodoPago = (cuentasPorPagar * 365) / compras;
        document.getElementById('periodo-pago-valor').textContent = Math.floor(periodoPago);
        document.getElementById('periodo-pago-interpretacion').textContent = `La empresa paga a sus proveedores en un período promedio de ${Math.floor(periodoPago)} días.`;
        updateConclusionRotacion();
    }
    
    function updateRotacionActivoFijo() {
        const ventas = parseFloat(document.getElementById('ventas-activo-fijo').value) || 0;
        const activoFijo = parseFloat(document.getElementById('activo-fijo').value) || 0;
        const rotacionActivoFijo = ventas / activoFijo;
        document.getElementById('rotacion-activo-fijo-valor').textContent = Math.floor(rotacionActivoFijo);
        document.getElementById('rotacion-activo-fijo-interpretacion').textContent = `Por cada dólar invertido en Activo Fijo, la empresa vende $${Math.floor(rotacionActivoFijo)}.`;
    }
    
    function updateRotacionVentas() {
        const ventas = parseFloat(document.getElementById('ventas-rotacion-ventas').value) || 0;
        const activoTotal = parseFloat(document.getElementById('activo-total-rotacion-ventas').value) || 0;
        const rotacionVentas = ventas / activoTotal;
        document.getElementById('rotacion-ventas-valor').textContent = Math.floor(rotacionVentas);
        document.getElementById('rotacion-ventas-interpretacion').textContent = `Por cada dólar invertido en Activo Total, la empresa generó una venta de $${Math.floor(rotacionVentas)}.`;
    }
    

    //indicadores de rentabilidad
    function updateMargenNeto() {
        const utilidad = parseFloat(document.getElementById('utilidad-margen-neto').value) || 0;
        const ventas = parseFloat(document.getElementById('ventas-margen-neto').value) || 0;
        const margenNeto = ventas !== 0 ? (utilidad / ventas) * 100 : 0;
        document.getElementById('resultado-margen-neto').textContent = `${margenNeto.toFixed(2)}%`;
    }

    function updateROA() {
        const utilidad = parseFloat(document.getElementById('utilidad-roa').value) || 0;
        const activoTotal = parseFloat(document.getElementById('activo-total-roa').value) || 0;
        const roa = activoTotal !== 0 ? (utilidad / activoTotal) * 100 : 0;
        document.getElementById('resultado-roa').textContent = `${roa.toFixed(2)}%`;
    }
   
    //
    //codeudor
// Función para agregar una nueva fila en la tabla de Codeudores

function addCodeudorRow() {
    const table = document.getElementById('codeudor-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);

    cell1.innerHTML = '<input type="text" value="Codeudor">';
    cell2.innerHTML = '<input type="text">';
    cell3.innerHTML = '<input type="text">';
    cell4.innerHTML = '<input type="text">';
    cell5.innerHTML = '<input type="text">';
    cell6.innerHTML = '<input type="number">';
}

    //

    //para ingresos
    ventasInput.addEventListener('input', updateTotalIngresos);
    ingresosFinancierosInput.addEventListener('input', updateTotalIngresos);
    ventaActivosInput.addEventListener('input', updateTotalIngresos);
    ingresosAlquilerInput.addEventListener('input', updateTotalIngresos);

    efectivoInput.addEventListener('input', () => {
        updateTotalActivosCorrientes();
        updateTotalActivos();
    });

    cuentasCobrarInput.addEventListener('input', () => {
        updateTotalActivosCorrientes();
        updateTotalActivos();
    });

    inventariosInput.addEventListener('input', () => {
        updateTotalActivosCorrientes();
        updateTotalActivos();
    });

    terrenosInput.addEventListener('input', () => {
        updateTotalActivosNoCorrientes();
        updateTotalActivos();
    });

    edificiosInput.addEventListener('input', () => {
        updateTotalActivosNoCorrientes();
        updateTotalActivos();
    });

    maquinariasInput.addEventListener('input', () => {
        updateTotalActivosNoCorrientes();
        updateTotalActivos();
    });

    mueblesInput.addEventListener('input', () => {
        updateTotalActivosNoCorrientes();
        updateTotalActivos();
    });

    equiposInput.addEventListener('input', () => {
        updateTotalActivosNoCorrientes();
        updateTotalActivos();
    });

    vehiculosInput.addEventListener('input', () => {
        updateTotalActivosNoCorrientes();
        updateTotalActivos();
    });

    materiaPrimaInput.addEventListener('input', updateTotalEgresos);
    manoObraInput.addEventListener('input', updateTotalEgresos);
    gastosAdministrativosInput.addEventListener('input', updateTotalEgresos);
    gastosVentaInput.addEventListener('input', updateTotalEgresos);
    gastosFinancierosInput.addEventListener('input', updateTotalEgresos);

    cuentasPagarInput.addEventListener('input', updateTotalPasivosCorrientes);
    cacpecoInput.addEventListener('input', updateTotalPasivosCorrientes);
    pichinchaInput.addEventListener('input', updateTotalPasivosCorrientes);

    ventas2021Input.addEventListener('input', () => {
        updateCrecimiento();
        updatePorcentajeIncobrables();
    });
    ventas2022Input.addEventListener('input', () => {
        updateCrecimiento();
        updatePorcentajeIncobrables();
    });
    ventas2023Input.addEventListener('input', () => {
        updateCrecimiento();
        updatePorcentajeIncobrables();
    });
    ventas2024Input.addEventListener('input', () => {
        updateCrecimiento();
        updatePorcentajeIncobrables();
    });
    

    //traer los datos
    document.getElementById('cargar-datos').addEventListener('click', function() {
        const contribuyenteData = JSON.parse(localStorage.getItem('contribuyenteData'));
        const datosFlujoCaja = JSON.parse(localStorage.getItem('datosFlujoCaja'));
        const creditos = JSON.parse(localStorage.getItem('creditos'));
        const datosCrecimientoVentas = JSON.parse(localStorage.getItem('datosCrecimientoVentas'));
    
        if (contribuyenteData) {
            document.getElementById('nombre-contribuyente').textContent = `${contribuyenteData.nombres} ${contribuyenteData.apellidos}`;
            document.getElementById('ci-contribuyente').textContent = contribuyenteData.cedula;
            document.getElementById('tipo-contribuyente').textContent = contribuyenteData.tipo;
            document.getElementById('ventas').value = contribuyenteData.ingresosAnuales.toFixed(2); // Llenar el campo de ventas con el ingreso anual
           activosCorrientes1Input.value = contribuyenteData.ingresosAnuales.toFixed(2);
            activosCorrientes2Input.value = contribuyenteData.ingresosAnuales.toFixed(2);
            activosCorrientes3Input.value = contribuyenteData.ingresosAnuales.toFixed(2);
            ventasRotacionInput.value = contribuyenteData.ingresosAnuales.toFixed(2);
            ventasCobranzaInput.value = contribuyenteData.ingresosAnuales.toFixed(2);
            ventasActivoFijoInput.value = contribuyenteData.ingresosAnuales.toFixed(2);
            ventasRotacionVentasInput.value = contribuyenteData.ingresosAnuales.toFixed(2);
            

        } 
        else {
            alert('No se encontraron datos del contribuyente en el almacenamiento local.');
        }
    
        if (datosCrecimientoVentas && datosCrecimientoVentas.anios.length > 0) {
            // Variables para el acceso a los elementos de la tabla de crecimiento de ventas
            const ventasInputs = [
                document.getElementById('ventas-1'),
                document.getElementById('ventas-2'),
                document.getElementById('ventas-3'),
                document.getElementById('ventas-4')
            ];
    
            const crecimientoElements = [
                document.getElementById('crecimiento-1'),
                document.getElementById('crecimiento-2'),
                document.getElementById('crecimiento-3'),
                document.getElementById('crecimiento-4')
            ];
            const incobrablesInputs = [
                document.getElementById('incobrables-2021'),
                document.getElementById('incobrables-2022'),
                document.getElementById('incobrables-2023'),
                document.getElementById('incobrables-2024')
            ];
            
            const porcentajeIncobrablesElements = [
                document.getElementById('porcentaje-incobrables-2021'),
                document.getElementById('porcentaje-incobrables-2022'),
                document.getElementById('porcentaje-incobrables-2023'),
                document.getElementById('porcentaje-incobrables-2024')
            ];
    
            for (let i = 0; i < datosCrecimientoVentas.anios.length; i++) {
                if (datosCrecimientoVentas.anios[i]) {
                    // Rellenar los campos de año y ventas
                    document.getElementById(`anio-${i+1}`).textContent = datosCrecimientoVentas.anios[i];
                    ventasInputs[i].value = datosCrecimientoVentas.ingresos[i];
    
                    // Calcular y mostrar el crecimiento de ventas
                    if (i > 0) {
                        const ingresoAnterior = parseFloat(datosCrecimientoVentas.ingresos[i-1]);
                        const crecimiento = ((parseFloat(datosCrecimientoVentas.ingresos[i]) - ingresoAnterior) / ingresoAnterior) * 100;
                        crecimientoElements[i].textContent = `${crecimiento.toFixed(2)}%`;
                    } else {
                        crecimientoElements[i].textContent = 'N/A';
                    }
                    document.getElementById(`anio-incobrables-${i+1}`).textContent = datosCrecimientoVentas.anios[i];
                    incobrablesInputs[i].value = datosCrecimientoVentas.gastos[i];
    
                    // const porcentajeIncobrables = (datosCrecimientoVentas.gastos[i] / datosCrecimientoVentas.gastos[i]) * 100;
                    // porcentajeIncobrablesElements[i].textContent = `${porcentajeIncobrables.toFixed(2)}%`;

                if (i > 0) {
                    const gastoAnterior = parseFloat(datosCrecimientoVentas.gastos[i-1]);
                    const gastoActual = parseFloat(datosCrecimientoVentas.gastos[i]);

                    //const porcentajeIncobrables = ((gastoAnterior - gastoActual) / gastoAnterior) * 100;
                    const porcentajeIncobrables = ((gastoActual - gastoAnterior) / gastoAnterior) * 100;

                    porcentajeIncobrablesElements[i].textContent = `${porcentajeIncobrables.toFixed(2)}%`;
                } else {
                    porcentajeIncobrablesElements[i].textContent = 'N/A';
                }
            
              
                }
            }
            
            // for (let i = 0; i < 4; i++) {
            //     const flujoCajaAnio = datosFlujoCaja[i];
            //     if (flujoCajaAnio) {
            //         document.getElementById(`anio-incobrables-${i+1}`).textContent = flujoCajaAnio.anio;
            //     }
            // }
    
            // Rellenar los campos de egresos con los datos correspondientes
            const primerAnioFlujoCaja = datosFlujoCaja[0];
            document.getElementById('materia-prima').value = primerAnioFlujoCaja.costoMateriaPrima;
            document.getElementById('mano-obra').value = primerAnioFlujoCaja.costoManoObra;
            document.getElementById('gastos-administrativos').value = primerAnioFlujoCaja.gastosAdmin;
            document.getElementById('gastos-venta').value = primerAnioFlujoCaja.gastosVenta;
            document.getElementById('gastos-financieros').value = primerAnioFlujoCaja.gastosFinancieros;
            
            // Sumar todos los egresos para mostrar el total
            const totalEgresos = parseFloat(primerAnioFlujoCaja.costoMateriaPrima) +
                                 parseFloat(primerAnioFlujoCaja.costoManoObra) +
                                 parseFloat(primerAnioFlujoCaja.gastosAdmin) +
                                 parseFloat(primerAnioFlujoCaja.gastosVenta) +
                                 parseFloat(primerAnioFlujoCaja.gastosFinancieros);
    
            document.getElementById('total-egresos').textContent = `$${totalEgresos.toFixed(2)}`;
        } else {
            alert('No se encontraron datos de flujo de caja en el almacenamiento local.');
        }
    
        if (creditos) {
            let cuentasPagarTotal = 0;
            let cacpecoTotal = 0;
            let pichinchaTotal = 0;
            let guayaquilTotal = 0;
            let ruminhauiTotal = 0;
            let banEcuadorTotal = 0;
            let pacificoTotal = 0;
            let ambatoTotal = 0;
        
            creditos.forEach(credito => {
                cuentasPagarTotal += credito.valor;
        
                switch (credito.institucion) {
                    case 'Cacpeco':
                        cacpecoTotal += credito.valor;
                        break;
                    case 'Pichincha':
                        pichinchaTotal += credito.valor;
                        break;
                    case 'Guayaquil':
                        guayaquilTotal += credito.valor;
                        break;
                    case 'Rumiñahui':
                        ruminhauiTotal += credito.valor;
                        break;
                    case 'BanEcuador':
                        banEcuadorTotal += credito.valor;
                        break;
                    case 'Pacifico':
                        pacificoTotal += credito.valor;
                        break;
                    case 'Ambato':
                        ambatoTotal += credito.valor;
                        break;
                }
            });
        
            document.getElementById('cuentas-pagar').value = cuentasPagarTotal.toFixed(2);
            document.getElementById('cacpeco').value = cacpecoTotal.toFixed(2);
            document.getElementById('pichincha').value = pichinchaTotal.toFixed(2);
            document.getElementById('guayaquil').value = guayaquilTotal.toFixed(2);
            document.getElementById('ruminhaui').value = ruminhauiTotal.toFixed(2);
            document.getElementById('banecuador').value = banEcuadorTotal.toFixed(2);
            document.getElementById('pacifico').value = pacificoTotal.toFixed(2);
            document.getElementById('ambato').value = ambatoTotal.toFixed(2);
           
            const totalPasivosCorrientes = cuentasPagarTotal;
            document.getElementById('total-pasivos-corrientes').textContent = `$${totalPasivosCorrientes.toFixed(2)}`;
            pasivosCorrientes1Input.value = totalPasivosCorrientes.toFixed(2);
            pasivosCorrientes2Input.value = totalPasivosCorrientes.toFixed(2);
            pasivosCorrientes3Input.value = totalPasivosCorrientes.toFixed(2);
            //activosCorrientes1Input.value = totalActivosElement.toFixed(2);
            //nuevo
            // Actualizar los valores de Pasivo Total y Activo Total en los inputs
    const pasivoTotal = parseFloat(document.getElementById('total-pasivos-corrientes').textContent.replace('$', '').replace(',', '')) || 0;
    const activoTotal = parseFloat(document.getElementById('total-activos').textContent.replace('$', '').replace(',', '')) || 0;

    document.getElementById('pasivo-total-input').value = pasivoTotal.toFixed(2);
    document.getElementById('activo-total-input').value = activoTotal.toFixed(2);

    // Calcular el Endeudamiento del Activo y actualizar el resultado
    const endeudamientoActivo = (pasivoTotal / activoTotal) || 0;
    document.getElementById('endeudamiento-activo-display').textContent = endeudamientoActivo.toFixed(2);

    // Actualizar el mensaje interpretativo
    const interpretacionEndeudamientoElement = document.getElementById('interpretacion-endeudamiento');
    interpretacionEndeudamientoElement.innerHTML = `El negocio presenta por cada dólar de Activo Total la empresa tiene $<span id="ratio-endeudamiento-display">${endeudamientoActivo.toFixed(2)}</span> en Pasivos Corrientes. Por cada dólar de Activo Total, $<span id="ratio-endeudamiento-display">${endeudamientoActivo.toFixed(2)}</span> son deudas a Corto Plazo.`;



        } else {
            alert('No se encontraron datos de créditos en el almacenamiento local.');
        }
       
    });

///guardar datos localmente de todo esto



///




    //nuevo
// Eventos para actualizar indicadores en tiempo real
ventasInput.addEventListener('input', updateTotalIngresos);
ingresosFinancierosInput.addEventListener('input', updateTotalIngresos);
ventaActivosInput.addEventListener('input', updateTotalIngresos);
ingresosAlquilerInput.addEventListener('input', updateTotalIngresos);

efectivoInput.addEventListener('input', updateTotalActivosCorrientes);
cuentasCobrarInput.addEventListener('input', updateTotalActivosCorrientes);
inventariosInput.addEventListener('input', updateTotalActivosCorrientes);

cuentasPagarInput.addEventListener('input', updateTotalPasivosCorrientes);
cacpecoInput.addEventListener('input', updateTotalPasivosCorrientes);
pichinchaInput.addEventListener('input', updateTotalPasivosCorrientes);

// Eventos para actualización de indicadores en tiempo real
materiaPrimaInput.addEventListener('input', updateTotalEgresos);
manoObraInput.addEventListener('input', updateTotalEgresos);
gastosAdministrativosInput.addEventListener('input', updateTotalEgresos);
gastosVentaInput.addEventListener('input', updateTotalEgresos);
gastosFinancierosInput.addEventListener('input', updateTotalEgresos);
    //

    incobrables2021Input.addEventListener('input', updatePorcentajeIncobrables);
    incobrables2022Input.addEventListener('input', updatePorcentajeIncobrables);
    incobrables2023Input.addEventListener('input', updatePorcentajeIncobrables);
    incobrables2024Input.addEventListener('input', updatePorcentajeIncobrables);

    ventasRotacionInput.addEventListener('input', updateRotacionCartera);
    cuentasPorCobrarInput.addEventListener('input', updateRotacionCartera);

    cuentasPorCobrarCobranzaInput.addEventListener('input', updatePeriodoCobranza);
    ventasCobranzaInput.addEventListener('input', updatePeriodoCobranza);

    comprasInput.addEventListener('input', updateRotacionCuentasPagar);
    cuentasPorPagarInput.addEventListener('input', updateRotacionCuentasPagar);

    cuentasPorPagarPagoInput.addEventListener('input', updatePeriodoPago);
    comprasPagoInput.addEventListener('input', updatePeriodoPago);

    ventasActivoFijoInput.addEventListener('input', updateRotacionActivoFijo);
    activoFijoInput.addEventListener('input', updateRotacionActivoFijo);

    ventasRotacionVentasInput.addEventListener('input', updateRotacionVentas);
    activoTotalRotacionVentasInput.addEventListener('input', updateRotacionVentas);

    // indicadores rentabilidad//
    document.getElementById('utilidad-margen-neto').addEventListener('input', updateMargenNeto);
    document.getElementById('ventas-margen-neto').addEventListener('input', updateMargenNeto);

    document.getElementById('utilidad-roa').addEventListener('input', updateROA);
    document.getElementById('activo-total-roa').addEventListener('input', updateROA);
    //codeior


    document.getElementById('add-codeudor-row').addEventListener('click', addCodeudorRow);
    //
    updateTotalIngresos();
    updateTotalActivosCorrientes();
    updateTotalActivosNoCorrientes();
    updateTotalEgresos();
    updateTotalPasivosCorrientes();
    updateCrecimiento();
    updatePorcentajeIncobrables();
    updateRotacionCartera();
    updatePeriodoCobranza();
    updateRotacionCuentasPagar();
    updatePeriodoPago();
    updateRotacionActivoFijo();
    updateRotacionVentas();
});
