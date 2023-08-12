export function getresult(calcnumber){
    let result ="";
    if(calcnumber == "invalid"){
        result ="it is invalid";
    }
    else {
        result= `the result is:${calcnumber}`;
    }
    return result;
}
