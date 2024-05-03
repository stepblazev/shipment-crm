export interface IDriver {
  id: number;
  login: string;
  first_name: string;
  last_name: string;
  birth_date: Date;
  phone: string;
  email: string;
  license: {
    type: string;
    number: string;
    expire_date: Date;
  };
}

export const DriversList: IDriver[] = [
  {
    id: 1,
    login: 'driver1',
    first_name: 'Иван',
    last_name: 'Иванов',
    birth_date: new Date('1985-04-12'),
    phone: '+79990000001',
    email: 'ivan.ivanov@example.com',
    license: {
      type: 'C',
      number: '123456789',
      expire_date: new Date('2025-07-20'),
    },
  },
  {
    id: 2,
    login: 'driver2',
    first_name: 'Мария',
    last_name: 'Сидорова',
    birth_date: new Date('1990-09-23'),
    phone: '+79990000002',
    email: 'maria.sidorova@example.com',
    license: {
      type: 'D',
      number: '987654321',
      expire_date: new Date('2024-11-15'),
    },
  },
  {
    id: 3,
    login: 'driver3',
    first_name: 'Алексей',
    last_name: 'Петров',
    birth_date: new Date('1980-01-05'),
    phone: '+79990000003',
    email: 'alexey.petrov@example.com',
    license: {
      type: 'B',
      number: '112233445',
      expire_date: new Date('2023-06-10'),
    },
  },
  {
    id: 4,
    login: 'driver4',
    first_name: 'Ольга',
    last_name: 'Кузнецова',
    birth_date: new Date('1995-07-18'),
    phone: '+79990000004',
    email: 'olga.kuznetsova@example.com',
    license: {
      type: 'C',
      number: '445566778',
      expire_date: new Date('2026-02-25'),
    },
  },
  {
    id: 5,
    login: 'driver5',
    first_name: 'Сергей',
    last_name: 'Новиков',
    birth_date: new Date('1975-10-30'),
    phone: '+79990000005',
    email: 'sergey.novikov@example.com',
    license: {
      type: 'D',
      number: '998877665',
      expire_date: new Date('2023-12-15'),
    },
  },
  {
    id: 6,
    login: 'driver6',
    first_name: 'Екатерина',
    last_name: 'Зайцева',
    birth_date: new Date('1988-05-14'),
    phone: '+79990000006',
    email: 'ekaterina.zaytseva@example.com',
    license: {
      type: 'B',
      number: '567890123',
      expire_date: new Date('2024-09-30'),
    },
  },
  {
    id: 7,
    login: 'driver7',
    first_name: 'Андрей',
    last_name: 'Борисов',
    birth_date: new Date('1978-11-22'),
    phone: '+79990000007',
    email: 'andrey.borisov@example.com',
    license: {
      type: 'C',
      number: '321654987',
      expire_date: new Date('2025-08-15'),
    },
  },
  {
    id: 8,
    login: 'driver8',
    first_name: 'Татьяна',
    last_name: 'Смирнова',
    birth_date: new Date('1983-02-19'),
    phone: '+79990000008',
    email: 'tatyana.smirnova@example.com',
    license: {
      type: 'D',
      number: '543216789',
      expire_date: new Date('2026-05-20'),
    },
  },
];
