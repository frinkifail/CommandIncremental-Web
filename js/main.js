function abbreviateNumber(number) {
    const SI_PREFIXES = ["", "K", "M", "G", "T", "P", "E", "Z", "Y", "X", "W", "V", "U", "S", "R", "Q", "P", "O", "N", "M", "L", "K", "J", "I", "H", "G", "F", "E", "D", "C", "B", "A", "Za", "Yi", "Xa", "Wi", "Vi", "Ui", "Ti", "Si", "Ri", "Qi", "Pi", "Oc", "No", "Mo", "Lo", "Ko", "Jo", "Io", "Ho", "Go", "Fo", "Eo", "Do", "Co", "Bo", "Ao", "Zi", "Yu", "Xo", "Wu", "Vu", "Uu", "Tu", "Su", "Ru", "Qu", "Pu", "Ot", "Nt", "Mt", "Lt", "Kt", "Jt", "It", "Ht", "Gt", "Ft", "Et", "Dt", "Ct", "Bt", "At", "Zy", "Yy", "Xy", "Wy", "Vy", "Uy", "Ty", "Sy", "Ry", "Qy", "Py", "Oy", "Ny", "My", "Ly", "Ky"];
    const base = Math.floor(Math.log10(Math.abs(number)) / 3);
    const suffix = SI_PREFIXES[base];
    const shortNumber = (number / Math.pow(10, base * 3)).toPrecision(3);

    return `${shortNumber}${suffix}`;
}


const dev_add_interval = setInterval(function () {
    data.coins += 10;
}, 200)
const update_interval = setInterval(function () {
    if (e('coins-display')) {
        e('coins-display').textContent = abbreviateNumber(data.coins);
    }
}, 50)