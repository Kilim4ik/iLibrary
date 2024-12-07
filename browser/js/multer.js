document.getElementById("uploadForm").addEventListener("submit", async (e) => {
  e.preventDefault(); // Останавливает стандартное поведение формы

  const formData = new FormData(e.target); // Получаем данные из формы

  try {
    const response = await fetch("http://localhost:3000/upload", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    console.log("Файл успешно загружен:", result);
  } catch (error) {
    console.error("Ошибка при загрузке файла:", error);
  }
});
