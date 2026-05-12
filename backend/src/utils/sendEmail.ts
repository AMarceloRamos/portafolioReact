import { transporter } from "../config/nodemailer";

export const sendEmail = async (
  to: string,
  subject: string,
  html: string
) => {
  try {
    const info = await transporter.sendMail({
      from: `"Pixel Dev" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    });

    console.log("Correo enviado:", info.response);

  } catch (error) {
    console.log(error);
  }
};