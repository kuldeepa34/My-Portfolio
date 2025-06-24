import { useState } from 'react';
import { Menu, X } from 'lucide-react';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-sm px-6 py-4 flex justify-between items-center z-50">
      <h1 className="text-2xl font-bold text-white">Kuldeep.dev</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-white font-medium">
        <li><a href="#hero" className="hover:text-cyan-400 transition">Home</a></li>
        <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
        <li><a href="#journey" className="hover:text-cyan-400 transition">Journey</a></li>
        <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
        <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden text-white">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-black/90 backdrop-blur-sm py-6 flex flex-col items-center gap-4 text-white font-medium md:hidden transition-all duration-300 z-40">
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#journey" onClick={() => setIsOpen(false)}>Journey</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
