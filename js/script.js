
/* LOGICA DE PULO */

/* pegar o elemento da imagem do html, para adcionar uma classe */
const pikachu = document.querySelector('.pikachu');
const pokebola = document.querySelector('.pokebola');

/* a função pulo chama a classe pulo. */
const pulo = () => {
    pikachu.classList.add('pulo');
    
    /*setTimeout (função, tempo)*/
    setTimeout(() =>{

        pikachu.classList.remove('pulo');

    }, 550);
} 

/*loop para verificar se o pikachu encontou na pokebola*/
/*setInterval (função, tempo)*/
const loop = setInterval(() => {

    const pokebolaPosicao = pokebola.offsetLeft;
    const pikachuPosicao = +window.getComputedStyle(pikachu).bottom.replace('px','');

    console.log(pikachuPosicao);

    if (pokebolaPosicao <= 150 && pokebolaPosicao > 0 && pikachuPosicao < 85){    

        pokebola.style.animation = 'none';
        pokebola.style.left = `${pokebolaPosicao}px`;

        pikachu.style.animation = 'none';
        pikachu.style.left = `${pikachuPosicao}px`;

        pikachu.src = './imagens/Personagens/pikachuSad.png';
        pikachu.style.width = '80px'
        pikachu.style.marginLeft = '100px'

    } 

},20);

/* ao clicar em qualquer tecla, chama a função pulo */
document.addEventListener('keydown', pulo);