let container = document.getElementById('dieContainer');
let generateButton = document.getElementById('generate_die');
let rollButton = document.getElementById('roll_dice');
document.body.appendChild(container);
let dieArray = [];

class Die {
    constructor() {
        this.dieDiv = document.createElement('div');
        this.innerDiv = document.createElement('div');
        this.roll();
        this.dieDiv.classList.add('dieDiv');
        this.innerDiv.classList.add('innerDiv');
        this.dieDiv.appendChild(this.innerDiv);
        container.appendChild(this.dieDiv);
        dieArray.push(this);
    }

    roll() {
        this.innerDiv.innerHTML = Math.floor((Math.random() * 6) + 1);
    }
}

generateButton.addEventListener('click', function() {
    let die = new Die();
    
});

rollButton.addEventListener('click', function() {
    dieArray.forEach((dice) => dice.roll());
    
})