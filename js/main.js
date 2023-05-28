function abbreviateNumber(number) {
    const SI_PREFIXES = ["", "K", 'M', 'B', 't', 'q', 'Q', 's', 'S', 'o', 'n', 'd', 'U', 'D', 'T', 'Qt', 'Qd', 'Sd', 'St', 'O', 'N', 'v', 'c'];
    const base = Math.floor(Math.log10(Math.abs(number)) / 3);
    const suffix = SI_PREFIXES[base];
    const shortNumber = (number / Math.pow(10, base * 3)).toPrecision(3);

    return `${shortNumber}${suffix}`;
}


const dev_add_interval = setInterval(function () {
    data.coins += 10;
    data.diamonds += 1;
}, 200)
const update_interval = setInterval(function () {
    if (e('coins-display')) {
        e('coins-display').textContent = abbreviateNumber(data.coins);
    } if (e('diamonds-display')) {
        e('diamonds-display').textContent = abbreviateNumber(data.diamonds);
    }
}, 50)
const s = {};
e('__nav-home').onclick = () => { data.current_page = 'home'; pagechange(); };
e('__nav-shop').onclick = () => { data.current_page = 'shop'; pagechange(); };