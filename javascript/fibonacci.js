function fibonacci(num) {
  let arr = [0, 1];


  for (let i = 2; i <= num; i++) {
    let newNum = (arr[i - 1] + arr[i - 2])
    console.log(newNum)

    arr.push(newNum)

  }

  return arr[num]

}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
