import React from 'react';
import { Select, InputNumber } from 'antd';

const { Option } = Select;

// Интерфейс для типизации данных компонента
interface PassengersProps {
  numAdults: number;
  numChildren: number;
  onChange: (numAdults: number, numChildren: number) => void;
}

const Passengers: React.FC<PassengersProps> = ({ numAdults, numChildren, onChange }) => {
  // Обработчик изменения количества взрослых
  const handleAdultsChange = (value: number) => {
    onChange(value, numChildren);
  };

  // Обработчик изменения количества детей
  const handleChildrenChange = (value: number) => {
    onChange(numAdults, value);
  };

  return (
    <div>
      <label>Adults:</label>
      <Select value={numAdults} onChange={handleAdultsChange}>
        <Option value={1}>1</Option>
        <Option value={2}>2</Option>
        <Option value={3}>3</Option>
        {/* Добавьте остальные варианты количества взрослых */}
      </Select>
      <label style={{ marginLeft: '16px' }}>Children:</label>
      <Select value={numChildren} onChange={handleChildrenChange}>
        <Option value={0}>0</Option>
        <Option value={1}>1</Option>
        <Option value={2}>2</Option>
        {/* Добавьте остальные варианты количества детей */}
      </Select>
      {numChildren > 0 && (
        <div style={{ marginTop: '16px' }}>
          <label>Children Ages:</label>
          {[...Array(numChildren)].map((_, index) => (
            <InputNumber
              key={index}
              min={1}
              max={17}
              placeholder={`Child ${index + 1} Age`}
              style={{ marginLeft: '16px' }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Passengers;
