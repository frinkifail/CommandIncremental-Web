// Set the maximum number of coins
const MAX_COINS = 20;

// Function to create a new coin element
function createCoin() {
    // Check if the maximum number of coins has been reached
    if (document.querySelectorAll('.coin').length >= MAX_COINS) {
        return;
    }
    // Create a new coin element
    let coin = document.createElement('div');
    coin.classList.add('coin'); // Add the 'coin' class
    coin.style.position = 'absolute';
    coin.style.left = Math.random() * window.innerWidth + 'px';
    coin.style.top = Math.random() * window.innerHeight + 'px';
    coin.onclick = function () {
        data.coins += 50;
        coin.remove(); // Remove the coin element after it's clicked
    };
    document.body.appendChild(coin);
}

// Call the createCoin function every 5 seconds
setInterval(createCoin, 5000);
