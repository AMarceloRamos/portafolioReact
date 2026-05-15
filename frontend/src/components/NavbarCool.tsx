import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

export default function CyberpunkNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <style>{`
        @keyframes neon-pulse {
          0%, 100% {
            text-shadow:
              0 0 5px #fff,
              0 0 10px #fff,
              0 0 15px #fff,
              0 0 20px #00ffff,
              0 0 35px #00ffff,
              0 0 40px #00ffff,
              0 0 50px #00ffff,
              0 0 75px #00ffff;
          }

          50% {
            text-shadow:
              0 0 2px #fff,
              0 0 5px #fff,
              0 0 7px #fff,
              0 0 10px #00ffff,
              0 0 17px #00ffff,
              0 0 20px #00ffff,
              0 0 25px #00ffff,
              0 0 37px #00ffff;
          }
        }

        .neon-text {
          animation: neon-pulse 1.5s infinite alternate;
        }

        .bg-animated {
          background: linear-gradient(-45deg, #000000, #1a1a1a, #000033, #003366);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
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
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
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
          justify-content: center;
          align-items: center;
          padding: 0.5rem 0;
          font-weight: 500;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #00ffff;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
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
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
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

        .hamburger,
        .hamburger::before,
        .hamburger::after {
          content: '';
          display: block;
          background: #00ffff;
          height: 3px;
          width: 30px;
          transition: all 0.4s ease;
          border-radius: 4px;
        }

        .hamburger::before {
          transform: translateY(-8px);
        }

        .hamburger::after {
          transform: translateY(5px);
        }

        .hamburger.open {
          transform: rotate(45deg);
        }

        .hamburger.open::before {
          transform: translateY(0) rotate(90deg);
        }

        .hamburger.open::after {
          transform: translateY(-3px) rotate(90deg);
        }
      `}</style>

      <div className="min-h-screen bg-black text-white">
        <nav className="bg-animated cyber-grid fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-cyan-500/20">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <a
                href="#"
                className="text-2xl font-bold neon-text glitch-effect"
                data-text="CYBERLINK"
              >
                CYBERLINK
              </a>

              {/* Mobile Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden"
              >
                <span className={`hamburger ${menuOpen ? "open" : ""}`}></span>
              </button>

              {/* Desktop Menu */}
              <ul className="hidden md:flex md:items-center space-x-8">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="nav-link"
                      data-text={item.name}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}

                <li>
                  <a
                    href="#"
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-2 px-5 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.4)]"
                  >
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`
              md:hidden overflow-hidden transition-all duration-500
              ${
                menuOpen
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
          >
            <ul className="flex flex-col items-center justify-center gap-6 py-10 bg-black/90 backdrop-blur-xl">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="nav-link text-lg"
                    data-text={item.name}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}

              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main className="pt-28">
          <div className="container mx-auto px-4 py-20">
            <h1 className="text-5xl font-bold mb-6 neon-text">
              Welcome to Cyberlink
            </h1>

            <p className="text-gray-300 max-w-2xl leading-relaxed">
              Navbar futurista estilo cyberpunk creada con React +
              TypeScript + TailwindCSS.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}