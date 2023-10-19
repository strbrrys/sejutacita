// DONATE_FORM
function validateForm() {
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    const nama = document.getElementById('nama').value;
    const nomorPonsel = document.getElementById('nomorPonsel').value;
    const email = document.getElementById('email').value;
    const metodePembayaran = document.getElementById('metodePembayaran').value;
    const nominalPembayaran = document.getElementById('nominalPembayaran').value;
    const pesanSpesial = document.getElementById('pesanSpesial').value;

    let isValid = true;

    if (nama === '') {
        document.getElementById('namaError').textContent = 'Nama lengkap harus diisi';
        isValid = false;
    }

    if (nomorPonsel === '') {
        document.getElementById('nomorPonselError').textContent = 'Nomor ponsel harus diisi';
        isValid = false;
    }

    if (email === '') {
        document.getElementById('emailError').textContent = 'Email harus diisi';
        isValid = false;
    }

    if (metodePembayaran === '') {
        document.getElementById('metodePembayaranError').textContent = 'Metode pembayaran harus dipilih';
        isValid = false;
    }

    if (nominalPembayaran === '') {
        document.getElementById('nominalPembayaranError').textContent = 'Nominal pembayaran harus diisi';
        isValid = false;
    }

    if (pesanSpesial === '') {
        document.getElementById('pesanSpesialError').textContent = 'Pesan spesial harus diisi';
        isValid = false;
    }

    return isValid;
}


