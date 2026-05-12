import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

//Routers
import ProjectRouter from "./Routes/ProjectRoutes"
import contactRouter from "./Routes/contactRoutes";


dotenv.config();

const app = express();

// 🔧 middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// 🧪 test
app.get("/", (_req: Request, res: Response) => {
  res.send("Servidor Portafolio corriendo 🚀");
});

// 🔗 rutas
app.use("/api/projects", ProjectRouter);
app.use("/api/contact", contactRouter);



// 🔌 conexión a Mongo
const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI no definida en .env");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Mongo conectado");
  } catch (error) {
    console.error("❌ Error Mongo:", error);
    process.exit(1);
  }
};

// 🚀 iniciar servidor
const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`🚀 Server en http://localhost:${PORT}`);
});