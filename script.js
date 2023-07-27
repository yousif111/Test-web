document.addEventListener('DOMContentLoaded', function() {
  const messageDiv = document.getElementById("message");
  messageDiv.style.display = "block"; // عرض النص عند تحميل الصفحة

  setTimeout(function() {
    messageDiv.style.display = "none"; // إخفاء النص بعد ثلاث ثوانٍ
  }, 5000);
});

