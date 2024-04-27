import Meal from '@/interfaces/meal.interface';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export async function getMeals(): Promise<Meal[]> {
  await new Promise(res => setTimeout(res, 2000));
  return db.prepare('SELECT * FROM meals').all() as Meal[];
}

export async function getMeal(slug: string): Promise<Meal> {
  // await new Promise(res => setTimeout(res, 2000));
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug) as Meal;
}