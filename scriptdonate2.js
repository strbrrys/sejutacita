function validateForm2() {
    var isValid = true;

    var namaLengkap = document.getElementById("namaLengkap").value.trim();
      var nomorPonsel = document.getElementById("nomorPonsel").value.trim();
      var email = document.getElementById("email").value.trim();

      var namaLengkapError = document.getElementById("namaLengkapError");
      var nomorPonselError = document.getElementById("nomorPonselError");
      var emailError = document.getElementById("emailError");

      // Reset error messages
      namaLengkapError.textContent = "";
      nomorPonselError.textContent = "";
      emailError.textContent = "";

      var isValid = true;

      // Validate namaLengkap field
      if (namaLengkap === "") {
        namaLengkapError.textContent = "Nama lengkap harus diisi";
        isValid = false;
      }

      // Validate nomorPonsel field
      if (nomorPonsel === "") {
        nomorPonselError.textContent = "Nomor Ponsel harus diisi";
        isValid = false;
      }

      // Validate email field
      if (email === "") {
        emailError.textContent = "Email harus diisi";
        isValid = false;
      }

    var namaPenerima = document.getElementById("namaPenerima").value.trim();
      var tujuan = document.getElementById("tujuan").value.trim();
      var lokasi = document.getElementById("lokasi").value.trim();

      var namaPenerimaError = document.getElementById("namaPenerimaError");
      var tujuanError = document.getElementById("tujuanError");
      var lokasiError = document.getElementById("lokasiError");

      // Reset error messages
      namaPenerimaError.textContent = "";
      tujuanError.textContent = "";
      lokasiError.textContent = "";

      var isValid = true;

      // Validate namaPenerima field
      if (namaPenerima === "") {
        namaPenerimaError.textContent = "Nama Penerima harus diisi";
        isValid = false;
      }

      // Validate tujuan field
      if (tujuan === "") {
        tujuanError.textContent = "Tujuan harus diisi";
        isValid = false;
      }

      // Validate lokasi field
      if (lokasi === "") {
        lokasiError.textContent = "Lokasi harus diisi";
        isValid = false;
      }

    var judulDonasiInput = document.getElementById("judulDonasi");
    var kategoriDonasiInput = document.getElementById("kategoriDonasi");
    var ceritaDonasiInput = document.getElementById("ceritaDonasi");
    var targetDanaInput = document.getElementById("targetDana");

    var judulDonasiError = document.getElementById("judulDonasiError");
    var kategoriDonasiError = document.getElementById("kategoriDonasiError");
    var ceritaDonasiError = document.getElementById("ceritaDonasiError");
    var targetDanaError = document.getElementById("targetDanaError");

    judulDonasiError.textContent = "";
    kategoriDonasiError.textContent = "";
    ceritaDonasiError.textContent = "";
    targetDanaError.textContent = "";

    if (judulDonasiInput.value.trim() === "") {
      judulDonasiError.textContent = "Please enter the donation title";
      isValid = false;
    }

    if (kategoriDonasiInput.value.trim() === "") {
      kategoriDonasiError.textContent = "Please select the donation category";
      isValid = false;
    }

    if (ceritaDonasiInput.value.trim() === "") {
      ceritaDonasiError.textContent = "Please enter the donation story";
      isValid = false;
    }

    if (targetDanaInput.value.trim() === "") {
      targetDanaError.textContent = "Please enter the donation target amount";
      isValid = false;
    }



    return isValid;
  }