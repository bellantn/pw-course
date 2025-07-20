let chieuCao = 169;
let soLeChieuCao = chieuCao % 100;
let canNangLyTuong = soLeChieuCao * 9 / 10;
let canNangToiDa = soLeChieuCao;
let canNangToiThieu = soLeChieuCao * 8 / 10;

console.log("Cân nặng lý tưởng là: " + canNangLyTuong, "- Cân nặng tối đa là: " + canNangToiDa, "- Cân nặng tối thiểu là: " + canNangToiThieu);