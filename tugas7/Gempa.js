class Gempa {
  constructor(lokasi, skala) {
    this.lokasi = lokasi;
    this.skala = skala;
  }

  dampak(d) {
    if (this.skala >= 0 && this.skala <= 2) {
      d = "Tidak Terasa";
    } else if (this.skala > 2 && this.skala <= 4) {
      d = "Bangunan Retak-Retak";
    } else if (this.skala > 4 && this.skala <= 6) {
      d = "Bangunan Roboh";
    } else if (this.skala > 6) {
      d = "Bagunan Roboh & Berpotensi Tsunami";
    }
    document.write(`<tr>
    <td>${this.lokasi}</td>
    <td>${this.skala}</td>
    <td>${d}</td>
    </tr>`);
  }
}
let d;
let g1 = new Gempa("Jepang", 2);
let g2 = new Gempa("Eropa", 4);
let g3 = new Gempa("Italy", 5);
let g4 = new Gempa("Swiss", 6.6);
let g5 = new Gempa("Spanyol", 1.5);
let g6 = new Gempa("Cina", 3.6);
let g7 = new Gempa("Rusia", 4.7);
let g8 = new Gempa("Amerika", 6.9);
let g9 = new Gempa("Korea", 3.3);
let g10 = new Gempa("Mexico", 2);
g1.dampak(d);
g2.dampak(d);
g3.dampak(d);
g4.dampak(d);
g5.dampak(d);
g6.dampak(d);
g7.dampak(d);
g8.dampak(d);
g9.dampak(d);
g10.dampak(d);
