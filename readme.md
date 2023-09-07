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
