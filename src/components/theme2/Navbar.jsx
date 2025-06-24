import { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const navItems = ['Home', 'About', 'Journey', 'Projects', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-pink-300 via-yellow-200 to-sky-300 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-800">Kuldeep.dev</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 font-medium text-indigo-900">
          {navItems.map((item, index) => (
            <li key={index} className="cursor-pointer hover:text-pink-600 transition">
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={600}
                offset={-70} // Adjust if header overlaps
                spy={true}
                activeClass="text-pink-700 font-semibold"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <ul className="md:hidden flex flex-col space-y-4 px-6 py-6 bg-gradient-to-br from-pink-200 to-sky-200 text-indigo-900 shadow-inner transition-all duration-300">
          {navItems.map((item, index) => (
            <li key={index} className="cursor-pointer hover:text-pink-600">
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={600}
                offset={-70}
                onClick={() => setOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
