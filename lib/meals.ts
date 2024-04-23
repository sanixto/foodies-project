import Meal from '@/interfaces/meal.interface';
import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals(): Promise<Meal[]> {
  await new Promise(res => setTimeout(res, 2000));
  return db.prepare('SELECT * FROM meals').all() as Meal[];
}