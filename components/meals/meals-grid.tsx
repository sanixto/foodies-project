import Meal from '@/interfaces/meal.interface';
import styles from './meals-grid.module.css';
import MealItem from './meal-item';

export default function MealsGrid({meals}: {meals: Meal[]}) {
  return (
    <ul className={styles.meals}>
      {meals.map(meal => (
        <li key={meal.id}>
            <MealItem {...meal} />
        </li>
    ))}
    </ul>
  );
}