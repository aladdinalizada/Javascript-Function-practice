function fullName() {
  return "Aladdin Alizada";
}
function fullNameWWithParamter(firstName, lastName) {
  return firstName + " " + lastName;
}
function addNumbers(number1, number2) {
  return number1 + number2;
}
function areaOfRectangle(witdh, height) {
  return witdh * height;
}
function permeterOfRectangle(witdh, height) {
  return 2 * (witdh + height);
}
function VolumOfCircle(witdh, height, pride) {
  return witdh * height * pride;
}
let pi = 3.14;
function areaOfCircle(r) {
  return pi * (r * r);
}
function circumOfCircle(r) {
  return 2 * pi * r;
}
function closeness(kutle, hecm) {
  return kutle * hecm;
}
function convertTemperator(celci) {
  return 1.8 * celci + 32;
}
function bmicalculoator(boy, ceki) {
  let bmi;
  bmi = ceki / (boy * boy);
  // console.log(bmi);
  if (bmi < 18.5) {
    return "Az cekili";
  } else if (18.5 < bmi && bmi < 24.9) {
    return "Normal Ceki";
  } else if (25 < bmi && bmi < 29.9) {
    return "Artiq Ceki";
  } else if (30 < bmi) {
    return "Obez";
  }
}
function CheckSeason(ay) {
  if (ay == "Dekabr" || ay == "Yanvar" || ay == "Fevral") {
    return "Qis";
  } else if (ay == "Mart" || ay == "Aprel" || ay == "May") {
    return "Yaz";
  } else if (ay == "Iyun" || ay == "Iyul" || ay == "Avqust") {
    return "Yay";
  } else if (ay == "Sentyabr" || ay == "Oktyabr" || ay == "noyabr") {
    return "Payiz";
  }
}
function findMax(a, b, c) {
  return Math.max(a, b, c);
}
function printArray(arr) {
  // for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
  // }
  return arr.toString();
}
function reverseArray(arr) {
  let original_array = [1, 2, 3, 4];

  let reversed_array = [];
  for (let i = original_array.length - 1; i >= 0; i--) {
    reversed_array.push(original_array[i]);
  }
}
console.log("1- " + fullName());
console.log("2- " + fullNameWWithParamter("Aladdin", "Alizada"));
console.log("3- " + addNumbers(1, 2));
console.log("4- " + areaOfRectangle(20, 23));
console.log("5- " + permeterOfRectangle(10, 15));
console.log("6- " + VolumOfCircle(2, 3, 5));
console.log("7- " + areaOfCircle(3));
console.log("8- " + circumOfCircle(10));
console.log("9- " + closeness(30, 40));
console.log("10- " + convertTemperator(36));
console.log("11- " + bmicalculoator(1.81, 110));
console.log("12- " + CheckSeason("May"));
console.log("13- " + findMax(1, 2, 3));
console.log("14- " + printArray([5, 10, 81]));
console.log("15- " + reverseArray(1, 2, 3));
