// 1. Khởi động Tàu vũ trụ K11
let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K11";
let crew = [
  "Bella",
  "Dũng",
  "Thảo Đoàn",
  "Minh Thư",
  "Tiên",
  "Đức",
  "Lợi",
  "Nga",
];

function launchShip(crew) {
  console.log(
    `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`
  );
}

// gọi hàm lanchShip
launchShip(crew);

// 2. Du hành đến hành tinh bí ẩn
function calculateDistance(speed, time) {
  return speed * time;
}

// distance nhận kết quả trả về từ hàm calculateDistance
let distance = calculateDistance(1000, 24);
console.log(
  `Tàu vũ trụ K11 đã du hành đến hành tinh bí ẩn với tốc độ 1000 km/h và thời gian 24h. Khoảng cách đã đi: ${distance} km.`
);

// 3. Hành tinh kỳ lạ
function convertTimeToHex(time) {
  let hex = time.toString(16);
  return hex;
}

// hexTime nhận kết quả trả về từ hàm convertTimeToHex
let hexTime = convertTimeToHex(120);
console.log(`Thời gian 120 giây đã được chuyển đổi thành mã HEX: ${hexTime}.`);

// 4. Khám phá kho báu
function decryptCode(code) {
  // tạo 1 chuỗi rỗng
  let code1 = "";
  // duyệt qua từng phần tử của chuỗi
  for (let i = 0; i < code.length; i++) {
    // nếu phần tử đó là chữ in hoa,
    if (code[i] === code[i].toUpperCase()) {
      // thì đưa về chữ thường và cộng vào chuỗi rỗng ban đầu
      code1 += code[i].toLowerCase();
    } else {
      code1 += code[i].toUpperCase();
    }
  }
  return code1;
}
// result nhận kết quả trả về từ hàm decryptCode
let result = decryptCode("K11 Challenge");
console.log(`Mã kho báu đã được giải mã: ${result}.`);

// 5. Trở về Trái Đất
function returnToEarth() {
  console.log(`Chuẩn bị trở về ${departurePlanet}!`);
}

// gọi hàm returnToEarth
returnToEarth();
