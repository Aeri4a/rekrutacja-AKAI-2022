// 1. odwróć liczbę
// np dla 12345, funkcja powinna zwrócić 54321
function reverseNumber(x) {
  // uzupełnij tutaj

  let rev = [];
  let numb = '';

  while(x>0) {
    rev.push(x%10);
    x = parseInt(x/10);
  }
  
  for(i=0; i<rev.length; i++) {
    numb += rev[i];
  }

  return numb;
}

console.log("1.", reverseNumber(12345));

// 2. doodaj do siebie wszystkie wartości z tablicy, które są parzyste
// dla tablicy tab powinniśmy otrzymać 2 + 4 + 6 + 8 = 20
const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function addEven(array) {
  // uzupełnij tutaj

  let sum = 0;

  for(i=0; i<array.length; i++)
    if (array[i] % 2 == 0) sum += array[i];

  return sum;
}

console.log("2.", addEven(tab));
