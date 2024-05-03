export interface IVehicle {
  id: number;
  make: string; // Марка
  model: string; // Модель
  year: number; // Год выпуска
  registration: {
    number: string; // Регистрационный номер
    country: string; // Страна регистрации
    state: string; // Регион регистрации
  };
  vehicleType: 'Truck' | 'Van' | 'Car' | 'Bike' | 'Other'; // Статус: в работе, на ремонте и т.д.
  status: 'Waits' | 'Works' | 'Repairs' | 'NotInUse' | 'Utilized'; // Тип: грузовик, фургон, автомобиль и т.д.
  loadCapacity?: number; // Грузоподъемность в килограммах (необязательное)
}
