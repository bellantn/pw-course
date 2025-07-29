const departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K16";
let crew = ["Bella", "Trang Trần", "Hân", "Tuấn Anh", "Anh Tú"];

/*
1. Khởi động Tàu Vũ trụ K16
*/
function launchShip(crew) {
    let crewList = " ";

    for (let i = 0; i < crew.length; i++) {
        if (i === crew.length - 1) {
            crewList = crewList + crew[i];
        } else {
            crewList = crewList + crew[i] + ", ";
        }
    }

    return `"Chuẩn bị khởi động! Phi hành đoàn gồm: ${crewList} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}.`;
}

console.log(launchShip(crew));


/*
2. Du hành đến hành tinh bí ẩn
*/
function calculateDistance(speed, time) {
    let distance = speed * time;
    return distance;
}

console.log(`Khoảng cách đến hành tinh bí ẩn là: ${calculateDistance(1000, 24)}km.`);


/*
3. Hành tinh kỳ lạ
*/
function convertTimeToHex(time) {
    let convertTime = time.toString(16);
    return convertTime;
}

console.log(`120 giây tương đương với ${convertTimeToHex(120)} giây trên hành tinh mới.`);


/*
4. Khám phá kho báu
*/
// Cách 1
function decryptCode(code) {
    let decriptedCode = "";
    for (let i = 0; i < code.length; i++) {
        if (code[i] === code[i].toLowerCase()) {
            decriptedCode = decriptedCode + code[i].toUpperCase();
        } else {
            decriptedCode = decriptedCode + code[i].toLowerCase();
        }
    }
    return decriptedCode;
}

console.log(`Mật mã kho báu là: ${decryptCode("K16 Challenge")}`);

// Cách 2
function decriptCode(code) {
    let decriptedCode = "";
    for (const char of code) {
        if (char === char.toLowerCase()) {
            decriptedCode = decriptedCode + char.toUpperCase();
        } else {
            decriptedCode = decriptedCode + char.toLowerCase();
        }
    }
    return decriptCode;
}

console.log(`Mật mã kho báu là: ${decryptCode("K16 Challenge")}`);

/*
5. Trở về Trái Đất
*/
function returnToEarth() {
    console.log(`Chuẩn bị trở về ${departurePlanet}!`);
}

returnToEarth();


