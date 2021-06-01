// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// // Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// // describe the function name 
describe("removeAndShuffle", () => {

  // the test method describes in plain words what the function should be doing.
  test("remove the first value in the array and shuffle the rest of the array values", () => {

    //the expect checks the expected output of the function return is what is actually returned. 
    expect(removeAndShuffle(colors1)).toEqual(["yellow", "blue", "pink", "green"])
    expect(removeAndShuffle(colors2)).toEqual(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"])
  })
})

// b) Create the function that makes the test pass.
// Need to declare a function
const removeAndShuffle = (array) => {
  // first need to shift the first element out of the array
  array.shift()
  // create a random index by using the Math.random function to sort new random array
  array.sort(() => Math.random() - 0.5)
    return array 
} 
console.log(removeAndShuffle(colors1));


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

// describe the function name 
describe("minMax", () => {

//   // the test method describes in plain words what the function should be doing.
  test("filter the array to return the minnimum and maximum number of that array", () => {

//     //the expect checks the expected output of the function return is what is actually returned. 
    expect(minMax(nums1)).toEqual([-8, 90])
    expect(minMax(nums2)).toEqual([-59, 109])
  })
})

// b) Create the function that makes the test pass.

// Iterate over array to return only min and max values
// use a ternary operator to evaluate each index to evaluate for min/max
// return min max results

const minMax = (array) => {
  let min = array [0], max = array [0]
  for ( let i = 0; i < array.length; i++){
    let value = array [i]
    min = (value < min)? value : min
    max = (value > max)? value : max
  }
  return [min, max]
}

console.log(minMax(nums1));
console.log(minMax(nums2));




// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe("noDuplicates", () => {

//   // the test method describes in plain words what the function should be doing.
  test("take two arrays as arguments and return one array with no duplicate values", () => {

//     //the expect checks the expected output of the function return is what is actually returned. 
    expect(noDuplicates(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
  })
})

// b) Create the function that makes the test pass.

// Need to merge both arrays into one array via concat() method.
// set values to new array but only include unique values.
// can use the Set method to create a new array with no repeating values.

const noDuplicates = (arr1, arr2) => {
  let arr3 = arr1.concat(arr2);
    arr3 = [...new Set([...arr1, ...arr2])]
    return arr3
}

console.log(noDuplicates(testArray1, testArray2));