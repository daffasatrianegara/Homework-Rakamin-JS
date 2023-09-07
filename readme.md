# HOMEWORK JS : RANDOM ARRAY
## berikut soal dari homework :
Buatlah 100 nilai random (1 sampai 50) pada 1 array
Pecahlah menjadi 2 array berdasarkan indexnya, yakni array pada index genap dan array pada index ganjil, gunakan method push() untuk menambahkan nilai baru pada array. Gunakan 2 array yang telah dibuat untuk mendapatkan :
- Min
- Max
- Total
- Rata rata
Bandingkan kedua buah array, contoh :
- Min lebih besar array genap
- Max lebih besar array ganjil
- Total memiliki nilai sama antara array genap dan ganjil
- Rata rata lebih besar array ganjil

Output dari aplikasi:
- Array dengan jumlah index 100
- Array genap dengan jumlah index 50
- Array ganjil dengan jumlah index 50
- Min, Max, Total, Rata rata pada setiap array (genap dan ganjil)
- Perbandingan nilai min, max, total dan rata rata

## Penjelasan tiap kode pada [file](https://github.com/daffasatrianegara/Homework-Rakamin-JS/blob/main/randArray.js) `randArray.js`
```javascript
function createRandomArr() {
    const arr = [];
    for(let i = 0; i < 100; i++) {
        arr.push(Math.round(Math.random() * 49) + 1)
    }
    return arr
}
```
function diatas digunakan untuk membuat array dengan index 100, dan pada setiap index memiliki nilai random antara 1-100.

```javascript
function arrSeparate(arrays) {
    const arrOdd = []
    const arrEven = []
    for(i in arrays) {
        if(arrays[i] % 2 === 0) {
            arrEven.push(arrays[i])
        } else {
            arrOdd.push(arrays[i])
        }
    }
    return {
        odd : arrOdd,
        even : arrEven
    }
}
```
function diatas digunakan untuk memisahkan sebuah array berdasarkan nilai ganjil dan genap. untuk memisahkan nilai ganjil dan genap menggunakan operasi modulus didalam for loop. function ini mengembalikan/return 2 variabel, yaitu `odd` dan `even`.

```javascript
function arrMin(arrays) {
    let min = arrays[0]
    for(i in arrays) {
        if(arrays[i] < min) {
            min = arrays[i]
        }
    }
    return min
}
```
function ini mencari nilai terkecil dalam sebuah array. `let min = arrays[0]` merupakan nilai awal pada variabel min dan akan dibandingkan dengan nilai lain didalam for loop.

``` javascript
function arrMax(arrays) {
    let max = arrays[0];
    for(i in arrays) {
        if(arrays[i] > max) {
            max = arrays[i]
        }
    }
    return max
}
```
function ini mencari nilai terbesar dalam sebuah array. `let max = arrays[0]` merupakan nilai awal pada variabel max dan akan dibandingkan dengan nilai lain didalam for loop.

```javascript
function arrTotal(arrays) {
    let total = 0
    for(i in arrays) {
        total += parseInt(arrays[i]);
    }
    return total
}
```
function ini menghitung semua nilai pada index disetiap array. `let total = 0` merupakan variabel awal yang nantinya digunakan untuk menjumlahkan semua nilai pada array melalui for loop. `total += parseInt(arrays[i]);` merupakan baris kode yang digunakan untuk menjumlahkan nilai pada tiap index pada array.

```javascript
function arrAvr(arrays) {
    let total = arrTotal(arrays)
    return total / arrays.length
}
```
function ini menghitung nilai rata-rata pada array. memanfaatkan function total `let total = arrTotal(arrays)` dan direturn dengan jumlah index pada array `return total / arrays.length`.

```javascript
const compare = {
    min : oddMin > evenMin ? "min pada array ganjil lebih besar" : "min pada array genap lebih besar",
    max : oddMax > evenMax ? "max pada array ganjil lebih besar" : "max pada array genap lebih besar",
    sum : sumOdd > sumEven ? "nilai total pada array ganjil lebih besar" : "nilai total pada array genap lebih besar",
    avr : avrOdd > avrEven ? "rata-rata pada array ganjil lebih besar" : "rata-rata pada array genap lebih besar"
}
```
untuk membandingkan 2 buah array `odd` dan `even`. menggunakan `ternary operator` untuk mencari tahu nilai tertinggi pada `min, max, total, dan average` dari 2 buah array.
