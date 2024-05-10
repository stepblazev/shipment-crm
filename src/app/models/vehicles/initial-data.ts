import { IVehicle } from './models/vehicle.interface';

export const InitialVehiclesList: IVehicle[] = [
  {
    id: 1,
    status: 'Waits',
    type: 'Truck',
    make: 'Volvo',
    model: 'FH16',
    year: 2020,
    registration_number: 'EF456GH',
    registration_country: 'SE',
    registration_state: 'Stockholm',
    load_capacity: 20000,
  },
  {
    id: 2,
    status: 'Works',
    type: 'Van',
    make: 'Ford',
    model: 'Transit',
    year: 2018,
    registration_number: 'AB123CD',
    registration_country: 'RU',
    registration_state: 'Moscow',
    load_capacity: 1500,
  },
  {
    id: 3,
    status: 'Repairs',
    type: 'Car',
    make: 'Toyota',
    model: 'Corolla',
    year: 2019,
    registration_number: 'IJ789KL',
    registration_country: 'JP',
    registration_state: 'Tokyo',
  },
  {
    id: 4,
    status: 'Works',
    type: 'Bike',
    make: 'Yamaha',
    model: 'YZF-R3',
    year: 2017,
    registration_number: 'MN123OP',
    registration_country: 'JP',
    registration_state: 'Osaka',
  },
  {
    id: 5,
    status: 'Utilized',
    type: 'Truck',
    make: 'Mercedes-Benz',
    model: 'Actros',
    year: 2021,
    registration_number: 'QR456ST',
    registration_country: 'DE',
    registration_state: 'Berlin',
    load_capacity: 25000,
  },
  {
    id: 6,
    status: 'Waits',
    type: 'Van',
    make: 'Volkswagen',
    model: 'Caddy',
    year: 2022,
    registration_number: 'UV789WX',
    registration_country: 'DE',
    registration_state: 'Hamburg',
    load_capacity: 800,
  },
  {
    id: 7,
    status: 'Repairs',
    type: 'Car',
    make: 'Honda',
    model: 'Civic',
    year: 2016,
    registration_number: 'YZ123AB',
    registration_country: 'US',
    registration_state: 'California',
  },
  {
    id: 8,
    status: 'Works',
    type: 'Truck',
    make: 'MAN',
    model: 'TGX',
    year: 2019,
    registration_number: 'CD456EF',
    registration_country: 'DE',
    registration_state: 'Munich',
    load_capacity: 22000,
  },
  {
    id: 9,
    status: 'Works',
    type: 'Other',
    make: 'Piaggio',
    model: 'Ape',
    year: 2015,
    registration_number: 'GH789IJ',
    registration_country: 'IT',
    registration_state: 'Milan',
    load_capacity: 300,
  },
  {
    id: 10,
    status: 'Repairs',
    type: 'Van',
    make: 'Hyundai',
    model: 'H350',
    year: 2018,
    registration_number: 'KL123MN',
    registration_country: 'KR',
    registration_state: 'Seoul',
    load_capacity: 1000,
  },
];
