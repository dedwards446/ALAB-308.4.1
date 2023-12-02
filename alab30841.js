/**
 * Part 3
 */

/** 
 * Loop through the characters of a given CSV string.
Store each “cell” of data in a variable.
When you encounter a comma, move to the next cell.
When you encounter the “\r\n” sequence, move to the next “row.”
Log each row of data.
You do not need to format the data, the following works well.
console.log(cell1, cell2, cell3, cell4);
You can make the following assumptions:
There will only be 4 cells per row.
There will be no escaped characters other than “\n”.
*/
let csvString = ("ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26")

 let word = "";
 let Cell1 = "";
 let Cell2 = "";
 let Cell3 = "";
 let Cell4 = "";
 for (let i = 0; i <= csvString.length; i++) {
   if (csvString[i] === "\n" || i === csvString.length) {
     Cell4 = word;
     console.log(Cell1, Cell2, Cell3, Cell4);
     word = "";
     Cell1 = "";
     Cell2 = "";
     Cell3 = "";
     Cell4 = "";
     continue;
   }
   if (csvString[i] != ",") {
     word += csvString[i];
   } else if (Cell1 === "") {
     Cell1 = word;
     word = "";
     continue;
   } else if (Cell2 === "") {
     Cell2 = word;
     word = "";
     continue;
   } else if (Cell3 === "") {
     Cell3 = word;
     word = "";
     continue;
   }
 }




//////////// ALAB 308.4.1
///////// Part 1
////////// Refactoring Code


 // Split the CSV string into rows based on newline characters.
let rows = csvString.split('\n');
for (let i = 0; i < rows.length; i++) {
  // Split the current row into individual elements (id, name, occupation, age)
 // based on the comma delimiter and assign them to respective variables.
 let [cell1, cell2, cell3, cell4] = rows[i].split(',');
    console.log(cell1, cell2, cell3, cell4);
}


//////////// ALAB 308.4.1
///////// Part 2
////////// Expanding Functionality

let lines = csvString.split('\n');
let colNum = lines[0].split(',').length;
let twoD = [];
for(let line of lines){
    let row = line.split(',');
    if(row.length === colNum)
    twoD.push(row);
}
console.log(twoD);

//////////// ALAB 308.4.1
///////// Part 3
//////////  Transforming Data

//using const map1 = array1.map((x) => x * 2);
let headers = lines[0].split(',');
let result = [];
for(let i =1; i<lines.length;i++){
    let values = lines[i].split(',');
    let dataObj ={}
for(let j=0; j< headers.length;j++){
    dataObj[headers[j]]= values[j];
}
    result.push(dataObj)
}
console.log(result);


//////////// ALAB 308.4.1
///////// Part 4
////////// Sorting and Manipulating Data
let header = lines[0].split(',').map(header => header.toLowerCase());;
for(let i =1; i<lines.length;i++){
    let values = lines[i].split(',');
    let dataObj ={}
for(let j=0; j< header.length;j++){
    dataObj[header[j]]= values[j];
}
    result.push(dataObj)
}
console.log(result.pop());
console.log('After pop: ',result);
console.log(result.splice(1, 0,{ id: '48', name: 'Barry', occupation: 'Runner', age: '25' }))
console.log('After splice: ',result);
console.log(result.push({ id: '7', name: 'Bilbo', occupation: 'None', age: '111' }));
console.log('After push: ',result);
let totalAge = 0;
for(let i=0;i<result.length;i++){
    totalAge +=parseInt(result[i].age);
    console.log('total ages: ',totalAge , result[i].age)
}
let avrageAge = totalAge/result.length
console.log("avrageAge: ",Math.round(avrageAge))

//////////// ALAB 308.4.1
///////// Part 5
////////// Full Circle 

//Take an array of numbers and return the sum.
function sumArray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum
}
let arr = [2,3,4,5,8];
let results =  sumArray(arr)
console.log(result)
function sumArray1(num){
    let sum=0;
    let i =0;
    while(i<num.length){
        sum +=num[i];
        i++;
    }
    return sum;
}
let ArrNumbers = [2,3,4,5,8,9];
let total =  sumArray1(ArrNumbers)
console.log(total)
function sumArray2(numbers){
    let total =0;
    for(let number of numbers){
        total +=number
    }
    return total
}
let arrayNum = [2,3,4,5,8,10];
let sum =  sumArray2(arrayNum)
console.log(sum)
function sumArray3(arr){
    let sum=0;
    arr.array.forEach(element => {
        sum +=element;
    });
    return sum;
}
let arrayNum1 = [2,3,4,5,8,10,15];
let sum1 =  sumArray2(arrayNum1)
console.log(sum1)
//Take an array of numbers and return the average.
function arraySumAverage(numbers){
    let total =0;
    numbers.forEach(element=>{
        total +=element;
    })
    return numbers.length ===0 ? 0 : total /numbers.length;
}
let arrayNum2 = [2,3,4,5,8,10,15];
let average =  arraySumAverage(arrayNum2)
console.log(average)
//Take an array of strings and return the longest string.
function findLongestString(strings) {
    let longestString = '';
    strings.forEach(string => {
        if (string.length > longestString.length) {
            longestString = string;
        }
    });
    return longestString;
}
let strArray = ['hello', 'wonderful', 'cool', 'hi', 'bye'];
let longestString = findLongestString(strArray);
console.log('Longest String:', longestString);