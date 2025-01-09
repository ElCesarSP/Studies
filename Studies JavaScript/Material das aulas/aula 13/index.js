let varA = 'A'; // B
let varB = 'B '; // C
let varC = 'C'; // A

// [varA, varB, varC] = [varB, varA, varC ] // B A C
// [varB, varC, varA] = [varC, varB, varA ] // A C B
// [varC, varA, varB] = [varA, varC, varB ] // C B A
// [varA, varB, varC] = [varB, varC, varA ] // B C A

console.log(varA, varB, varC);