import { Router , Request, Response } from "express";
import { getProject,
 } from "../Controllers/ProjectController";
 
const router = Router();

router.get("/",getProject);
 
export default router;