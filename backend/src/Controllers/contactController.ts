import { Request, Response } from "express";
import validator from "validator";

import Contact from "../Models/contactModels";
import { sendEmail } from "../utils/sendEmail";

// =========================================
// GET CONTACTS
// =========================================
export const getContact = async (
  req: Request,
  res: Response
) => {
  try {
    const contact = await Contact.find();

    return res.json(contact);

  } catch (error) {
    return res.status(500).json({
      msg: "Error al obtener los contactos",
      error,
    });
  }
};

// =========================================
// CREATE CONTACT
// =========================================
export const createContact = async (
  req: Request,
  res: Response
) => {
  try {
    let { name, email, message } = req.body;

    // VALIDAR EXISTENCIA
    if (!name || !email || !message) {
      return res.status(400).json({
        msg: "Todos los campos son obligatorios",
      });
    }

    // LIMPIAR DATOS
    name = validator.trim(name);
    email = validator.normalizeEmail(email) || "";
    message = validator.trim(message);

    // VALIDAR EMAIL
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        msg: "Correo inválido",
      });
    }

    // CAPITALIZAR NOMBRE
    name =
      name.charAt(0).toUpperCase() +
      name.slice(1).toLowerCase();

    // CREAR CONTACTO
    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();

    // RESPONDER RÁPIDO
    res.status(201).json({
      msg: "Mensaje enviado correctamente",
    });

    // EMAIL EN BACKGROUND
    await sendEmail(
      email,
      "Hemos recibido tu mensaje | Pixel Dev",
      `
      <div style="
        background:#1f1b2e;
        padding:40px;
        font-family:Arial,sans-serif;
        color:#ffffff;
      ">

        <div style="
          max-width:600px;
          margin:auto;
          background:#2b2440;
          border-radius:20px;
          overflow:hidden;
          border:1px solid rgba(255,255,255,0.08);
        ">

          <!-- HEADER -->
          <div style="
            background:linear-gradient(90deg,#8176AF,#C0B7E8);
            padding:30px;
            text-align:center;
          ">
            <h1 style="
              margin:0;
              color:#1f1b2e;
              font-size:28px;
            ">
              PIXEL DEV
            </h1>
          </div>

          <!-- CONTENT -->
          <div style="padding:40px;">

            <h2 style="
              margin-top:0;
              color:#03dffc;
            ">
              Hola ${name},
            </h2>

            <p style="
              color:#d1d5db;
              line-height:1.8;
              font-size:16px;
            ">
              Hemos recibido correctamente tu mensaje.
            </p>

            <p style="
              color:#d1d5db;
              line-height:1.8;
              font-size:16px;
            ">
              Gracias por comunicarte con
              <strong style="color:#ffffff;">
                Pixel Dev
              </strong>.
              Te responderemos lo antes posible.
            </p>

            <div style="
              margin-top:30px;
              padding:20px;
              border-radius:14px;
              background:#1f1b2e;
              border:1px solid rgba(255,255,255,0.08);
            ">
              <p style="
                margin:0 0 10px 0;
                color:#03dffc;
                font-weight:bold;
              ">
                Tu mensaje:
              </p>

              <p style="
                margin:0;
                color:#d1d5db;
                line-height:1.7;
              ">
                "${message}"
              </p>
            </div>

          </div>

          <!-- FOOTER -->
          <div style="
            padding:20px;
            text-align:center;
            border-top:1px solid rgba(255,255,255,0.08);
            background:#181420;
          ">
            <p style="
              margin:0;
              color:#6b7280;
              font-size:13px;
            ">
              © 2026 Pixel Dev
            </p>
          </div>

        </div>
      </div>
      `
    );

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      msg: "Error del servidor",
    });
  }
};

// =========================================
// REPLY MESSAGE
// =========================================
export const replyMessage = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const { response } = req.body;

    const message = await Contact.findById(id);

    if (!message) {
      return res.status(404).json({
        msg: "Mensaje no encontrado",
      });
    }

    // CAPITALIZAR NOMBRE
    const name =
      message.name.charAt(0).toUpperCase() +
      message.name.slice(1).toLowerCase();

    // GUARDAR RESPUESTA
    message.response = response;
    message.responded = true;

    await message.save();

    // ENVIAR EMAIL
    await sendEmail(
      message.email,
      "Respuesta a tu solicitud | Pixel Dev",
      `
      <div style="
        background:#1f1b2e;
        padding:40px;
        font-family:Arial,sans-serif;
        color:#ffffff;
      ">

        <div style="
          max-width:650px;
          margin:auto;
          background:#2b2440;
          border-radius:22px;
          overflow:hidden;
          border:1px solid rgba(255,255,255,0.08);
        ">

          <!-- HEADER -->
          <div style="
            background:linear-gradient(90deg,#8176AF,#C0B7E8);
            padding:35px;
            text-align:center;
          ">
            <h1 style="
              margin:0;
              color:#1f1b2e;
              font-size:30px;
              font-weight:bold;
            ">
              PIXEL DEV
            </h1>
          </div>

          <!-- CONTENT -->
          <div style="padding:45px;">

            <h2 style="
              margin-top:0;
              color:#03dffc;
              font-size:28px;
            ">
              Hola ${name},
            </h2>

            <p style="
              color:#d1d5db;
              line-height:1.9;
              font-size:17px;
            ">
              Hemos revisado tu solicitud y aquí está
              nuestra respuesta:
            </p>

            <!-- RESPUESTA -->
            <div style="
              margin-top:35px;
              padding:30px;
              border-radius:18px;
              background:linear-gradient(135deg,#8176AF22,#03dffc22);
              border:2px solid #03dffc;
            ">

              <p style="
                margin:0 0 18px 0;
                color:#03dffc;
                font-weight:bold;
                font-size:20px;
                text-transform:uppercase;
              ">
                Nuestra respuesta
              </p>

              <p style="
                margin:0;
                color:#ffffff;
                line-height:2;
                font-size:19px;
                font-weight:500;
              ">
                ${response}
              </p>

            </div>

          </div>

          <!-- FOOTER -->
          <div style="
            padding:22px;
            text-align:center;
            border-top:1px solid rgba(255,255,255,0.08);
            background:#181420;
          ">
            <p style="
              margin:0;
              color:#6b7280;
              font-size:13px;
            ">
              © 2026 Pixel Dev
            </p>
          </div>

        </div>
      </div>
      `
    );

    return res.json({
      msg: "Respuesta enviada correctamente",
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      msg: "Error al responder",
    });
  }
};