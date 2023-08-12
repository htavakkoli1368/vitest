
export function add(numbers){
    let sum =0;
    for (const number of numbers) {
        sum += number;
    }
    return sum;
}
export function multiply(numbers){
    let times =0;
    for (const number of numbers) {
        times += number;
    }
    return times;
}
export function minus(a,b){    
    return a-b;
}
export function divide(a,b){
     
    return a/b;
}