
import React from 'react';

const MissionGoals = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="text-sm text-gray-500 mb-4">• О КОМПАНИИ</div>
          <h2 className="text-3xl font-bold">О компании «Технопрофи»</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Миссия компании (темно-синяя панель) */}
          <div className="bg-[#1D2A37] text-white rounded-lg overflow-hidden p-8">
            <h3 className="text-xl font-bold mb-4">Миссия компании:</h3>
            <p className="mb-4">
              Максимальное содействие росту производительности, эффективности и безопасности труда, повышению конкурентоспособности промышленных предприятий России
            </p>
          </div>
          
          {/* Цель компании (желтая панель) */}
          <div className="bg-[#F5C400] text-black rounded-lg overflow-hidden p-8">
            <h3 className="text-xl font-bold mb-4">Наша цель:</h3>
            <p className="mb-4">
              Своевременное и бесперебойное снабжение пневматического оборудования и приборов КИПиА, продвижение новых брендов оборудования на российском рынке на оптимальных для потребителей условиях, поставка ушедших из России поставщиков с целью сохранения работоспособности производственного оборудования
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionGoals;
