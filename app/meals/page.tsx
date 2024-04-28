import Link from 'next/link';
import { Metadata } from 'next';

import styles from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import Meal from '@/interfaces/meal.interface';

export const metadata: Metadata = {
  title: 'All meals',
  description: 'Browse the delicious meals shared by our vibrant community.'
}

export default async function MealsPage() {
  const meals: Meal[] = await getMeals();

  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link  href="/meals/share">
            Share Your Favourite Recipe
          </Link>
        </p>
      </header>
      <main>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}