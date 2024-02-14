function calcularRendimiento() {
    var capital = parseFloat(document.getElementById('capital').value);
    var tasa = 21.5 / 100; 
    var periodo = parseInt(document.getElementById('periodo').value);
    var years = parseInt(document.getElementById('years').value);
    
    var totalPeriods = periodo * years;
    var rendimiento = capital * Math.pow(1 + tasa / periodo, totalPeriods) - capital;
    
    document.getElementById('resultado').innerText = 'El rendimiento total es: ' + rendimiento.toFixed(2) + ' pesos mexicanos.';
  }