import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import styles from './page.module.css';
import { getMeal } from '@/lib/meals';

export async function generateMetadata({ params }: { params: { mealSlug: string } }): Promise<Metadata> {
  const meal = await getMeal(params.mealSlug);
  if (!meal) notFound();

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default async function MealPage({ params }: { params: { mealSlug: string } }) {
  const meal = await getMeal(params.mealSlug);

  if (!meal) notFound();

  meal.instructions = meal.instructions.replace(/\n/g, '<br/>')

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={`https://${process.env.AWS_IMAGES_HOSTNAME}/${meal.image}`} alt={meal.title} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
            <p className={styles.summary}>{meal.summary}</p>
          </p>
        </div>
      </header>
      <main className={styles.main}>
        <p className={styles.instructions} dangerouslySetInnerHTML={{
          __html: meal.instructions,
        }}
        ></p>
      </main>
    </>
  );
}