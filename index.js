let score = 0;

const holes=$('.hole');
const playerScore=$('#score')[0];

const flashRandomMole=()=>{
    const randInt=Math.floor(Math.random()*holes.length);
    const randomHole=$(holes[randInt]);
    randomHole.toggleClass('mole');
};

setInterval(flashRandomMole,500);

$('.hole').click(function(){
    if($(this).hasClass('hole mole')){
        score++;
        playerScore.innerText=score;
    };
});