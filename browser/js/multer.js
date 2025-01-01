
export const addFile = async (form) => {
  const formData = new FormData(form); // Формируем данные формы
  try {
    const response = await fetch(`https://testing-task-1.onrender.com/api/upload`, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) throw new Error("Ошибка сети или сервера");
    const result = await response.json();
    return result.files;
  } catch (error) {
    console.error("Ошибка при загрузке файла:", error);
    return error
  }
};
export const deleteFile = async (fileName) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/upload/${fileName}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error(`Помилка мережі або сервера`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Помилка при видаленні файлу:", error);
    throw error;
  }
};
