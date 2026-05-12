import type { Request, Response } from "express";
import ProjectsModel from "../Models/ProjectsModel";

// Obtener los proyectos

export const getProject = async (req: Request , res: Response) =>{
    try{
    const project = await ProjectsModel.find();
    
    res.json(project);
    }catch{
        res.status(500).json( { msg: "Error al obtener los projectos"});
    }
};