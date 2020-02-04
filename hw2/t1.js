function getPassword (l) {
    let password = '';
    let symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()_+=";
    let arr = symbols.split('');
    for (let i = 0; i < l; i++) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        password += arr[randomIndex];
    }
    return password;
}

function* genPassword(l) {
    yield getPassword(l);
}

console.log(genPassword(5).next().value);
console.log(genPassword(7).next().value); 
console.log(genPassword(9).next().value);