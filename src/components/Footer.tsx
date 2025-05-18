
import React from 'react';
import Icon from './ui/icon';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="bg-[#1D2A37] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          {/* Logo */}
          <div className="flex items-center mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <div className="h-12 w-12 mr-2">
                <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40 0L80 20V60L40 80L0 60V20L40 0Z" fill="#F5C400"/>
                  <path d="M30 25V55M50 25V55M20 35H60M20 45H60" stroke="white" strokeWidth="5"/>
                </svg>
              </div>
              <div className="font-bold">
                <div className="uppercase text-sm tracking-wide">ТЕХНО</div>
                <div className="uppercase text-sm tracking-wide">ПРОФИ</div>
              </div>
            </a>
          </div>

          {/* Nav Links */}
          <div className="grid grid-cols-2 md:flex md:space-x-8 text-sm mb-6 md:mb-0 gap-y-2">
            <a href="/" className="text-gray-300 hover:text-[#F5C400] transition-colors">ГЛАВНАЯ</a>
            <a href="/catalog" className="text-gray-300 hover:text-[#F5C400] transition-colors">КАТАЛОГ</a>
            <a href="/about" className="text-gray-300 hover:text-[#F5C400] transition-colors">О КОМПАНИИ</a>
            <a href="/smart" className="text-gray-300 hover:text-[#F5C400] transition-colors">SMART</a>
            <a href="/import" className="text-gray-300 hover:text-[#F5C400] transition-colors">ПАРАЛЛЕЛЬНЫЙ ИМПОРТ</a>
            <a href="/news" className="text-gray-300 hover:text-[#F5C400] transition-colors">НОВОСТИ</a>
            <a href="/contacts" className="text-gray-300 hover:text-[#F5C400] transition-colors">КОНТАКТЫ</a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 text-gray-300 mb-6 md:mb-0">
            <a href="#" className="hover:text-[#F5C400]">
              <Icon name="Smartphone" className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-[#F5C400]">
              <Icon name="Instagram" className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-[#F5C400]">
              <Icon name="Telegram" className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-[#F5C400]">
              <Icon name="Youtube" className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-[#F5C400]">
              <Icon name="Facebook" className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 border-t border-gray-700 pt-6">
          <div>
            <p className="text-sm text-gray-400 mb-1">Наша почта:</p>
            <a href="mailto:info@tehnoprofi.ru" className="text-sm text-white">info@tehnoprofi.ru</a>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-1">Наш телефон:</p>
            <a href="tel:+74952928238" className="text-sm text-white">+7 (495) 292-82-38</a>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-1">Наш адрес:</p>
            <p className="text-sm text-white">ул. Ленина, д. 52, п. 1</p>
          </div>
          
          <div className="md:col-span-3 flex flex-col md:flex-row justify-between items-start md:items-center mt-4">
            <a href="/policy" className="text-xs text-gray-400 mb-4 md:mb-0">Политика конфиденциальности</a>
            <Button className="bg-[#F5C400] hover:bg-[#ddb100] text-black">
              Заявка
            </Button>
            <p className="text-xs text-gray-400 mt-4 md:mt-0">Все права защищены © 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
