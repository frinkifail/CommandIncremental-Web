function e(element) {return document.getElementById(element);};
function pagechange() {
    e("root").innerHTML = '<h2 class=busy>Busy loading: ' + data.current_page + "!</h2>";
    switch (data.current_page) {
        case "home":
            e('root').innerHTML = `
<h1> hai welcome to home </h1>
<div id="coin-container">
    <p id=coins-display>Loading</p>
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