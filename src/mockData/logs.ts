import { Log, MealType } from 'src/app/dashboard/log/log';

export const mockData: Log[] = [
  {
    date: new Date('2021-01-01'),
    meals: [
      {
        type: MealType.Breakfast,
        foods: [
          {
            name: 'Pizza',
            calories: 434,
          },
          {
            name: 'Chips',
            calories: 320,
          },
        ],
      },
      {
        type: MealType.Lunch,
        foods: [
          {
            name: 'Apple',
            calories: 95,
          },
        ],
      },
    ],
  },
];
