function pause(func, time) {
    return function() {
        console.log(`Функция выполнится с задержкой в ${time} сек.`);
        return setTimeout(func, time * 1000);
    }
}

function test() {
    console.log('start');
}

pause(test, 2)();