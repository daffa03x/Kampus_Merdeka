function tambah() {
  let frm = document.getElementById("formulir");
  let agk1 = frm.angka1.value;
  let agk2 = frm.angka2.value;
  let hsl;

  if (isNaN(agk1, agk2)) {
    alert("Data Harus Angka");
  } else if (agk1 == "" || agk2 == "") {
    alert("Data Tidak Boleh Kosong");
  } else {
    hsl = parseInt(agk1) + parseInt(agk2);
  }
  frm.hasil.value = hsl;
}

function kurang() {
  let frm = document.getElementById("formulir");
  let agk1 = frm.angka1.value;
  let agk2 = frm.angka2.value;

  if (isNaN(agk1, agk2)) {
    alert("Data Harus Angka");
  } else if (agk1 == "" || agk2 == "") {
    alert("Data Tidak Boleh Kosong");
  } else {
    hsl = parseInt(agk1) - parseInt(agk2);
  }
  frm.hasil.value = hsl;
}

function kali() {
  let frm = document.getElementById("formulir");
  let agk1 = frm.angka1.value;
  let agk2 = frm.angka2.value;

  if (isNaN(agk1, agk2)) {
    alert("Data Harus Angka");
  } else if (agk1 == "" || agk2 == "") {
    alert("Data Tidak Boleh Kosong");
  } else {
    hsl = parseInt(agk1) * parseInt(agk2);
  }
  frm.hasil.value = hsl;
}

function bagi() {
  let frm = document.getElementById("formulir");
  let agk1 = frm.angka1.value;
  let agk2 = frm.angka2.value;

  if (isNaN(agk1, agk2)) {
    alert("Data Harus Angka");
  } else if (agk1 == "" || agk2 == "") {
    alert("Data Tidak Boleh Kosong");
  } else {
    hsl = parseInt(agk1) / parseInt(agk2);
  }
  frm.hasil.value = hsl;
}

function pangkat() {
  let frm = document.getElementById("formulir");
  let agk1 = frm.angka1.value;
  let agk2 = frm.angka2.value;

  if (isNaN(agk1, agk2)) {
    alert("Data Harus Angka");
  } else if (agk1 == "" || agk2 == "") {
    alert("Data Tidak Boleh Kosong");
  } else {
    hsl = Math.pow(parseInt(agk1), parseInt(agk2));
  }
  frm.hasil.value = hsl;
}

function kosong() {
  let frm = document.getElementById("formulir");
  frm.angka1.value = "";
  frm.angka2.value = "";
  frm.hasil.value = "";
}
