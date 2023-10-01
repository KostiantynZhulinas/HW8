// function capitalizeStrings(strings) {
//     const capitalizedArray = [];
  
//     for (let i = 0; i < strings.length; i++) {
//       const word = strings[i];
//       const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//       capitalizedArray.push(capitalizedWord);
//     }
  
//     return capitalizedArray;
//   }
  
//   const words = ["apple", "banaNA", "kiWi", "ORANGE"];
//   console.log(capitalizeStrings(words));


// function findCommonElements(array1, array2) {
//     const commonElements = [];
  
//     for (const element of array1) {
//       if (array2.includes(element)) {
//         commonElements.push(element);
//       }
//     }
  
//     return commonElements;
//   }
  
//   const array1 = [1, 2, 3, 4, 5];
//   const array2 = [3, 4, 5, 6, 7];
  
//   console.log(findCommonElements(array1, array2));


function analyzeArray(numbers) {
    if (numbers.length === 0) {
      return {
        sum: 0,
        average: 0,
        min: undefined,
        max: undefined
      };
    }
  
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
  
    return {
      sum,
      average,
      min,
      max
    };
  }
  
  const numbers = [1, 2, 3, 4, 5];
  console.log(analyzeArray(numbers));
