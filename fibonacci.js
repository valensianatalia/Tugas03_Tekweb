function hitungFibonacci() {
    const n = parseInt(document.getElementById('n').value);

    if (!isNaN(n) && n >= 0) {
        let a = 0, b = 1;
        let hasil = [a];

    while (hasil.length < n) {
        [a, b] = [b, a + b];
        hasil.push(a);
    }

    document.getElementById('hasil').textContent = hasil.join(', ');
    } else {
    alert('Masukkan bilangan yang valid!');
    }
}   