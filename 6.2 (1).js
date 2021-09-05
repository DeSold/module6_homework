//Задание 6.2 (1)
// В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:
// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
//При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
//На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.

function arrayAnalytics(){
    let even = 0;
    let odd = 0;
    let zero = 0;
    let str = 0;
    let nulls = 0;
    let NaNs = 0;
    let x;
    let arr = ["Hello", "world", "", x, 1, 2, 3, 4, 5, null, 6, 12, 24, 0];
    for(let i = 0; i < arr.length; i++){
        if(typeof (arr[i]) === "number" && arr[i] % 2 === 0 && arr[i] !== 0 && !isNaN(arr[i])){
            even += 1;
        }else if(typeof (arr[i]) === "number" && arr[i] % 2 !== 0 && arr[i] !== 0 && !isNaN(arr[i])){
            odd += 1;
        }else if(typeof (arr[i]) === "number" && arr[i] === 0){
            zero += 1;
        }else if(typeof (arr[i]) === "string"){
            str += 1;
        }else if(arr[i] === null){
            nulls += 1;
        }else if(isNaN(arr[i])){
            NaNs += 1;
        }
    }
    console.log("чётные - " + even);
    console.log("нечётные - " + odd);
    console.log("нулевые - " + zero);
    console.log("строк - " + str);
    console.log("Nulls - " + nulls);
    console.log("NaN - " + NaNs);
    };
    
    arrayAnalytics();