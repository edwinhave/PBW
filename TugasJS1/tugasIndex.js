// Soal 1
function question1(angka) {
  if(angka < 0){
  return 'Nope!';
}
  if(angka > 20){
  return 'Kebanyakan';
}

  let kata = '';
  for(let i=0;i < angka; i++){
    kata +='$';
  }
  return kata;
}

// Soal 2
function question2(a,b) {
if(a>b){
console.log(`${a} lebih besar dari ${b}`);
} else if (a<b){
  console.log(`${a} lebih kecil dari ${b}`);
} else {
  console.log(`${a} sama dengan ${b}`)
}
}
console.log(question2(5,8))
console.log(question2(9,2));
console.log(question2(3,3));

// Soal 3
function question3(radius) {
  if (radius <= 0) {
    return "Radius invalid!";
  }

  let luas = Math.PI * radius * radius;
  return luas.toFixed(2);
}
console.log(question3(8));
console.log(question3(12));
console.log(question3(-100));

// Soal 4
function question4(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      return "Negative!";
    }
  }

  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  let rataRata = total / array.length;
  return Math.round(rataRata);
}
console.log(question4([4, 5, 6, 7, 8]));
console.log(question4([100, 200, 300, 400, 500]));
console.log(question4([-1,4,7,11]));


// Soal 5
function question5(arr, percent) {
  if (!percent) {
    return arr;
  }

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0 || arr[i] > 100) {
      return "Nilai invalid!";
    }
  }

  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var newValue = Math.round((arr[i] * percent) * 10) / 10;
    newArr.push(newValue);
  }

  return newArr;
}
console.log(question5([75, 75, 90], 1.05));
console.log(question5([-50, 100,-20], 1));
console.log(question5([0, 100, 0], 1));
console.log(question5([90, 40, 30]));

// Soal 6
function question6(piramid) {
  if (piramid <= 0) {
    console.log("Invalid!");
  } else if (piramid > 100) {
    console.log("Kebanyakan!");
  } else {
    for (let i = 1; i <= piramid; i++) {
      let row = "";
      for (let j = 1; j <= piramid - i; j++) {
        row += " ";
      }
      for (let k = 1; k <= i; k++) {
        row += "$ ";
      }
      console.log(row);
    }
  }
}
console.log(question6(4));
console.log(question6(7));
console.log(question6(0));
console.log(question6(1000));

// Soal 7
function question7(kue) {
  if (kue.length < 2) {
    return "Array invalid!";
  }
//Tidak tahu lagi pak.... T_T

// Soal 8
function question8(pat) {
  console.log(`Input string: ${pat}`);
}

console.log(question8("saya sedang belajar javascript!"));
console.log(question8("SAYA SEDANG MENGERJAKAN TUGAS"));

// Soal 9
function question9() {

}

// Soal 10
function question10() {

}

// Uji function dengan console.log() di bawah ini
// console.log(question1(5));


// Bagian di bawah ini jangan dihapus!
module.exports = {
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10
};