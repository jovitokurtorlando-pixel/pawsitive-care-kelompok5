document.getElementById('hitungBtn').addEventListener('click', function() {
    // 1. Ambil nilai input dari elemen HTML
    let hargaPaket = parseInt(document.getElementById('paketSelect').value);
    let jumlah = parseInt(document.getElementById('jumlahInput').value) || 0;
    let kodePromo = document.getElementById('promoInput').value.trim().toUpperCase();

    // Validasi input minimal jumlah
    if (jumlah <= 0) {
        alert("Masukkan jumlah hari atau jumlah hewan dengan benar minimal 1!");
        return;
    }

    // 2. Hitung harga awal (Paket x Jumlah Hari/Hewan)
    let hargaAwal = hargaPaket * jumlah;
    let diskon = 0;

    // 3. Logika Percabangan Kondisi Diskon (If-Else)
    // Sesuai ketentuan kelompok: Diskon khusus jika memasukkan kode promo yang valid
    if (kodePromo === "PAW75" || kodePromo === "PAW150" || kodePromo === "PAW250" || kodePromo === "BISDIG") {
        // Diskon 15% jika menggunakan kode promo yang sesuai
        diskon = hargaAwal * 0.15;
    } else if (jumlah >= 5) {
        // Diskon grosir 10% jika pemesanan / penitipan mencapai minimal 5 hari/hewan
        diskon = hargaAwal * 0.10;
    }

    // 4. Hitung total bayar akhir
    let totalBayar = hargaAwal - diskon;

    // 5. Tampilkan hasil perhitungan ke layar web
    document.getElementById('valHargaAwal').innerText = "Rp " + hargaAwal.toLocaleString('id-ID');
    document.getElementById('valDiskon').innerText = "Rp " + diskon.toLocaleString('id-ID');
    document.getElementById('valTotal').innerText = "Rp " + totalBayar.toLocaleString('id-ID');
});
