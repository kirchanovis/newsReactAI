import React from 'react';
import { Radio, RadioChangeEvent } from 'antd';

// Интерфейс для типизации данных компонента
interface FlightClassProps {
  flightClass: string;
  onChange: (flightClass: string) => void;
}

const FlightClass: React.FC<FlightClassProps> = ({ flightClass, onChange }) => {
  // Обработчик изменения выбранного класса полета
  const handleFlightClassChange = (e: RadioChangeEvent) => {
    const selectedClass = e.target.value;
    onChange(selectedClass);
  };

  return (
    <div>
      <label>Flight Class:</label>
      <Radio.Group value={flightClass} onChange={handleFlightClassChange}>
        <Radio.Button value="economy">Economy</Radio.Button>
        <Radio.Button value="premium">Premium</Radio.Button>
        <Radio.Button value="business">Business</Radio.Button>
        <Radio.Button value="first">First</Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default FlightClass;
