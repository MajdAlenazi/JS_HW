// Calculate area of a rectangle
console.log("-------------Calculate area of a rectangle-------------");

let length=23
let width=5
let result= length * width
console.log(`The area of the rectangle is:${result} `);

// The Temperature Converter
console.log("-------------The Temperature Converter-------------");
console.log("-------------Convert celsius to fahrenheit -------------")

let celsius=34
let Temperature= (celsius * 1.8) + 32 ;
console.log(`${celsius}°C is ${Temperature} °F `);


console.log("-------------Convert fahrenheit to celsius------------- ")
let fahrenheit=34
let result2= (fahrenheit - 32) /1.8;
console.log(`${fahrenheit}°F is ${result2} °C `);


console.log("-------------Convert hours to seconds------------- ")
let hours= 2;
let result3= (hours*60) * 60;
console.log(` ${hours} hours, The result = ${result3} sec`);

// Leap year
console.log("-------------Leap year-------------")
let year=1999;

    if((year%4==0 && year %100 !==0 )|| year %400==0 ){
    console.log(`The ${year}  is leap` );
    }else{
    console.log(`The ${year} is not leap`);
}


// Find the a number is present in given range
console.log("-------------Find the a number is present in given range-------------")
let start=11;
let end= 30 ;
let number= 15; 

if(number >= start && number <= end){
    console.log("True");

}else{
    console.log("False");
}

// Factorial numbers
console.log("-------------Factorial numbers-------------")

let fnum=1;
let z_num=0
if(z_num == 0){
    console.log(`The Factorial ${z_num} and the result is 1`);
}
for(let i= 1 ; i <= 9 ; i++){
    fnum*= i;
    console.log(`The Factorial ${i} and the result is ${fnum}`);

}







