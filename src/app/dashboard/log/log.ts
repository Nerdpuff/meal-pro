export type Log = {
  date: Date;
  meals: Meal[];
};

type Meal = {
  type: MealType;
  foods: Food[];
};

type Food = {
  name: string;
  calories: number;
};

export enum MealType {
  Breakfast = 'breakfast',
  Lunch = 'lunch',
  Dinner = 'dinner',
  Snack = 'snack',
  QuickAdd = 'quick-add',
}
