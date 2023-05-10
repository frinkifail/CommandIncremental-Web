function e(element) {return document.getElementById(element);};
function pagechange() {
    e("root").innerHTML = '<h2 class=busy>Busy loading: ' + data.current_page + "!</h2>";
    switch (data.current_page) {
        case "home":
            e('root').innerHTML = `
<h1> hai welcome to home </h1>
<div class=ls-container>
    <p class=i-display>Coins: <span id=coins-display>Loading</span></p>
</div>
<div class=ls-container id=d-container>
    <p class=i-display>Diamonds: <span id=diamonds-display>Loading</span></p>
</div>
            `;
            break;
        case "shop":
            e('root').innerHTML = `
<h1>hai welcome to shop</h1>
            `;
            break;
        default:
            e('root').innerHTML = "<h2 class=busy>Sorry, couldn't load: Page doesn't exist</h2>";
    }
}