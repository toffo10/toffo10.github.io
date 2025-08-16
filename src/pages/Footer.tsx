import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-accentColor mb-4">
                Omar Pedruzzi
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Trasforma il tuo corpo, mente e vita con programmi di allenamento personalizzati progettati per liberare il tuo drago interiore.
                Il tuo viaggio verso la grandezza inizia qui.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accentColor" />
                <span className="text-gray-300">mailOmar@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accentColor" />
                <span className="text-gray-300">+39 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accentColor" />
                <span className="text-gray-300">Bergamo, Italia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Menu</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-accentColor transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-accentColor transition-colors">
                  Chi sono
                </a>
              </li>
              <li>
                <a href="#how-i-work" className="text-gray-300 hover:text-accentColor transition-colors">
                  Come lavoro
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-accentColor transition-colors">
                  Pacchetti di Allenamento
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-accentColor transition-colors">
                  Domande frequenti
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-accentColor transition-colors">
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          {/* Servizi */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Servizi</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">Allenamento Personale</li>
              <li className="text-gray-300">Nutrizione</li>
              <li className="text-gray-300">Piani di Allenamento</li>
              <li className="text-gray-300">Monitoraggio dei Progressi</li>
              <li className="text-gray-300">Correzione della Postura</li>
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Media */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-300 font-semibold">Segui il dragone:</span>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-full hover:bg-accentColorDark transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-full hover:bg-accentColorDark transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-full hover:bg-accentColorDark transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            {/*
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 font-semibold whitespace-nowrap">Stay Updated:</span>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                />
                <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-r-lg font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Omar Pedruzzi. Made with 💙 by <a className="hover:text-accentColorDark hover:underline text-accentColor" href="https://www.enricotoffolatti.it">Enrico</a></span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;