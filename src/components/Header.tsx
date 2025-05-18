
import React, { useState } from 'react';
import { Button } from './ui/button';
import Icon from './ui/icon';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white py-3 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="h-12 w-12 mr-2">
                <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40 0L80 20V60L40 80L0 60V20L40 0Z" fill="#F5C400"/>
                  <path d="M30 25V55M50 25V55M20 35H60M20 45H60" stroke="#1D2A37" strokeWidth="5"/>
                </svg>
              </div>
              <div className="font-bold text-gray-900">
                <div className="uppercase text-sm tracking-wide">ТЕХНО</div>
                <div className="uppercase text-sm tracking-wide">ПРОФИ</div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="/" className="py-2 text-gray-900 hover:text-[#F5C400] transition-colors">ГЛАВНАЯ</a>
            <a href="/catalog" className="py-2 text-gray-900 hover:text-[#F5C400] transition-colors">КАТАЛОГ</a>
            <a href="/about" className="py-2 text-gray-900 hover:text-[#F5C400] transition-colors">О КОМПАНИИ</a>
            <a href="/import" className="py-2 text-gray-900 hover:text-[#F5C400] transition-colors">ПАРАЛЛЕЛЬНЫЙ ИМПОРТ</a>
            <a href="/news" className="py-2 text-gray-900 hover:text-[#F5C400] transition-colors">НОВОСТИ</a>
            <a href="/contacts" className="py-2 text-gray-900 hover:text-[#F5C400] transition-colors">КОНТАКТЫ</a>
            <a href="/smart" className="py-2 text-gray-900 hover:text-[#F5C400] transition-colors">SMART</a>
          </nav>

          {/* Contact & Search */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-gray-900">
              <Icon name="Search" className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <a href="tel:+78003002314" className="text-sm font-medium text-gray-900">+7 (800) 300-23-14</a>
              <button className="text-xs text-gray-500">Заказать звонок</button>
            </div>
            <Button className="bg-[#F5C400] hover:bg-[#ddb100] text-black">
              Подать заявку
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center"
            onClick={toggleMobileMenu}
          >
            <Icon name="Menu" className="h-6 w-6 text-gray-900" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t mt-2">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <a href="/" className="block py-2 text-gray-900 hover:text-[#F5C400]">ГЛАВНАЯ</a>
            <a href="/catalog" className="block py-2 text-gray-900 hover:text-[#F5C400]">КАТАЛОГ</a>
            <a href="/about" className="block py-2 text-gray-900 hover:text-[#F5C400]">О КОМПАНИИ</a>
            <a href="/import" className="block py-2 text-gray-900 hover:text-[#F5C400]">ПАРАЛЛЕЛЬНЫЙ ИМПОРТ</a>
            <a href="/news" className="block py-2 text-gray-900 hover:text-[#F5C400]">НОВОСТИ</a>
            <a href="/contacts" className="block py-2 text-gray-900 hover:text-[#F5C400]">КОНТАКТЫ</a>
            <a href="/smart" className="block py-2 text-gray-900 hover:text-[#F5C400]">SMART</a>
            <div className="pt-3 border-t flex justify-between items-center">
              <a href="tel:+78003002314" className="text-sm font-medium text-gray-900">+7 (800) 300-23-14</a>
              <Button className="bg-[#F5C400] hover:bg-[#ddb100] text-black">
                Подать заявку
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
