import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMenu, IoClose } from "react-icons/io5";

const links = [
  "About",
  "Projects",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className=" top-0 z-50 backdrop-blur-lg bg-[#111111]/80 border-b border-white/10">
        <div className="flex justify-between items-center px-6 py-4">
          
          {/* LOGO */}
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-black tracking-widest text-green-400 p-5"
          >
            <img src="https://res.cloudinary.com/dcya6gygz/image/upload/v1778618747/icono_hvzgeb.png" alt="" width={100} className="inline"/>
            <p className="inline text-4xl ">
            Portafolio
            </p>
          </motion.h1>

          {/* DESKTOP */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-300 hover:text-green-400 transition"
              >
                {link}
              </a>
            ))}
          </div>

          {/* MOBILE BTN */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(true)}
          >
            <IoMenu size={30} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed left-0 top-0 h-full w-[80%] max-w-sm bg-[#151515] z-50 p-6"
            >
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl font-bold text-green-400">
                  Menu
                </h2>

                <button onClick={() => setOpen(false)}>
                  <IoClose size={30} className="text-white" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {links.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-xl text-gray-300 hover:text-green-400 transition"
                    onClick={() => setOpen(false)}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}