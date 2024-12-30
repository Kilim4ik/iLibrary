import express from "express";
import multer from "multer";
import cors from "cors";

// Инициализация Express
const app = express();
app.use(cors());

// Настройка хранилища для multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Указываем папки для загрузки файлов
    if (file.fieldname === "file") {
      cb(null, "uploads/pdf/"); // Для PDF
    } else if (file.fieldname === "photo") {
      cb(null, "uploads/photo/"); // Для изображений
    }
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Инициализация multer с настройками хранилища и ограничениями
const upload = multer({
  storage: storage,
  limits: { fileSize: 6 * 1024 * 1024 }, // Ограничение на размер файла — 5 MB
});

// Маршрут для обработки загрузки файлов
app.post(
  "/api/upload",
  upload.fields([
    { name: "file", maxCount: 1 }, // Поле для PDF
    { name: "photo", maxCount: 1 }, // Поле для PNG
  ]),
  (req, res) => {
    // Проверка на наличие файлов
    if (!req.files || !req.files.file || !req.files.photo) {
      return res
        .status(400)
        .json({ message: "Один или оба файла не были загружены." });
    }

    // Ответ с информацией о загруженных файлах
    res.status(200).json({
      message: "Файлы успешно загружены",
      files: req.files,
    });
  }
);

// Обработка ошибок
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Что-то пошло не так!", error: err.message });
});

// Запуск сервера
const port = process.env.PDFPORT || 3000;
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});