import Link from 'next/link';
import Image from 'next/image';

import styles from './meal-item.module.css';
import Meal from '@/interfaces/meal.interface';

export default function MealItem({ title, slug, image, summary, creator }: Meal) {
  return (
    <article className={styles.meal}>
      <header>
        <div className={styles.image}>
          <Image src={`https://${process.env.AWS_IMAGES_HOSTNAME}/${image}`} alt={title} fill />
        </div>
        <div className={styles.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}