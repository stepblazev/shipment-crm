export interface IVehicle {
  id: number;
  status: 'Waits' | 'Works' | 'Repairs' | 'NotInUse' | 'Utilized';
  type: 'Truck' | 'Van' | 'Car' | 'Bike' | 'Other';
  make: string; // Марка
  model: string; // Модель
  year: number; // Год выпуска
  registration_number: string; // Регистрационный номер
  registration_country: string; // Страна регистрации
  registration_state: string; // Регион регистрации
  load_capacity?: number; // Грузоподъемность в килограммах (необязательное)
}
