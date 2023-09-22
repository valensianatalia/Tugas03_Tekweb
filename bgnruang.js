function tampilkanForm() {
    const bentuk = document.getElementById('bentuk').value;
    const formKubus = document.getElementById('form-kubus');
    const formBalok = document.getElementById('form-balok');
    const formTabung = document.getElementById('form-tabung');
  
    if (bentuk === 'kubus') {
    formKubus.style.display = 'block';
    formBalok.style.display = 'none';
    formTabung.style.display = 'none';
    } else if (bentuk === 'balok') {
    formKubus.style.display = 'none';
    formBalok.style.display = 'block';
    formTabung.style.display = 'none';
    } else if (bentuk === 'tabung'){
    formKubus.style.display = 'none';
    formBalok.style.display = 'none';
    formTabung.style.display = 'block';
  } else {
    formKubus.style.display = 'none';
    formBalok.style.display = 'none';
    formTabung.style.display = 'none';
  }
}

function hitungVolume() {
    const bentuk = document.getElementById('bentuk').value;
    let hasil = '';
  
    if (bentuk === 'kubus') {
      const sisi = parseFloat(document.getElementById('sisi-kubus').value);
      const volume = Math.pow(sisi, 3);
      hasil = `Hasil Volume Kubus: ${volume.toFixed(2)} cm³`;
    } else if (bentuk === 'balok') {
      const panjang = parseFloat(document.getElementById('panjang-balok').value);
      const lebar = parseFloat(document.getElementById('lebar-balok').value);
      const tinggi = parseFloat(document.getElementById('tinggi-balok').value);
      const volume = panjang * lebar * tinggi;
      hasil = `Hasil Volume Balok: ${volume.toFixed(2)} cm³`;
    } else if (bentuk === 'tabung') {
      const jariJari = parseFloat(document.getElementById('jari-jari-tabung').value);
      const tinggi = parseFloat(document.getElementById('tinggi-tabung').value);
      const volume = Math.PI * Math.pow(jariJari, 2) * tinggi;
      hasil = `Hasil Volume Tabung: ${volume.toFixed(2)} cm³`;
    } else {
      hasil = 'Pilih jenis bangun ruang terlebih dahulu.';
    }
  
    document.getElementById('hasil').textContent = hasil;
  }
  
  