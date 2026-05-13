import { motion } from "framer-motion";
import { useState } from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaGithub,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
} from "react-icons/fa";

interface FormData {
    name: string;
    email: string;
    message: string;
}


type ContactItem = {
    icon: React.ElementType;
    title: string;
    value: string;
};

type SocialItem = {
    icon: React.ElementType;
    href: string;
};

const contactItems: ContactItem[] = [
    {
        icon: FaEnvelope,
        title: "Email",
        value: "adrianramosv@hotmail.com",
    },
    {
        icon: FaPhoneAlt,
        title: "Phone",
        value: "+56 9 8782 9030",
    },
    {
        icon: FaMapMarkerAlt,
        title: "Location",
        value: "La Florida, Santiago, Chile",
    },
];

const socialLinks: SocialItem[] = [
    {
        icon: FaFacebookF,
        href: "https://www.facebook.com/profile.php?id=100089325782566",
    },
    {
        icon: FaInstagram,
        href: "https://www.instagram.com/adrianramos4504/",
    },
    {
        icon: FaLinkedinIn,
        href: "https://www.linkedin.com/in/adri%C3%A1n-ramos-b3869447/",
    },
    {
        icon: FaGithub,
        href: "https://github.com/AMarceloRamos",
    },
];

export default function Contact() {
    const [form, setForm] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    // 👉 manejar cambios
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);
  setSuccess("");

  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/contact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );

    if (res.ok) {
      setSuccess("Mensaje enviado correctamente ✅");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setSuccess("Error al enviar ❌");
    }
  } catch (error) {
    setSuccess("Error del servidor ❌");
  }

  setLoading(false);
};
        return (
            <section
                id="contact"
                className="min-h-screen bg-[#0b0b0b] text-white px-6 sm:px-10 lg:px-16 py-24 flex items-center"
            >
                <div className="w-full max-w-7xl mx-auto">

                    {/* HEADER */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <p className="uppercase tracking-[0.4em] text-green-400 text-sm mb-4">
                            Contact
                        </p>

                        <h2 className="text-5xl md:text-7xl font-black">
                            Get In{" "}
                            <span className="text-green-400">
                                Touch
                            </span>
                        </h2>

                        <div className="w-24 h-[2px] bg-green-400 mx-auto mt-8" />

                        <p className="text-gray-400 max-w-2xl mx-auto mt-8 text-lg leading-relaxed">
                            ¿Tienes un proyecto, idea o propuesta laboral?
                            Estoy disponible para colaborar y crear experiencias digitales modernas.
                        </p>
                    </motion.div>

                    {/* CONTENT */}
                    <div className="grid lg:grid-cols-2 gap-14 items-start">

                        {/* LEFT */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            {contactItems.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        className="flex items-center gap-6 border-b border-white/5 pb-8"
                                    >
                                        <div className="w-20 h-20 rounded-full border border-green-400/30 flex items-center justify-center text-green-400 text-3xl bg-[#111]">
                                            <Icon size={28} />
                                        </div>

                                        <div>
                                            <p className="text-green-400 uppercase text-sm tracking-[0.2em] mb-1">
                                                {item.title}
                                            </p>

                                            <p className="text-xl text-gray-200">
                                                {item.value}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}

                            {/* SOCIAL */}
                            <div className="pt-4">
                                <p className="text-gray-300 mb-6 text-lg">
                                    Let’s connect!
                                </p>

                                <div className="flex gap-4 flex-wrap">
                                    {socialLinks.map((social, index) => {
                                        const Icon = social.icon;

                                        return (
                                            <motion.a
                                                key={index}
                                                href={social.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                whileHover={{
                                                    scale: 1.12,
                                                    y: -4,
                                                }}
                                                whileTap={{ scale: 0.95 }}
                                                className="w-14 h-14 rounded-full border border-green-400/30 bg-[#111] flex items-center justify-center text-green-400 hover:bg-green-400 hover:text-black transition duration-300"
                                            >
                                                <Icon size={20} />
                                            </motion.a>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT */}
                        <motion.form
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="border border-green-400/20 bg-[#101010] rounded-[2rem] p-8 md:p-10 shadow-[0_0_60px_rgba(34,197,94,0.08)]"
                        >
                            <h3 className="text-3xl font-bold text-green-400 mb-10">
                                Send Me a Message
                            </h3>


                            <div className="grid md:grid-cols-2 gap-5 mb-5">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Tu nombre"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="bg-[#161616] border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-green-400 transition"
                                    required
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Tu correo"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="bg-[#161616] border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-green-400 transition"
                                    required
                                />
                            </div>

                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full bg-[#161616] border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-green-400 transition mb-5"
                            />

                            <textarea
                                rows={6}
                                name="message"
                                placeholder="Tu mensaje"
                                value={form.message}
                                onChange={handleChange}
                                className="w-full bg-[#161616] border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-green-400 transition resize-none mb-6"
                                required
                            />

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={loading}
                                className="w-full bg-green-400 hover:bg-green-500 text-black font-black tracking-[0.2em] uppercase py-4 rounded-xl transition"
                            >
                                {loading ? "Enviando..." : "Enviar Mensaje"}

                            </motion.button>
                            {/* MENSAJE */}
                            {success && (
                                <p className="text-green-400 uppercase text-sm tracking-[0.2em] mb-1">
                                    {success}
                                </p>
                            )}
                        </motion.form>
                    </div>
                </div>
            </section>
        );
    }
