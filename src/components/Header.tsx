import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Shirt, Phone } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

const Header = ({ scrolled }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-md' : 'bg-white/70'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex flex-col">
            <NavLink to="/" className="flex items-center">
              <Shirt className="w-8 h-8 text-primary mr-2" />
              <span className="font-extrabold text-3xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400 drop-shadow-sm font-poppins">
                Ironing Angels UK
              </span>
            </NavLink>
            <a
              href="tel:+447901611906"
              className="flex items-center gap-2 text-primary hover:text-pink-600 font-semibold transition-colors duration-200 ml-10 mt-1"
            >
              <Phone size={16} />
              <span className="text-sm">07901 611906</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-700 hover:text-primary'
                }`
              }
            >
              Home{`   -`}
            </NavLink>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-700 hover:text-primary'
                }`
              }
            >
              Pricing{`   -`}
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-700 hover:text-primary'
                }`
              }
            >
              Contact  
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white py-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-2 font-medium ${
                    isActive
                      ? 'text-primary bg-blue-50'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  `px-4 py-2 font-medium ${
                    isActive
                      ? 'text-primary bg-blue-50'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-4 py-2 font-medium ${
                    isActive
                      ? 'text-primary bg-blue-50'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;