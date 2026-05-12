import { useState } from "react";
import {
  IoCodeSlashOutline,
  IoBrowsersOutline,
  IoArchiveOutline,
  IoPhonePortraitOutline,
  IoBagCheckOutline,
  IoSwapHorizontalOutline,
  IoMenu,
  IoClose,
} from "react-icons/io5";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className="w-screen h-full overflow-y-scroll bg-gray-900 bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1620121692029-d088224ddc74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNXx8Z3JhcGhpY3MlMjBiYWNrZ3JvdW5kfGVufDB8MHx8fDE3MzUyODE0NTB8MA&ixlib=rb-4.0.3&q=80&w=1080')",
      }}
    >
      <div className="xl:w-[70%] lg:w-[80%] md:w-[90%] mx-auto relative md:px-0 px-4 md:my-10 bg-[#111111] rounded-xl overflow-hidden">
        
        {/* NAVBAR */}
        <nav className="bg-[#111111] shadow-lg w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              
              {/* LOGO */}
              <div className="flex-shrink-0">
                <a
                  href="#"
                  className="lg:text-xl md:text-lg text-sm font-bold text-gray-700"
                >
                  {"PORTFOLIO".split("").map((letter, index) => (
                    <span
                      key={index}
                      className={`px-1 bg-green-400 rounded-full animate-[ping_${
                        1.9 + index * 0.1
                      }s_linear_infinite]`}
                    >
                      {letter}
                    </span>
                  ))}
                </a>
              </div>

              {/* DESKTOP MENU */}
              <div className="hidden lg:flex space-x-8">
                <a href="#about" className="text-green-400">
                  About
                </a>
                <a
                  href="#what-i-do"
                  className="text-gray-400 hover:text-green-400"
                >
                  What I Do
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-green-400"
                >
                  Testimonials
                </a>
                <a
                  href="#clients"
                  className="text-gray-400 hover:text-green-400"
                >
                  Clients
                </a>
                <a
                  href="#fun-facts"
                  className="text-gray-400 hover:text-green-400"
                >
                  Fun Facts
                </a>
              </div>

              {/* MOBILE BUTTON */}
              <div className="lg:hidden flex items-center">
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="text-green-400"
                >
                  <IoMenu size={28} />
                </button>
              </div>
            </div>
          </div>

          {/* MOBILE MENU */}
          {mobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div
                className="fixed inset-y-0 left-0 bg-[#111111] w-64 p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-green-400 mb-4"
                >
                  <IoClose size={28} />
                </button>

                <nav className="space-y-4">
                  <a href="#about" className="block text-green-400">
                    About
                  </a>
                  <a
                    href="#what-i-do"
                    className="block text-gray-400 hover:text-green-400"
                  >
                    What I Do
                  </a>
                  <a
                    href="#testimonials"
                    className="block text-gray-400 hover:text-green-400"
                  >
                    Testimonials
                  </a>
                  <a
                    href="#clients"
                    className="block text-gray-400 hover:text-green-400"
                  >
                    Clients
                  </a>
                  <a
                    href="#fun-facts"
                    className="block text-gray-400 hover:text-green-400"
                  >
                    Fun Facts
                  </a>
                </nav>
              </div>
            </div>
          )}
        </nav>

        {/* HERO */}
        <section
          className="w-full relative flex items-center flex-col lg:flex-row"
          id="about"
        >
          <img
            className="lg:w-1/2"
            src="https://images.unsplash.com/photo-1513258496099-48168024aec0"
            alt="portfolio"
          />

          <div className="lg:absolute lg:left-[40%] lg:w-[55%] lg:p-12 sm:p-6 p-4 flex flex-col justify-center bg-[#222222]">
            <p className="text-gray-400 text-sm mb-1">
              FullStack Developer
            </p>

            <h2 className="text-white md:text-5xl text-2xl font-bold mb-4">
              Samuel Abera
            </h2>

            <p className="text-gray-400 text-md mb-6">
              I am a dedicated and innovative FullStack Developer passionate
              about creating impactful digital experiences.
            </p>

            <div>
              <button className="md:px-6 px-4 py-2 text-white font-semibold outline outline-green-400 rounded-full hover:bg-green-500 transition">
                Download CV
              </button>
            </div>
          </div>
        </section>

        {/* WHAT I DO */}
        <section className="md:pt-20 pt-10 md:px-20 px-2" id="what-i-do">
          <div className="w-fit">
            <h2 className="text-2xl font-bold text-white pb-2">
              What I Do
            </h2>

            <div className="rounded-t-full border border-gray-500 overflow-hidden">
              <hr className="border-[3px] border-green-400 w-[20%]" />
            </div>
          </div>

          <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-6 mt-8">
            
            <ServiceCard
              icon={<IoCodeSlashOutline />}
              title="Web Development"
              text="Crafting responsive and intuitive websites tailored to your needs."
            />

            <ServiceCard
              icon={<IoBrowsersOutline />}
              title="UI/UX Design"
              text="Creating visually appealing and user-centric designs."
            />

            <ServiceCard
              icon={<IoArchiveOutline />}
              title="Custom CMS Solutions"
              text="Building reusable and scalable CMS APIs."
            />

            <ServiceCard
              icon={<IoPhonePortraitOutline />}
              title="Mobile App Dev't"
              text="Developing user-friendly iOS and Android applications."
            />

            <ServiceCard
              icon={<IoBagCheckOutline />}
              title="E-commerce Development"
              text="Creating robust online business platforms."
            />

            <ServiceCard
              icon={<IoSwapHorizontalOutline />}
              title="API Integration"
              text="Connecting systems to improve functionality."
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, text }) {
  return (
    <div className="flex sm:gap-4 gap-2">
      <span className="sm:text-5xl text-3xl text-green-400">
        {icon}
      </span>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>

        <p className="text-gray-400">
          {text}
        </p>
      </div>
    </div>
  );
}