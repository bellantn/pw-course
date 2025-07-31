import { test } from '@playwright/test';

let notes = [
   { title: "Lương cao chưa đủ để giữ chân nhân tài khoa học công nghệ", desc: "Giám đốc Đại học Quốc gia TP HCM cho biết có đơn vị trong trường trả lương 85 triệu đồng cho giáo sư, nhưng đây không phải vấn đề chính để thu hút nhân tài." },
   { title: "Trung Quốc xây đập thủy điện lớn nhất thế giới sau 74 năm nghiên cứu", desc: "Bắc Kinh khởi động dự án thủy điện lớn hơn đập Tam Hiệp trên sông Nhã Lỗ Tạng Bố ở miền nam Tây Tạng sau nhiều thập kỷ nghiên cứu khoa học." },
   { title: "Trung Quốc triệu tập Nvidia vì lo chip H20 có 'cửa hậu'", desc: "Cơ quan quản lý của Trung Quốc triệu tập Nvidia để làm rõ rủi ro bảo mật trên mẫu H20, sau khi Mỹ đề xuất chip bán ra nước ngoài phải gắn định vị." },
   { title: "Quang phổ kế nhỏ nhất thế giới", desc: "Một quang phổ kế mới phát triển tại Đại học North Carolina (NC State) có thể cung cấp công cụ phân tích hóa học tiên tiến cho điện thoại thông minh và các thiết bị nhỏ gọn khác." },
   { title: "Ông chủ Facebook: 'Không dùng kính AI sẽ gặp bất lợi trong tương lai'", desc: "CEO Meta Mark Zuckerberg cho rằng kính thông minh AI sẽ trở thành xu hướng và trong tương lai những người không sử dụng thiết bị có thể gặp bất lợi." },
   { title: "Lý do động đất 8,8 độ ở Nga tạo ra sóng thần yếu hơn dự đoán", desc: "Động đất 8,8 độ ngoài khơi Nga không tạo ra sóng thần mạnh ở nhiều vùng ven biển Thái Bình Dương do đặc điểm địa chất và hình dáng bờ biển." },
   { title: "Cửa hàng điện thoại nhỏ lẻ dần biến mất ở Trung Quốc", desc: "Từ một lĩnh vực ăn nên làm ra ở các khu phố sầm uất, cửa hàng bán và sửa chữa điện thoại tại Trung Quốc biến mất dần dần." },
   { title: "Microsoft 'xóa sổ' mật khẩu lưu trên Authenticator", desc: "Microsoft dự kiến xóa toàn bộ mật khẩu đã lưu trên Microsoft Authenticator và đóng cửa ứng dụng để chuyển sang tính năng passkey từ 1/8." },
   { title: "Những công nghệ giúp hãng hàng không đối phó nhiễu động", desc: "Các nhà thiết kế máy bay đang phát triển kỹ thuật mới giúp giảm bớt tác động của nhiễu động không khí đang trở nên ngày càng mạnh hơn do biến đổi khí hậu." },
   { title: "Viện Hàn lâm Khoa học và Công nghệ đặt mục tiêu làm chủ 30 công nghệ", desc: "Viện Hàn lâm Khoa học và Công nghệ Việt Nam đặt mục tiêu làm chủ 30 công nghệ trong các lĩnh vực như công nghệ sinh học, vũ trụ, thông tin trong giai đoạn 2025-2030." },
];

let titleXpath = "//input[@id='note-title']";
let contentXpath = "//textarea[@id='note-content']";
let addNoteBtn = "//button[@id='add-note']";
let searchXpath = "//input[@id='search']"

test('Test 04', async ({ page }) => {
   await test.step('Truy cập trang Playwright Material', async () => {
      await page.goto("https://material.playwrightvn.com/");
   });

   await test.step('Click vào Bài học 4: Personal notes', async () => {
      await page.locator("//a[@href='04-xpath-personal-notes.html']").click();
   });

   await test.step('Thêm mới 10 note có nội dung là tiêu đề và một phần ngắn (khoảng 3 dòng) tại báo vnexpress khoa học', async () => {
      for (const note of notes) {
         await page.locator(titleXpath).fill(note["title"]);
         await page.locator(contentXpath).fill(note["desc"]);
         await page.click(addNoteBtn);
      }
   });

   await test.step('Thực hiện search theo tiêu đề bài báo bất kỳ', async () => {
      await page.locator(searchXpath).fill("Trung Quốc");
   });
});