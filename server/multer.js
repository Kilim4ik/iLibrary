import express from "express";
import multer from "multer";
import path from "path";
import cors from "cors";

const app = express();

app.use(cors());

// Настройка хранилища для файлов
const storage = multer.diskStorage({
  // Куда сохранять файлы
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Папка "uploads"
  },
  // Как назвать файл
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname); // Получение расширения файла
    cb(null, file.fieldname + "-" + uniqueSuffix + ext); // Уникальное имя файла
  },
});

// Фильтр для проверки типов файлов (опционально)
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true); // Разрешить файл
  } else {
    cb(new Error("Недопустимый тип файла"), false); // Отклонить файл
  }
};

// Настройка middleware multer
const upload = multer({
  storage,
  fileFilter, // Передача фильтра (опционально)
  limits: { fileSize: 1024 * 1024 * 5 }, // Лимит на размер файла (5MB)
});

// Маршрут для загрузки файла
app.post("/upload", upload.single("file"), (req, res) => {
  // `file` — имя поля в форме
  console.log("Информация о файле:", req.file);
  res.json({ message: "Файл загружен успешно!", file: req.file });
});

// Обработка ошибок при загрузке
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ error: err.message });
  } else if (err) {
    return res.status(400).json({ error: err.message });
  }
  next();
});

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
