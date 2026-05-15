import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMenu, IoClose } from "react-icons/io5";

const links = ["About", "Projects", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        @keyframes neon-pulse {
          0%, 100% {
            text-shadow:
              0 0 5px #00ffff,
              0 0 10px #00ffff,
              0 0 20px #00ffff,
              0 0 40px #00ffff;
          }

          50% {
            text-shadow:
              0 0 2px #00ffff,
              0 0 5px #00ffff,
              0 0 10px #00ffff,
              0 0 20px #00ffff;
          }
        }

        .neon-text {
          animation: neon-pulse 1.5s infinite alternate;
        }

        .bg-animated {
          background: linear-gradient(
            -45deg,
            #000000,
            #111111,
            #001122,
            #002244
          );
          background-size: 400% 400%;
          animation: gradient 12s ease infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }

          100% {
            background-position: 0% 50%;
          }
        }

        .cyber-grid {
          background-image:
            linear-gradient(
              rgba(0, 255, 255, 0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(0, 255, 255, 0.08) 1px,
              transparent 1px
            );

          background-size: 20px 20px;
          animation: cyber-grid-move 20s linear infinite;
        }

        @keyframes cyber-grid-move {
          0% {
            background-position: 0 0;
          }

          100% {
            background-position: 20px 20px;
          }
        }

        .nav-link {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding-bottom: 5px;
          font-weight: 500;
          letter-spacing: 1px;
          transition: color 0.3s ease;
        }

        .nav-link::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #00ffff;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
          box-shadow: 0 0 10px #00ffff;
        }

        .nav-link:hover::before {
          transform: translateX(0);
        }

        .nav-link::after {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateY(100%);
          background: linear-gradient(to bottom, #00ffff, #0080ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: transform 0.3s ease;
        }

        .nav-link:hover::after {
          transform: translateY(0);
        }

        .glitch-effect {
          position: relative;
        }

        .glitch-effect::before,
        .glitch-effect::after {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          opacity: 0.8;
        }

        .glitch-effect::before {
          left: 2px;
          text-shadow: -2px 0 #ff00de;
          clip: rect(24px, 550px, 90px, 0);
          animation: glitch-anim 3s infinite linear alternate-reverse;
        }

        .glitch-effect::after {
          left: -2px;
          text-shadow: -2px 0 #00ffff;
          clip: rect(85px, 550px, 140px, 0);
          animation: glitch-anim 2s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim {
          0% {
            clip: rect(39px, 9999px, 71px, 0);
          }

          20% {
            clip: rect(3px, 9999px, 5px, 0);
          }

          40% {
            clip: rect(6px, 9999px, 38px, 0);
          }

          60% {
            clip: rect(13px, 9999px, 43px, 0);
          }

          80% {
            clip: rect(44px, 9999px, 93px, 0);
          }

          100% {
            clip: rect(54px, 9999px, 47px, 0);
          }
        }

        .mobile-panel {
          background:
            linear-gradient(
              180deg,
              rgba(0,0,0,0.95) 0%,
              rgba(0,20,30,0.95) 100%
            );
          border-right: 1px solid rgba(0,255,255,0.2);
          box-shadow:
            0 0 30px rgba(0,255,255,0.1),
            inset 0 0 30px rgba(0,255,255,0.05);
        }

        .cyber-button {
          position: relative;
          overflow: hidden;
        }

        .cyber-button::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255,255,255,0.2),
            transparent
          );
          transform: translateX(-100%);
        }

        .cyber-button:hover::before {
          transform: translateX(100%);
          transition: transform 0.8s ease;
        }
      `}</style>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-animated cyber-grid backdrop-blur-xl border-b border-cyan-400/10">
        <div className="flex justify-between items-center px-6 py-4">
          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3"
          >
            <img
              src="https://res.cloudinary.com/dcya6gygz/image/upload/v1778618747/icono_hvzgeb.png"
              alt="logo"
              width={70}
              className="drop-shadow-[0_0_12px_#00ffff]"
            />

            <h1
              className="text-3xl md:text-4xl font-black tracking-[0.2em] neon-text glitch-effect uppercase"
              data-text="Portafolio"
            >
              Portafolio
            </h1>
          </motion.div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                data-text={link}
                className="nav-link text-gray-300 hover:text-cyan-300 uppercase tracking-wider"
              >
                {link}
              </a>
            ))}

            <a
              href="/services"
              className="cyber-button relative px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:scale-105 transition"
            >
              Servicios
            </a>
          </div>

          {/* MOBILE BTN */}
          <button
            className="md:hidden text-cyan-300 hover:text-cyan-100 transition"
            onClick={() => setOpen(true)}
          >
            <IoMenu size={34} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* PANEL */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                damping: 22,
                stiffness: 120,
              }}
              className="mobile-panel fixed left-0 top-0 h-full w-[80%] max-w-sm z-50 p-6"
            >
              <div className="flex justify-between items-center mb-16">
                <h2 className="text-3xl font-black tracking-widest neon-text text-cyan-300">
                  MENU
                </h2>

                <button onClick={() => setOpen(false)}>
                  <IoClose
                    size={34}
                    className="text-cyan-300 hover:text-white transition"
                  />
                </button>
              </div>

              <div className="flex flex-col gap-8">
                {links.map((link, index) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="nav-link text-2xl text-gray-300 hover:text-cyan-300 uppercase tracking-widest"
                    data-text={link}
                    onClick={() => setOpen(false)}
                  >
                    {link}
                  </motion.a>
                ))}

                <motion.a
                  href="#contact"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="cyber-button mt-6 text-center px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-[0_0_25px_rgba(0,255,255,0.4)]"
                  onClick={() => setOpen(false)}
                >
                  Hire Me
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}