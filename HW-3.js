// 1

let hamburger = 4;
let fries = 1;
if(hamburger >= 4 && fries >= 1){
    console.log("Ми поїли")
} else {
    console.log("Ми йдемо в інше кафе")
}



// 2

let price = 1500;
if(price >= 1000 && price <= 1900){
    console.log(price)
} else {
    console.log("Ціна не відповідає вимогам")
}



// 3.1

let price1 = 1500;
if(price1 <= 1000 && price1 >= 1900){
    console.log(price)
} else {
    console.log("Ціна не відповідає вимогам")
}



// 3.2

let price2 = 1500;
if(!price2 >= 1000 && !price2 <= 1900){
    console.log(price)
} else {
    console.log("Ціна не відповідає вимогам")
}



// 4

let season = 1;
if(season = 1){
    console.log("Весна")
} else if (season = 2){
    console.log("Літо")
} else if (season = 3){
    console.log("Осінь")
} else if (season = 4){
    console.log("Зима")
}



// 5

let a = 11;
let b = 9;
let c = 10;

if(a > b && a < c || a < b && a > c){
    console.log(a)
} else if(b > a && b < c || b < a && b > c){
    console.log(b)
} else if(c > a && c < b || c < a && c > b){
    console.log(c)
}



// 6

let day = 7;
switch(day){
    case 1:
        console.log("Понеділок");
        break;
    case 2:
        console.log("Вівторок");
        break;
    case 3:
        console.log("Середа");
        break;
    case 4:
        console.log("Четвер");
        break;
    case 5:
        console.log("П'ятниця");
        break;
    case 6:
        console.log("Субота");
        break;
    case 7:
        console.log("Неділя");
        break;
}



// 7

let num2 = 30;
let num3 = 6;
let d = "*";
switch(d){
    case "+":
        console.log(num2 + num3);
        break;
    case "-":
        console.log(num2 - num3);
        break;
    case "/":
        console.log(num2 / num3);
        break;
    case "*":
        console.log(num2 * num3);
        break;
}



// 8

let sometext = "Hello world!";
sometext = sometext.replace(/[aeiouy]/gi, '');
console.log(sometext);



// 9

let meter = 2598;
let kilometer = meter / 1000;
let lastMeterDigit = meter % 10;
if(lastMeterDigit == 1){
    console.log(meter + " метр це " + kilometer + " кілометра.")
} else if (lastMeterDigit >= 2 && lastMeterDigit <= 4){
    console.log(meter + " метри це " + kilometer + " кілометра.")
} else if (lastMeterDigit == 0 || lastMeterDigit >= 5 && lastMeterDigit <= 9){
    console.log(meter + " метрів це " + kilometer + " кілометра.")
}