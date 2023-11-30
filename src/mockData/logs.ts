import { Log, MealType } from 'src/app/dashboard/log/log';

export const mockData: Log[] = [
  {
    date: new Date(),
    meals: [
      {
        type: MealType.Breakfast,
        foods: [
          {
            name: 'Cereal',
            calories: 180,
          },
          {
            name: 'Milk',
            calories: 120,
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
            name: 'Cheeseburger',
            calories: 512,
          },
        ],
      },
    ],
  },
  {
    date: new Date('2022-04-10'),
    meals: [
      {
        type: MealType.Breakfast,
        foods: [
          {
            name: 'Plums',
            calories: 600,
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
      {
        type: MealType.Dinner,
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
    ],
  },
];
