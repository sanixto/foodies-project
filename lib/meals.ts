import fs from 'node:fs';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

import Meal from '@/interfaces/meal.interface';

const db = sql('meals.db');

export async function getMeals(): Promise<Meal[]> {
  await new Promise(res => setTimeout(res, 2000));
  return db.prepare('SELECT * FROM meals').all() as Meal[];
}

export async function getMeal(slug: string): Promise<Meal> {
  // await new Promise(res => setTimeout(res, 2000));
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug) as Meal;
}

export async function saveMeal(meal: Meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension: string | undefined = (meal.image as File).name.split('.').pop();
  const fileName: string = `${meal.slug}.${extension}`;

  const stream: fs.WriteStream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await (meal.image as File).arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) throw new Error('Saving image failed!');
  });

  meal.image = `/images/${fileName}`

  db.prepare(`
    INSERT INTO meals
     (slug, title, image, summary, instructions, creator, creator_email)
    VALUES (
      @slug,
      @title,
      @image,
      @summary,
      @instructions,
      @creator,
      @creator_email
    )
  `).run(meal);
}
