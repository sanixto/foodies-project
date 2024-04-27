import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import { S3 } from '@aws-sdk/client-s3';

import Meal from '@/interfaces/meal.interface';

const s3 = new S3({
  region: 'us-east-1'
});
const db = sql('meals.db');

export async function getMeals(): Promise<Meal[]> {
  return db.prepare('SELECT * FROM meals').all() as Meal[];
}

export async function getMeal(slug: string): Promise<Meal> {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug) as Meal;
}

export async function saveMeal(meal: Meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension: string | undefined = (meal.image as File).name.split('.').pop();
  const fileName: string = `${meal.slug}.${extension}`;

  const bufferedImage: ArrayBuffer = await (meal.image as File).arrayBuffer();

  await s3.putObject({
    Bucket: process.env.AWS_IMAGES_BUCKET,
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: (meal.image as unknown as File).type,
  });

  meal.image = fileName;

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
