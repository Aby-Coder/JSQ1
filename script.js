
// 1.Write a logic to reverse string of yourname
// John Doe
// eoD nhoJ

function reverseString(str) {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedString += str.charAt(i);
    }
    return reversedString;
  }
  
  // Example usage:
  let name = "John Doe";
  let reversedName = reverseString(name);
  console.log(reversedName);