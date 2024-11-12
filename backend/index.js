import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

// middleWare

app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));
const corsOptions = {
  origin: "http://localhost:5173",
  Credentials: true,
};

app.use(cors(corsOptions));
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
