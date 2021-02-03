const first = 0; //2;
const second = 'false';//"2";
if(first == second){
    console.log("true"); //double equal doesn't check data types only values convert in same types
}
if(first === second){ //triple equal compare values and types
    console.log("true");
}
else{
    console.log("false");
}