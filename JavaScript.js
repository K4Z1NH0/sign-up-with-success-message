document.getElementById('submitButton').addEventListener('click', function() {
    var emailInput = document.getElementById('emailInput').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var inputField = document.getElementById('emailInput');
    
    if (emailRegex.test(emailInput)) {
        // Email é válido, redirecionar para a página de agradecimento
        window.location.href = 'thanks/thanks.html';
    } else {
        // Email não é válido, mostrar mensagem de erro no placeholder e alterar cor do input
        document.getElementById('msgemail').innerHTML = 'Valid email required';
        document.getElementById('msgemail').classList.add('msgerror');
        inputField.value = ''; // Limpar o campo de entrada
        inputField.classList.add('invalid-input'); // Adicionar classe CSS para alterar a cor
    }
});
