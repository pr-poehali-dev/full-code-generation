
import React from 'react';

const MissionGoals = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Mission Card */}
          <div className="bg-[#1D2A37] text-white rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">Миссия компании:</h3>
            <p className="text-gray-300 mb-2">
              Максимальное содействие росту производительности, эффективности и безопасности труда, повышению конкурентоспособности промышленных предприятий России.
            </p>
          </div>
          
          {/* Goal Card */}
          <div className="bg-[#F5C400] text-[#1D2A37] rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">Наша цель:</h3>
            <p className="mb-2">
              Своевременное и в срок частей мирового ассортимента пневматического оборудования и приборов КИПиА, продвижение наших брендов оборудования на российском рынке на оптимальных для потребителя условиях, поставка ушедших из России поставщиков с целью сохранения работоспособности производственного оборудования.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionGoals;
