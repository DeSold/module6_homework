// Задание 6.5 (3)
    // Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
    // Выведите в консоль результат.

    function value(x1){
        return function secondValue(x2){
            return console.log(x1+x2);
        }
    }
    
    value(5)(4);