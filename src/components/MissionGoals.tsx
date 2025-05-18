
import React from "react";

const MissionGoals = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <div className="text-sm text-gray-500 mb-4">• О КОМПАНИИ</div>
          <h2 className="text-3xl font-bold mb-8">
            О компании «Технопрофи»
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Миссия компании - темно-синий блок */}
          <div className="bg-[#1D2A37] text-white rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">Миссия компании:</h3>
            <p className="mb-3">
              Максимальное содействие росту производительности, эффективности и безопасности труда, повышению конкурентоспособности промышленных предприятий России.
            </p>
          </div>

          {/* Наша цель - желтый блок */}
          <div className="bg-[#F5C400] text-[#1D2A37] rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">Наша цель:</h3>
            <p className="mb-3">
              Своевременное в сроки части мирового возрождения пневматического оборудования и приборов КИПиА, продвижение наших брендов оборудования на российском рынке на оптимальных для потребителей условиях, поставка ушедших из России поставщиков с целью сохранения работоспособности производственного оборудования.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionGoals;
