import { IOption } from 'src/app/components/ui/select/select.component';

export const statusOptions: IOption<string>[] = [
  {
    caption: 'Работает',
    value: 'Works',
  },
  {
    caption: 'Ожидает',
    value: 'Waits',
  },
  {
    caption: 'На ремонте',
    value: 'Repairs',
  },
  {
    caption: 'Утилизирован',
    value: 'Utilized',
  },
];
