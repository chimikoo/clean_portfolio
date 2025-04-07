import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ['home', 'about', 'portfolio', 'skills', 'contact'];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
      <div className="w-full px-4 md:px-6 h-16 flex items-center justify-between mx-auto">
        <Link href="/" className="font-bold text-xl text-white">Portfolio</Link>
        <nav className="hidden md:flex gap-6">
          {menuItems.map(item => (
            <Link key={item} href={`#${item}`} className="text-sm font-medium hover:text-primary transition-colors">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </nav>
        <button className="md:hidden ml-auto" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-gray-900">
          <nav className="flex flex-col p-4 gap-2">
            {menuItems.map(section => (
              <Link key={section} href={`#${section}`} className="px-2 py-2 rounded hover:bg-muted" onClick={() => setIsMenuOpen(false)}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}