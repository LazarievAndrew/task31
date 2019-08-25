// Глубокая заморозка

// Проблема заключается в том что Object.freeze работает только для первого уровня объекта,
//  то есть если свойством объекта будет другой объект то его заморозка не произойдет.

// Задача:

// Написать функцию deepFreeze которая будет делать глубокую заморозку объекта,
//  то есть будет решать проблему описанную выше. Функция должна делать тоже самое,
//  что и Object.freeze только и для вложенных объектов.

// В решении НЕ использовать Object.freeze!!!


function deepFreeze(obj){
        
    for (var key in obj) {

        if (typeof obj[key] === 'object'){

            deepFreeze(obj[key])
        };

        Object.defineProperty(obj, key, {writable: false});
        Object.defineProperty(obj, key, {configurable: false});   
    }
};

/////////////////////////////////////////////////////////////
// ПРОВЕРКА:

var man = {
    name : 'Andy',
    age : 43,
    body : {
        hand : 2,
        leg :2
    }
};

deepFreeze (man);


let x = Object.getOwnPropertyDescriptor(man, 'age');
console.log (x);

let xx = Object.getOwnPropertyDescriptor(man, 'name');
console.log (xx);

let xxx = Object.getOwnPropertyDescriptor(man, 'body');
console.log (xxx);

let y = Object.getOwnPropertyDescriptor(man.body, 'hand');

console.log (y);

let yy = Object.getOwnPropertyDescriptor(man.body, 'leg');

console.log (y);
////////////////////////////////////////////////////////////////