import { IMainMenuLink } from './models';

// Вложенные массивы определяют группы ссылок (группы разделены чертой)
export const mainMenuLinks: IMainMenuLink[][] = [
  [
    {
      href: '/home',
      name: 'Главная',
      description: 'Главная страница CRM',
      spriteId: 'home',
    },
  ],
  [
    {
      href: '/fleet',
      name: 'Обзор',
      description: 'Страница обзора основной информации',
      spriteId: 'fleet',
    },
    {
      href: '/vehicles',
      name: 'Транспорт',
      description: 'Страница обзора списка транспортных средств',
      spriteId: 'vehicles',
    },
    {
      href: '/drivers',
      name: 'Водители',
      description: 'Страница обзора списка водителей',
      spriteId: 'drivers',
    },
    {
      href: '/assets',
      name: 'Грузы',
      description: 'Страница обзора списка перевозимых грузов',
      spriteId: 'assets',
    },
  ],
  [
    {
      href: '/conformity/overview',
      name: 'Сводка',
      description: 'Страница сводки',
      spriteId: 'overview',
    },
    {
      href: '/conformity/logs',
      name: 'Журнал',
      description: 'Страница журнала событий',
      spriteId: 'logs',
    },
  ],
  [
    {
      href: '/maintenance',
      name: 'Обслуживание',
      description: 'Страница обслуживания транспортных средств',
      spriteId: 'maintenance',
    },
  ],
];
