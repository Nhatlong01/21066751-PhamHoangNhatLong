// Lấy thông tin từ form
const form = document.querySelector('form');
const nameInput = document.querySelector('input[type="text"]');
const genderSelect = document.querySelector('select');
const phoneInput = document.querySelector('input[type="text"]');
const lifestyleRadios = document.querySelectorAll('input[type="radio"]');
const todayFeelingInput = document.querySelector('input[type="text"]');

// Xử lý khi submit form
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của form

  // Lấy dữ liệu từ các input
  const name = nameInput.value;
  const gender = genderSelect.value;
  const phone = phoneInput.value;
  const lifestyle = lifestyleRadios.value;
  const todayFeeling = todayFeelingInput.value;

  // Hiển thị thông tin đã nhập
  console.log(`Tên: ${name}`);
  console.log(`Giới tính: ${gender}`);
  console.log(`Số điện thoại: ${phone}`);
  console.log(`Lối sống: ${lifestyle}`);
  console.log(`Cảm nhận hôm nay: ${todayFeeling}`);
});