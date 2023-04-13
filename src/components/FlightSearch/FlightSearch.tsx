import React from 'react';
import { Form, Select, DatePicker, InputNumber, Button } from 'antd';
import { FormInstance } from 'antd/lib/form';
import moment from 'moment';
import { Passengers } from '../Passengers';

const { Option } = Select;

// Интерфейс для типизации данных формы
interface FlightSearchFormValues {
  departureAirport: string;
  arrivalAirport: string;
  departureDate: moment.Moment | null;
  returnDate: moment.Moment | null;
  numPassengers: number;
}

const FlightSearch: React.FC = () => {
  // Создание ссылки на экземпляр формы
  const formRef = React.useRef<FormInstance>(null);

  // Обработчик отправки формы
  const handleFormSubmit = (values: FlightSearchFormValues) => {
    // Отправка данных формы на сервер или другую логику поиска билетов
    console.log('Form values:', values);
  };

  return (
    <Form ref={formRef} onFinish={handleFormSubmit}>
      <Form.Item
        name="departureAirport"
        label="Departure Airport"
        rules={[{ required: true, message: 'Please select departure airport' }]}
      >
        <Select placeholder="Select departure airport">
          <Option value="airport1">Airport 1</Option>
          <Option value="airport2">Airport 2</Option>
          {/* Добавьте остальные варианты аэропортов */}
        </Select>
      </Form.Item>
      <Form.Item
        name="arrivalAirport"
        label="Arrival Airport"
        rules={[{ required: true, message: 'Please select arrival airport' }]}
      >
        <Select placeholder="Select arrival airport">
          <Option value="airport3">Airport 3</Option>
          <Option value="airport4">Airport 4</Option>
          {/* Добавьте остальные варианты аэропортов */}
        </Select>
      </Form.Item>
      <Form.Item
        name="departureDate"
        label="Departure Date"
        rules={[{ required: true, message: 'Please select departure date' }]}
      >
        <DatePicker style={{ width: '100%' }} placeholder="Select departure date" />
      </Form.Item>
      <Form.Item
        name="returnDate"
        label="Return Date"
        rules={[{ required: true, message: 'Please select return date' }]}
      >
        <DatePicker style={{ width: '100%' }} placeholder="Select return date" />
      </Form.Item>
      <Form.Item
        name="numPassengers"
        label="Passengers"
        rules={[{ required: true, message: 'Please select number of passengers' }]}
      >
        <InputNumber min={1} placeholder="Select number of passengers" />
        <Passengers numChildren={1} numAdults={2} onChange={() => console.log('123')} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Search Flights
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FlightSearch;
