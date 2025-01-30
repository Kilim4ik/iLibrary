import express from "express";
import multer from "multer";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Получаем __dirname в ES-модулях
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Инициализация Express
const app = express();
app.use(cors());

// Создание папок для загрузки файлов (если они не существуют)
const uploadsDir = path.join(__dirname, "uploads");
const pdfDir = path.join(uploadsDir, "pdf");
const photoDir = path.join(uploadsDir, "photo");

if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);
if (!fs.existsSync(pdfDir)) fs.mkdirSync(pdfDir);
if (!fs.existsSync(photoDir)) fs.mkdirSync(photoDir);

// Настройка хранилища для multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let uploadPath;
    if (file.fieldname === "file") {
      uploadPath = pdfDir; // Для PDF
    } else if (file.fieldname === "photo") {
      uploadPath = photoDir; // Для изображений
    }
    console.log("Файл будет загружен в:", uploadPath); // Логируем путь
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Инициализация multer с настройками хранилища и ограничениями
const upload = multer({
  storage: storage,
  limits: { fileSize: 6 * 1024 * 1024 }, // Ограничение на размер файла — 6 MB
});

// Маршрут для обработки загрузки файлов
app.post(
  "/api/upload",
  upload.fields([
    { name: "file", maxCount: 1 }, // Поле для PDF
    { name: "photo", maxCount: 1 }, // Поле для PNG
  ]),
  (req, res) => {
    console.log("Загруженные файлы:", req.files); // Логируем файлы

    // Проверка на наличие файлов
    if (!req.files || !req.files.file || !req.files.photo) {
      console.error("Один или оба файла не были загружены"); // Логируем ошибку
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