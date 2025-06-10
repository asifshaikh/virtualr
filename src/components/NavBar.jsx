import logo from '../assets/logo.png';
import { navItems } from '../constants/index.jsx';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 '>
      <div className='container mx-auto px-4 relative text-sm'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center flex-shrink-0'>
            <img src={logo} alt='logo' className='h-10 w-10 mr-2' />
            <span className='text-white tracking-tight text-xl'>VirtualR</span>
          </div>
          <ul className='hidden lg:flex items-center ml-16 space-x-14'>
            {navItems.map((item, index) => (
              <li key={index} className='text-white hover:text-gray-300'>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className='hidden lg:flex items-center space-x-12 justify-center'>
            <a
              href='#'
              className='py-2 px-3 border rounded-md hover:scale-105 transition-transform duration-300 '
            >
              Sign In
            </a>
            <a
              href='#'
              className='py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to bg-orange-800 hover:scale-105 transition-transform duration-300'
            >
              Create Account
            </a>
          </div>
          <div className='lg:hidden md:flex flex-col justify-end'>
            <button onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className='py-4 text-white hover:text-gray-400'>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className='flex space-x-6'>
              <a
                href='#'
                className='py-2 px-3 border rounded-md hover:scale-105 transition-transform duration-300 '
              >
                Sign In
              </a>
              <a
                href='#'
                className='py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to bg-orange-800 hover:scale-105 transition-transform duration-300'
              >
                Create Account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
