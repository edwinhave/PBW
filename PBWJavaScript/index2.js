//📢ARRAY
const arr = [1,4,6,8,10];
console.log(arr);

// 📢const arr2 = [1,4,6,8,10];
// console.log(arr2[2]);

//📢 const arr3 = [];
// console.log(arr3);

// //📢NULL ARRAY
// const arr4 = null;
// console.log(arr4);

// // 📢ARRAY WAJIB MENGGUNAKAN VARIABEL CONSTANTA
// // const arr5 =[];

// //METHOD PUSH
// arr.push(13,14,55,44);
// console.log(arr);


// const arr6 = [];
// arr6[arr6.length] = 20;
// arr6[arr6.length] = 32;
// console.log(arr6);


// //ARRAY POP HANYA UNTUK MENGELUARKAN ELEMENT ARRAY TERAKHIR
// const arr7 = [2,3,9,6,6,5,3,4,4];

// console.log(arr7.pop());
// console.log(arr7);

// //ARRAY SLICE
// console.log(arr7.slice(1));

// //ARRAY SPILCE
// console.log(arr7.splice(4,2));
// console.log(arr7.splice(1,1,10));//(URUTAN ARRAY KE BERAPA, BERAPA DATA DI ARRAY MAU DI EDIT, DATA BARU, DST)


// //LOOPING TANPA ARRAY
// arr.forEach((element) =>{
//     console.log(element ** 3)
// })

// console.log(arr);

// //USING ARRAY MAP
// const newArr = arr.map((element)=> {
//     return element ** 2;
// });

// //ATAU
// //const newArr = arr.map((element)=> element ** 2);


// console.log(newArr);


//MENCARI SALAH SATU ELEMENT DI ARRAY KITA

// //⬇️MENCARI ELEMENT YANG MEMENUHI KONDISI, HANYA 1 DAN GAK BISA LEBIH
// console.log(arr.find((element)=> element % 3 == 0));

// //MENGEMBALIKAN SEMUA KONDISI BERAPAPUN
// console.log(arr.filter((element)=> element % 3 == 0));


// let a = null;

// //KALAU A TIDAK ADA NULL, MAKA VALUENYA TAMPILKAN YANG DI KANAN
// console.log(a ?? 'gak ada cok');

// //KALAU DIKIRI ADA VALUENYA MAKA TAMPILKAN YANG DI KANAN
// console.log(a && 'gak ada cok');

// console.log(a || 'gak ada cok')


// function fetchData(){
//     return 'Hehe'
// }

// const getData = ()=> {
//     return'Hoho'
// }

// console.log(fetchData());
// console.log(getData());



// //OOP
// const human = {
//     nama: 'budi',
//     umur: 22,
//     alamat: 'Rahayu',
//     anak:[
//         {
//             nama:'Ani',
//             umur:2
//         },
//         {
//             nama:'Ina',
//             umur:3
//         }
//     ]
// }

// console.log(human.nama);
// console.log(human.anak.umur);

class Human {
    constructor(nama,umur){
        this._nama = nama;
        this._umur = umur;
    }

    sayHi() {
        console.log('halo')
    }
}

const human1 =  new Human('Budi', 50);
console.log(human1._nama);
human1.sayHi();


class Child extends Human{
    study(){
        console.log('I will study')
    }
}

const child1 = new Child('Ani',12)
child1.sayHi();
child1.study();
