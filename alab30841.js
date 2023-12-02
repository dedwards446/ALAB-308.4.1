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

