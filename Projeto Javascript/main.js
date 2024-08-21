const form = document.getElementById('comparador');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);

    if (num2 <= num1) {
        alert("Formulário inválido! O número B deve ser maior que o número A");
    } else {
        alert("Formulário válido! O número B é maior que o número A");
        form.submit();
    }
});