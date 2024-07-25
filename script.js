const symbols = ['🍒', '🍋', '🍊', '🍉', '🍇', '🍓'];
let credits = 100;

document.getElementById('spinButton').addEventListener('click', spinReels);

function spinReels() {
    if (credits < 1) {
        alert('Not enough credits!');
        return;
    }

    credits--;
    updateCredits();

    document.getElementById('spinSound').play();

    const reel1 = getRandomSymbol();
    const reel2 = getRandomSymbol();
    const reel3 = getRandomSymbol();

    document.getElementById('reel1').textContent = reel1;
    document.getElementById('reel2').textContent = reel2;
    document.getElementById('reel3').textContent = reel3;

    checkWin(reel1, reel2, reel3);
}

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function checkWin(reel1, reel2, reel3) {
    if (reel1 === reel2 && reel2 === reel3) {
        const winAmount = 20;
        credits += winAmount;
        updateCredits();
        document.getElementById('winSound').play();
        alert(`You win ${winAmount} credits!`);
    }
}

function updateCredits() {
    document.getElementById('credits').textContent = `Credits: ${credits}`;
}
