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
function toggleMusica() {
        const musica = document.getElementById("musica-cidade");
        const icone = document.getElementById("icone-audio");

        if (musica.paused) {
            musica.play().then(() => {
                icone.innerText = "⏸️"; // Muda para o ícone de pause quando começa a tocar
            }).catch(error => {
                console.log("O navegador barrou o autoplay. Clique novamente para reproduzir.", error);
                alert("Clique novamente no botão para iniciar a música!");
            });
        } else {
            musica.pause();
            icone.innerText = "🎵"; // Volta para a nota musical ao pausar
        }
    }



// Função para abrir e fechar o menu de 3 pontinhos
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}
// Função para rolar a página suavemente até o topo
function voltarAoTopo() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' /* Faz a rolagem ser suave e elegante */
    });
}
// Sensor para mostrar ou esconder o botão de voltar ao topo
window.addEventListener('scroll', function() {
    const botaoTopo = document.getElementById('btn-topo');
    
    // Se rolou mais de 300 pixels para baixo, mostra o botão
    if (window.scrollY > 300) {
        botaoTopo.classList.add('show');
    } else {
        botaoTopo.classList.remove('show');
    }
});
/* Galeria da Polícia Federal: abre a foto em tela cheia ao clicar.
   Este arquivo é independente do script.js e não altera nada dele. */
(function () {
    'use strict';

    // Fecha o menu de 3 pontinhos depois de clicar em um link (ex.: "Galeria")
    var menu = document.getElementById('nav-menu');
    if (menu) {
        menu.addEventListener('click', function (e) {
            if (e.target.tagName === 'A') {
                menu.classList.remove('active');
            }
        });
    }

    var itens = Array.prototype.slice.call(document.querySelectorAll('.galeria-item'));
    var lightbox = document.getElementById('lightbox');
    if (!itens.length || !lightbox) return;

    var imagem = document.getElementById('lb-img');
    var legenda = document.getElementById('lb-legenda');
    var contador = document.getElementById('lb-contador');
    var btnFechar = lightbox.querySelector('.lb-fechar');
    var btnAnterior = lightbox.querySelector('.lb-anterior');
    var btnProximo = lightbox.querySelector('.lb-proximo');

    var atual = 0;
    var focoAnterior = null;

    function mostrar(indice) {
        // Volta para a primeira/última foto ao passar do limite
        atual = (indice + itens.length) % itens.length;
        var miniatura = itens[atual].querySelector('img');
        imagem.src = miniatura.getAttribute('src');
        imagem.alt = miniatura.getAttribute('alt') || '';
        legenda.textContent = itens[atual].getAttribute('data-legenda') || '';
        contador.textContent = (atual + 1) + ' / ' + itens.length;
    }

    function abrir(indice) {
        focoAnterior = document.activeElement;
        mostrar(indice);
        lightbox.classList.add('aberto');
        document.body.classList.add('lb-aberto');
        btnFechar.focus();
    }

    function fechar() {
        lightbox.classList.remove('aberto');
        document.body.classList.remove('lb-aberto');
        imagem.removeAttribute('src');
        if (focoAnterior) focoAnterior.focus();
    }

    function estaAberto() {
        return lightbox.classList.contains('aberto');
    }

    itens.forEach(function (item, indice) {
        item.addEventListener('click', function () {
            abrir(indice);
        });
    });

    btnFechar.addEventListener('click', fechar);
    btnAnterior.addEventListener('click', function () { mostrar(atual - 1); });
    btnProximo.addEventListener('click', function () { mostrar(atual + 1); });

    // Clicar no fundo escuro fecha o visualizador
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) fechar();
    });

    // Teclado: Esc fecha, setas trocam de foto, Tab fica preso dentro do visualizador
    document.addEventListener('keydown', function (e) {
        if (!estaAberto()) return;

        if (e.key === 'Escape') {
            fechar();
        } else if (e.key === 'ArrowLeft') {
            mostrar(atual - 1);
        } else if (e.key === 'ArrowRight') {
            mostrar(atual + 1);
        } else if (e.key === 'Tab') {
            var botoes = [btnFechar, btnAnterior, btnProximo];
            var primeiro = botoes[0];
            var ultimo = botoes[botoes.length - 1];
            if (e.shiftKey && document.activeElement === primeiro) {
                e.preventDefault();
                ultimo.focus();
            } else if (!e.shiftKey && document.activeElement === ultimo) {
                e.preventDefault();
                primeiro.focus();
            }
        }
    });

    // Celular: deslizar o dedo para os lados troca de foto
    var inicioX = null;
    lightbox.addEventListener('touchstart', function (e) {
        inicioX = e.changedTouches[0].clientX;
    }, { passive: true });

    lightbox.addEventListener('touchend', function (e) {
        if (inicioX === null) return;
        var diferenca = e.changedTouches[0].clientX - inicioX;
        inicioX = null;
        if (Math.abs(diferenca) < 50) return;
        mostrar(diferenca < 0 ? atual + 1 : atual - 1);
    }, { passive: true });
})();
