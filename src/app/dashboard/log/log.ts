export type Log = {
  date: Date;
  meals: Meal[];
};

export type Meal = {
  type: MealType;
  foods: Food[];
};

export type Food = {
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
