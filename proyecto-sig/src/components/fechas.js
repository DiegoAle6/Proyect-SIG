import React from 'react';
import dayjs from 'dayjs';

const Fechas = () => {
  const today = dayjs();
  const startOfMonth = today.startOf('month');
  const daysInMonth = today.daysInMonth();
  const currentDate = today.date();
  const currentWeekday = today.day();
  const startDate = startOfMonth.date(1);
  const endDate = startOfMonth.add(1, 'month').date(0);

  const days = Array.from({ length: endDate.date() }, (_, i) => startDate.add(i, 'day'));

  return (
    <div className="p-8 bg-white rounded-xl shadow-md w-[800px] mr-0">
      <div className="flex justify-between mb-6">
        <div className="text-2xl font-bold">Junio 2024</div>
        <div className="flex space-x-2">
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">Anterior</button>
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">Siguiente</button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-4">
        <div className="text-center text-gray-500">Dom</div>
        <div className="text-center text-gray-500">Lun</div>
        <div className="text-center text-gray-500">Mar</div>
        <div className="text-center text-gray-500">Mié</div>
        <div className="text-center text-gray-500">Jue</div>
        <div className="text-center text-gray-500">Vie</div>
        <div className="text-center text-gray-500">Sáb</div>
        {days.map((day, index) => {
          const date = day.format('D');
          const isCurrentDate = date === `${currentDate}`;
          const isInCurrentMonth = day.isSame(startOfMonth, 'month');
          const isPast = day.isBefore(startDate);
          const isFuture = day.isAfter(endDate);

          return (
            <div
              key={index}
              className={`border rounded-md text-center py-1 transition duration-300 ease-in-out transform hover:scale-105 ${
                isPast ? 'opacity-50' : ''
              } ${isFuture ? 'opacity-50' : ''} ${
                isInCurrentMonth ? '' : 'text-gray-400'
              } ${isCurrentDate ? 'bg-blue-500 text-white' : ''}`}
            >
              {date}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fechas;