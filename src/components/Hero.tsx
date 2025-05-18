
import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center py-24 text-white" style={{ 
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1533630018502-93db8e8ee8e2?q=80&w=2070')",
      minHeight: '500px'
    }}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">«Технопрофи»<br />у надежности есть имя</h1>
          <p className="text-lg mb-8">
            Предлагаем выгодные условия<br />
            по лизинговым сделкам для наших клиентов<br />
            даже на Б/У рефрижераторные и танк-контейнеры
          </p>
          <Button 
            className="bg-[#F5C400] hover:bg-[#ddb100] text-black px-8 py-6 text-base"
          >
            Перейти в каталог
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
