// Seleciona o formulário pelo seletor
const form = document.querySelector('form');

// Adiciona um ouvinte de evento para o envio do formulário
form.addEventListener('submit', function(event) {
    // Impede o envio automático do formulário para permitir a exibição do alerta
    event.preventDefault();

    // Mostra um alerta de agradecimento
    alert("Obrigado por se inscrever, sua ajuda é essencial para o Rio Grande do Sul! Entraremos em contato.");

    // Limpa os campos do formulário após o envio
    form.reset();
});
