// Função simulando o clique para entrar no servidor
function conectarServidor() {
    alert("Iniciando o FiveM... Certifique-se de que o seu GTA V está aberto!");
    // Link padrão do FiveM para testes
    window.location.href = "https://fivem.net"; 
}

// Lógica para simular o número de players alterando em tempo real
setInterval(() => {
    const contadorElemento = document.getElementById('contador');
    let jogadoresAtuais = parseInt(contadorElemento.innerText);
    
    // Sorteia se entra ou sai alguém para dar efeito de servidor ativo
    const alteracao = Math.floor(Math.random() * 3) - 1; // Gera -1, 0 ou 1
    
    contadorElemento.innerText = jogadoresAtuais + alteracao;
}, 4000); // Executa a cada 4 segundos

// Função para simular a escolha do VIP
function comprarVip(nomeVip) {
    alert("Você selecionou o " + nomeVip + "! Redirecionando para o checkout do Paraíso SP...");
}
