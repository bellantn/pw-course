const phoneNumber = "0123 456 789";
const report = "Có một lỗi trong hệ thống.";
const numbersStr = "1,234,567";


/*
1. Thay khoảng trắng bằng "." trong phoneNumber.  
*/
// Cách 1
newPhoneNumber = phoneNumber.replace(" ", ".");
newPhoneNumber = newPhoneNumber.replace(" ", ".");

// Cách 2
newPhoneNumber = phoneNumber.replace(/ /g, ".");

console.log(newPhoneNumber);


/*
2. Thay "lỗi" bằng "bug" trong report. 
*/
newReport = report.replace("lỗi", "bug");

console.log(newReport);


/*
3. Thay "," bằng "." trong numbersStr. 
*/
// Cách 1
newNumberStr = numbersStr.replace(",", ".");
newNumberStr = newNumberStr.replace(",", ".");

// Cách 2
newNumberStr = numbersStr.replace(/,/g, ".")

console.log(newNumberStr);