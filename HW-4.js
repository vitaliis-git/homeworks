// 1

function fastFood (hamburger, fries){
    if(hamburger >= 4 && fries >= 1){
        console.log("Ми поїли")
    } else {
        console.log("Ми йдемо в інше кафе")
    }
}
fastFood(4, 1);



// 2

function price (price){
    if(price >= 1000 && price <= 1900){
        console.log(price)
    } else {
        console.log("Ціна не відповідає вимогам")
    }
}
price(1500);



// 3.1

function price1 (price1){
    if(price1 <= 1000 && price1 >= 1900){
        console.log(price)
    } else {
        console.log("Ціна не відповідає вимогам")
    }
}
price1(1500);



// 3.2

function price2 (price2){
    if(!price2 >= 1000 && !price2 <= 1900){
        console.log(price)
    } else {
        console.log("Ціна не відповідає вимогам")
    }
}
price2(1500);



// 4

function seasonOfYear (season){
    if(season = 1){
        console.log("Весна")
    } else if (season = 2){
        console.log("Літо")
    } else if (season = 3){
        console.log("Осінь")
    } else if (season = 4){
        console.log("Зима")
    }
}
seasonOfYear(1);



// 5

function biggestNumber (a, b, c){
    if(a > b && a < c || a < b && a > c){
        console.log(a)
    } else if(b > a && b < c || b < a && b > c){
        console.log(b)
    } else if(c > a && c < b || c < a && c > b){
        console.log(c)
    }
}
biggestNumber(11, 9, 10);



// 6

function dayNumber(day){
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
}
dayNumber(2);



// 7

function calculation (num2, num3, d){
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
}
calculation(9, 6, "+");



// 8

function deleteVowels (sometext){
    sometext = sometext.replace(/[aeiouy]/gi, '');
console.log(sometext);
}
deleteVowels("Hello world!!!");



// 9

function metersToKilometers(meter){
    let kilometer = meter / 1000;
    let lastMeterDigit = meter % 10;
    if(lastMeterDigit == 1){
        console.log(meter + " метр це " + kilometer + " кілометра.")
    } else if (lastMeterDigit >= 2 && lastMeterDigit <= 4){
        console.log(meter + " метри це " + kilometer + " кілометра.")
    } else if (lastMeterDigit == 0 || lastMeterDigit >= 5 && lastMeterDigit <= 9){
        console.log(meter + " метрів це " + kilometer + " кілометра.")
    }
}
metersToKilometers(31);