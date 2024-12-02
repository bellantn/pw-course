//Khai báo chiều cao của bạn (cm)
const chieuCao = 158;

let soLe = chieuCao % 100;

let canNangLyTuong = (soLe * 9) / 10;
let canNangToiDa = soLe;
let canNangToiThieu = (soLe * 8) / 10;

console.log(
  "Nếu chiều cao của bạn là: " + chieuCao + "cm, thì cân nặng lý tưởng là: " + canNangLyTuong + ", cân nặng tối đa là: " + canNangToiDa + ", cân nặng tối thiểu là: " +canNangToiThieu
);
