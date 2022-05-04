const frog = document.getElementById('frog');
const tronco = document.getElementById('tronco');
const score = document.getElementById('score');


/* Função que adiciona e remove a animação de pulo após 500ms*/
function jump() {
    frog.classList.add('jump-animation');
    setTimeout(() => {
        frog.classList.remove('jump-animation');
    }, 500);
}

/*Função que impede o personagem de aceitar comandos de pulo se a animação ainda estiver ocorrendo*/
document.addEventListener('keypress', () => {
    if (!frog.classList.contains('jump-animation')) {
        jump();
    }
});

/*game loop*/

setInterval(() => {
    score.innerText++;/*Após cada gameloop, o score é atualizado na tela*/
    const frogTop = parseInt(window.getComputedStyle(frog)
        .getPropertyValue('top'));
    const troncoLeft = parseInt(window.getComputedStyle(tronco)
        .getPropertyValue('left'));

    if (troncoLeft < 0) { /*Se tronco tiver um valor negativo, não aparecerá mais na tela do usuário*/
        tronco.style.display = 'none';
    } else {
        tronco.style.display = '';/*Caso o valor seja positiva, 'none' é retirado do display e o tronco volta a aaparecer*/
    }

    if (troncoLeft < 50 && troncoLeft > 0 && frogTop > 150) {/*Checa se há colisão do tronco com o personagem*/
        alert("Você conseguiu uma pontuação total de: " + score.innerText + "\n\nJogar novamente?");
        location.reload();
    }

}, 50);