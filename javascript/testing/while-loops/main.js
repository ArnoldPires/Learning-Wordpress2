var count = 1;
while(count < 7) {
  console.log("count is: " + count);
  count++;
}
//Count is: 0
//Count is: 1
//Count is: 2
//Count is: 3
//Count is: 4
//Count is: 5
//Count is: 6
var count = 5;
while(count <= 20) {
  console.log("count is: " + count);
  count++;
}
//Count is: 0
//Count is: 1
//Count is: 2
//Count is: 3
//Count is: 4
//Count is: 5
//Count is: 6
//Count is: 7
//Count is: 8
//Count is: 9
//Count is: 10
//Count is: 11
//Count is: 12
//Count is: 13 etc

//string we're looping over:
var str = "hello";
//first characer is at index 0
var count = 0;
while(count < str.length) {
  console.log(str[count]);
  count++;
}

let countByTwo = 2;
while(countByTwo <= 14) {
  console.log("count is:" + countByTwo);
  countByTwo+=2;
}

let oddNumbers = 1;
while(oddNumbers <= 11) {
console.log("these are odd numbers " + oddNumbers);
oddNumbers += 2;
}

let num = 1
while(num <= 20) {
  if(num % 4 === 0) {
    console.log(num);
  }
  num++;
}
