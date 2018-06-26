let container = document.getElementById('dieContainer');
let generateButton = document.getElementById('generate_die');
let rollButton = document.getElementById('roll_dice');
document.body.appendChild(container);
let dieArray = [];

class Die {
    constructor() {
        this.dieDiv = document.createElement('div');
        this.innerH4 = document.createElement('h4');
        this.roll();
        this.dieDiv.classList.add('dieDiv');
        this.innerH4.classList.add('innerH4');
        this.dieDiv.appendChild(this.innerH4);
        container.appendChild(this.dieDiv);
        dieArray.push(this);
    }

    roll() {
        this.innerH4.innerHTML = Math.floor((Math.random() * 6) + 1);
    }
}

generateButton.addEventListener('click', function() {
    let die = new Die();
    
});

rollButton.addEventListener('click', function() {
    dieArray.forEach((dice) => dice.roll());
    
})