var sueldoSemanal, pago, horas;

pago = prompt("Por favor, ingresa el pago por hora");
horas = prompt("Por favor, ingresa el número de horas trabajadas");


sueldoSemanal = parseFloat(pago) * parseFloat(horas);


alert(sueldoSemanal);