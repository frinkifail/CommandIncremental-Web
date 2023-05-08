function e(element) {return document.getElementById(element);};
function pagechange(page) {
    e("root").innerHTML = '<h2 class=busy>Busy loading: ' + page + "!</h2>";
    switch (page) {
        case "home":
            e('root').innerHTML = `
<h1> hai welcome to home </h1>
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