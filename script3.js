function generarTabla() {
    const monto = parseFloat(document.getElementById('monto').value);
    const tasaInteres = parseFloat(document.getElementById('tasa-interes').value) / 100;
    const plazo = parseInt(document.getElementById('plazo').value);
    const frecuenciaPago = document.getElementById('frecuencia-pago').value;
    const tipoTabla = document.getElementById('tipo-tabla').value;

    const pagosPorAnio = {
        'Quincenal': 24,
        'Mensual': 12,
        'Bimensual': 6,
        'Trimestral': 4,
        'Cuatrimestral': 3,
        'Semestral': 2,
        'Anual': 1
    };

    const n = plazo * pagosPorAnio[frecuenciaPago];
    const tasa = tasaInteres / pagosPorAnio[frecuenciaPago];

    if (tipoTabla === 'francesa') {
        generarTablaFrancesa(monto, tasa, n);
    } else if (tipoTabla === 'alemana') {
        generarTablaAlemana(monto, tasa, n);
    }
}

function generarTablaFrancesa(monto, tasa, n) {
    const cuota = monto * (tasa / (1 - Math.pow(1 + tasa, -n)));

    let saldo = monto;
    let totalInteres = 0;
    let totalAmortizacion = 0;
    let cuotas = [];

    const tableBody = document.querySelector('#amortizacion-table tbody');
    tableBody.innerHTML = '';

    for (let i = 1; i <= n; i++) {
        const interes = saldo * tasa;
        const amortizacion = cuota - interes;
        saldo -= amortizacion;

        totalInteres += interes;
        totalAmortizacion += amortizacion;

        cuotas.push({ cuota });

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${i}</td>
            <td>${cuota.toFixed(2)}</td>
            <td>${interes.toFixed(2)}</td>
            <td>${amortizacion.toFixed(2)}</td>
            <td>${saldo.toFixed(2)}</td>
        `;
        tableBody.appendChild(row);
    }

    document.getElementById('total-final').textContent = (cuota * n).toFixed(2);
    document.getElementById('total-interes').textContent = totalInteres.toFixed(2);
    document.getElementById('total-amortizacion').textContent = totalAmortizacion.toFixed(2);

    // Guardar las cuotas en el almacenamiento local
    localStorage.setItem('cuotasAmortizacion', JSON.stringify(cuotas));
}

function generarTablaAlemana(monto, tasa, n) {
    const amortizacionConstante = monto / n;

    let saldo = monto;
    let totalInteres = 0;
    let totalAmortizacion = 0;
    let cuotas = [];

    const tableBody = document.querySelector('#amortizacion-table tbody');
    tableBody.innerHTML = '';

    for (let i = 1; i <= n; i++) {
        const interes = saldo * tasa;
        const cuota = amortizacionConstante + interes;
        saldo -= amortizacionConstante;

        totalInteres += interes;
        totalAmortizacion += amortizacionConstante;

        cuotas.push({ cuota });

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${i}</td>
            <td>${cuota.toFixed(2)}</td>
            <td>${interes.toFixed(2)}</td>
            <td>${amortizacionConstante.toFixed(2)}</td>
            <td>${saldo.toFixed(2)}</td>
        `;
        tableBody.appendChild(row);
    }

    document.getElementById('total-final').textContent = (amortizacionConstante * n + totalInteres).toFixed(2);
    document.getElementById('total-interes').textContent = totalInteres.toFixed(2);
    document.getElementById('total-amortizacion').textContent = totalAmortizacion.toFixed(2);

    // Guardar las cuotas en el almacenamiento local
    localStorage.setItem('cuotasAmortizacion', JSON.stringify(cuotas));
}
