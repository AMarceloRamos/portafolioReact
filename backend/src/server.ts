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
app.use(
  cors({
    origin: "https://portfolioadriandeveloper.vercel.app/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
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
const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGODB_URI;

    if (!mongoURI) {
      throw new Error("❌ MONGODB_URI no está definida");
    }

    await mongoose.connect(mongoURI);

    console.log("✅ MongoDB conectado correctamente");
  } catch (error) {
    console.error("❌ Error conectando MongoDB:", error);

    process.exit(1);
  }
};


// 🚀 iniciar servidor
const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`🚀 Server en http://localhost:${PORT}`);
});
