import ImagePicker from '@/components/meals/image-picker';
import styles from './page.module.css';
import { title } from 'process';
import Meal from '@/interfaces/meal.interface';

export default function ShareMealPage() {
  const shareMel = async (formData: FormData) => {
    'use server';

    const meal: Meal = {
      title: formData.get('title')?.toString()!,
      image: formData.get('image')?.toString()!,
      summary: formData.get('summary')?.toString()!,
      instructions: formData.get('instructions')?.toString()!,
      creator: formData.get('creator')?.toString()!,
      creator_email: formData.get('email')?.toString()!,
    }

    console.log(meal)
  }
  return (
    <>
      <header className={styles.header}>
        <h1>
          Share your <span className={styles.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={styles.main}>
        <form className={styles.form} action={shareMel}>
          <div className={styles.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          <ImagePicker label={'Your image'} name={'image'} />
          <p className={styles.actions}>
            <button type="submit">Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}