let num = Math.floor(Math.random() * 15) + 1;

if (num % 3 === 0 && num % 5 === 0) {
    console.log(num + 'は' + '3と5の倍数です');
} else if (num % 3 === 0) {
    console.log(num + 'は' + '3の倍数です');
} else if (num % 5 ===0) {
    console.log(num + 'は' + '5の倍数です');
} else {
    console.log(num);
}
