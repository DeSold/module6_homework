// Задание 6.7 (4)
//Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.

let i = 0;
setInterval(function num(a,b){
    a += i;
    if(a <= b){
        console.log(a);
    }
    i++;
}, 1000, 5, 15);