// membuat array ber index 100 dengan tiap nilai antara 1-50
function createRandomArr() {
    const arr = [];
    for(let i = 0; i < 100; i++) {
        arr.push(Math.round(Math.random() * 49) + 1)
    }
    return arr
}

// memecah 1 array menjadi 2 array dengan tipe genap dan ganjil
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

// mencari min pada array
function arrMin(arrays) {
    let min = arrays[0]
    for(i in arrays) {
        if(arrays[i] < min) {
            min = arrays[i]
        }
    }
    return min
}

// mencari max pada array
function arrMax(arrays) {
    let max = arrays[0];
    for(i in arrays) {
        if(arrays[i] > max) {
            max = arrays[i]
        }
    }
    return max
}

// menjumlahkan semua index pada array
function arrTotal(arrays) {
    let total = 0
    for(i in arrays) {
        total += parseInt(arrays[i]);
    }
    return total
}

// mencari rata-rata nilai pada array
function arrAvr(arrays) {
    let total = arrTotal(arrays)
    return total / arrays.length
}

// create array
const arrays = createRandomArr()
console.log("berikut array berindex 100 :", arrays, "\n")

// separate arrays
const {odd, even} = arrSeparate(arrays)
console.log("berikut array dengan jenis ganjil :", odd, "\n")
console.log("berikut array dengan jenis genap :", even, "\n")

// search min value in array odd and even
const oddMin = arrMin(odd)
const evenMin = arrMin(even)
console.log("nilai terkecil dari array ganjil adalah :", oddMin)
console.log("nilai terkecil dari array genap adalah :", evenMin)

// search max value in arrays
const oddMax = arrMax(odd)
const evenMax = arrMax(even)
console.log("nilai terbesar dari array ganjil adalah :", oddMax)
console.log("nilai terbesar dari array genap adalah :", evenMax)

// sums all values in array
const sumOdd = arrTotal(odd)
const sumEven = arrTotal(even)
console.log("total nilai pada array ganjil adalah", sumOdd)
console.log("total nilai pada array genap adalah", sumEven)

// find average in array
const avrOdd = arrAvr(odd)
const avrEven = arrAvr(even)
console.log("rata-rata nilai pada array ganjil adalah", avrOdd)
console.log("rata-rata nilai pada array genap adalah", avrEven)

// comparison min, max, sum, and average in arrays
const compare = {
    min : oddMin > evenMin ? "min pada array ganjil lebih besar" : "min pada array genap lebih besar",
    max : oddMax > evenMax ? "max pada array ganjil lebih besar" : "max pada array genap lebih besar",
    sum : sumOdd > sumEven ? "nilai total pada array ganjil lebih besar" : "nilai total pada array genap lebih besar",
    avr : avrOdd > avrEven ? "rata-rata pada array ganjil lebih besar" : "rata-rata pada array genap lebih besar"
}
console.log(`\n perbandingan nilai antara array ganjil dan genap : \n`, compare)