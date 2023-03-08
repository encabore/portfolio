// var country = prompt('What is the name of your country?');
// var state = prompt('What is the name of your state?');
// var city = prompt('What is the name of your city?');
var country = 'United States';
var state = 'Michigan';
var city = 'Warren';

document.getElementById('desc').innerHTML =
    'I live in ' + city + ', ' + state + ', ' + country + ' in 2022.';

var population = 0;
var money = 0;
var soldiers = 0;

function adjustPopulation(action, population) {
    if (action == 'up') population += 5000;
    else if (action == 'down') population -= 5000;
    else population += 250;
    return population;
}
function adjustMoney(action, money) {
    if (action == 'earn') money += 100;
    else if (action = 'spend') money -= 100;
    else money += 10;
    return money;
}
function recruit(action, soldiers) {
    if(action == 'recruit') soldiers += 1000;
    else soldiers -= 5;
    return soldiers;
}

document.getElementById('details').innerHTML =
    '<b>Population</b>: ' + population +
    '<br><b>Money</b>: ' + money +
    '<br><b>Soldiers</b>: ' + soldiers;

var action = '';
while (action != 'stop') {
    action = prompt('What do you want to do?');
    population = adjustPopulation(action, population);
    money = adjustMoney(action, money);
    soldiers = recruit(action, soldiers);
    document.getElementById('details').innerHTML =
        ('<b>Population</b>: ' + population +
        '<br><b>Money</b>: ' + money +
        '<br><b>Soldiers</b>: ' + soldiers);
    console.log('Population: ' + population);
    console.log('Money: ' + money);
    console.log('Soldiers: ' + soldiers);
}