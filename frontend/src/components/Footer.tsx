import { motion } from "framer-motion";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaGithub,
// } from "react-icons/fa";

// const socialLinks = [
//   {
//     icon: FaFacebookF,
//     href: "https://www.facebook.com/profile.php?id=100089325782566",
//     label: "Facebook",
//   },
//   {
//     icon: FaInstagram,
//     href: "https://www.instagram.com/adrianramos4504/",
//     label: "Instagram",
//   },
//   {
//     icon: FaLinkedinIn,
//     href: "https://www.linkedin.com/in/adri%C3%A1n-ramos-b3869447/",
//     label: "LinkedIn",
//   },
//   {
//     icon: FaGithub,
//     href: "https://github.com/AMarceloRamos",
//     label: "GitHub",
//   },
// ];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      
      {/* TOP */}
      <div className="px-6 sm:px-10 lg:px-16 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-black text-green-400 tracking-wider">
              PORTFOLIO
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              FullStack developer centrado en crear experiencias digitales modernas,escalables y de alto rendimiento.
            </p>
          </motion.div>

          {/* LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold text-xl mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {["About", "Proyects"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-green-400 transition"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

        
            <h3 className="text-white font-bold text-xl mb-4">
              Servicios
            </h3>

            <div className="flex gap-4 flex-wrap">
             
            </div>

            <p className="text-gray-500 mt-6 text-sm">
              Available for freelance projects and collaborations.
            </p>
         
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 py-6 px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Adrián Ramos. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-gray-500 hover:text-green-400 transition"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-green-400 transition"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}