import Image from 'next/image';

import styles from './page.module.css';
import { getMeal } from '@/lib/meals';

export default async function MealPage({ params }: { params: { mealSlug: string } }) {
  const meal = await getMeal(params.mealSlug);

  meal.instructions = meal.instructions.replace(/\n/g, '<br/>')

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt={''} fill />
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