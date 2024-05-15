import { IAsset } from './asset.interface';

export const InitialAssetsList: IAsset[] = [
  {
    id: 1,
    status: 'Waiting',
    delivery_date: new Date('2024-05-10'),
    delivery_address: 'Москва, ул. Тверская, 12',
    name: 'Телевизор',
    weight: 15,
    width: 100,
    height: 70,
  },
  {
    id: 2,
    status: 'In Progress',
    delivery_date: new Date('2024-04-25'),
    delivery_address: 'Санкт-Петербург, Невский проспект, 25',
    name: 'Холодильник',
    weight: 70,
    width: 60,
    height: 180,
  },
  {
    id: 3,
    status: 'Completed',
    delivery_date: new Date('2024-03-15'),
    delivery_address: 'Казань, ул. Баумана, 7',
    name: 'Стиральная машина',
    weight: 50,
    width: 60,
    height: 85,
  },
  {
    id: 4,
    status: 'Waiting',
    delivery_date: new Date('2024-06-01'),
    delivery_address: 'Новосибирск, ул. Ленина, 20',
    name: 'Гардероб',
    weight: 30,
    width: 90,
    height: 180,
  },
  {
    id: 5,
    status: 'Cancelled',
    delivery_date: new Date('2024-02-10'),
    delivery_address: 'Екатеринбург, ул. 8 Марта, 15',
    name: 'Комод',
    weight: 20,
    width: 100,
    height: 80,
  },
  {
    id: 6,
    status: 'In Progress',
    delivery_date: new Date('2024-04-05'),
    delivery_address: 'Нижний Новгород, ул. Большая Покровская, 17',
    name: 'Кровать',
    weight: 50,
    width: 200,
    height: 80,
  },
  {
    id: 7,
    status: 'Waiting',
    delivery_date: new Date('2024-06-15'),
    delivery_address: 'Краснодар, ул. Красная, 55',
    name: 'Диван',
    weight: 70,
    width: 220,
    height: 90,
  },
  {
    id: 8,
    status: 'Completed',
    delivery_date: new Date('2024-03-20'),
    delivery_address: 'Владивосток, ул. Светланская, 10',
    name: 'Шкаф',
    weight: 60,
    width: 120,
    height: 200,
  },
  {
    id: 9,
    status: 'Waiting',
    delivery_date: new Date('2024-05-20'),
    delivery_address: 'Ростов-на-Дону, ул. Станиславского, 30',
    name: 'Кресло',
    weight: 20,
    width: 80,
    height: 100,
  },
  {
    id: 10,
    status: 'Cancelled',
    delivery_date: new Date('2024-02-28'),
    delivery_address: 'Новгород, ул. Большая Московская, 15',
    name: 'Кофейный столик',
    weight: 10,
    width: 50,
    height: 50,
  },
  {
    id: 11,
    status: 'Waiting',
    delivery_date: new Date('2024-06-10'),
    delivery_address: 'Самара, ул. Ленинградская, 15',
    name: 'Пианино',
    weight: 300,
    width: 150,
    height: 120,
  },
  {
    id: 12,
    status: 'In Progress',
    delivery_date: new Date('2024-05-05'),
    delivery_address: 'Омск, ул. Ленина, 5',
    name: 'Стол кухонный',
    weight: 20,
    width: 80,
    height: 75,
  },
  {
    id: 13,
    status: 'Completed',
    delivery_date: new Date('2024-04-15'),
    delivery_address: 'Новосибирск, ул. Красный проспект, 30',
    name: 'Библиотека',
    weight: 100,
    width: 250,
    height: 220,
  },
  {
    id: 14,
    status: 'Waiting',
    delivery_date: new Date('2024-07-01'),
    delivery_address: 'Воронеж, ул. Плехановская, 19',
    name: 'Садовые качели',
    weight: 40,
    width: 200,
    height: 150,
  },
  {
    id: 15,
    status: 'Cancelled',
    delivery_date: new Date('2024-03-01'),
    delivery_address: 'Челябинск, ул. Ленина, 42',
    name: 'Кабинетный стол',
    weight: 50,
    width: 150,
    height: 80,
  },
  {
    id: 16,
    status: 'In Progress',
    delivery_date: new Date('2024-06-25'),
    delivery_address: 'Пермь, ул. Мира, 10',
    name: 'Кресло-мешок',
    weight: 5,
    width: 80,
    height: 120,
  },
  {
    id: 17,
    status: 'Waiting',
    delivery_date: new Date('2024-07-15'),
    delivery_address: 'Иркутск, ул. Карла Маркса, 60',
    name: 'Стеллаж',
    weight: 60,
    width: 100,
    height: 200,
  },
  {
    id: 18,
    status: 'Completed',
    delivery_date: new Date('2024-04-05'),
    delivery_address: 'Тверь, ул. Советская, 22',
    name: 'Детская кроватка',
    weight: 15,
    width: 120,
    height: 100,
  },
  {
    id: 19,
    status: 'Waiting',
    delivery_date: new Date('2024-07-10'),
    delivery_address: 'Брянск, ул. Брянская, 2',
    name: 'Барбекю',
    weight: 70,
    width: 60,
    height: 100,
  },
  {
    id: 20,
    status: 'Cancelled',
    delivery_date: new Date('2024-03-20'),
    delivery_address: 'Красноярск, пр-т Мира, 15',
    name: 'Спальня',
    weight: 200,
    width: 250,
    height: 220,
  },
  {
    id: 21,
    status: 'Waiting',
    delivery_date: new Date('2024-08-15'),
    delivery_address: 'Екатеринбург, ул. Малышева, 30',
    name: 'Бильярдный стол',
    weight: 250,
    width: 250,
    height: 100,
  },
  {
    id: 22,
    status: 'In Progress',
    delivery_date: new Date('2024-06-20'),
    delivery_address: 'Казань, ул. Баумана, 45',
    name: 'Холодильник',
    weight: 90,
    width: 80,
    height: 180,
  },
  {
    id: 23,
    status: 'Completed',
    delivery_date: new Date('2024-05-10'),
    delivery_address: 'Уфа, ул. Октябрьской революции, 25',
    name: 'Диван',
    weight: 60,
    width: 220,
    height: 90,
  },
  {
    id: 24,
    status: 'Waiting',
    delivery_date: new Date('2024-09-01'),
    delivery_address: 'Краснодар, ул. Красная, 50',
    name: 'Торговый павильон',
    weight: 800,
    width: 500,
    height: 400,
  },
  {
    id: 25,
    status: 'Cancelled',
    delivery_date: new Date('2024-04-25'),
    delivery_address: 'Рязань, ул. Есенина, 15',
    name: 'Кухонный гарнитур',
    weight: 120,
    width: 300,
    height: 210,
  },
  {
    id: 26,
    status: 'In Progress',
    delivery_date: new Date('2024-07-20'),
    delivery_address: 'Саратов, ул. Московская, 27',
    name: 'Спортивный инвентарь',
    weight: 30,
    width: 150,
    height: 120,
  },
  {
    id: 27,
    status: 'Waiting',
    delivery_date: new Date('2024-08-05'),
    delivery_address: 'Волгоград, ул. Ленина, 18',
    name: 'Библиотечный шкаф',
    weight: 120,
    width: 200,
    height: 220,
  },
  {
    id: 28,
    status: 'Completed',
    delivery_date: new Date('2024-06-30'),
    delivery_address: 'Чебоксары, пр-т Тракторостроителей, 10',
    name: 'Ванная комната',
    weight: 200,
    width: 300,
    height: 200,
  },
  {
    id: 29,
    status: 'Waiting',
    delivery_date: new Date('2024-09-15'),
    delivery_address: 'Астрахань, ул. Бабушкина, 8',
    name: 'Палатка',
    weight: 10,
    width: 150,
    height: 100,
  },
  {
    id: 30,
    status: 'Cancelled',
    delivery_date: new Date('2024-05-25'),
    delivery_address: 'Смоленск, ул. Дзержинского, 7',
    name: 'Компьютерное кресло',
    weight: 25,
    width: 60,
    height: 100,
  },
];