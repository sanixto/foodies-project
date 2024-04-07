import Link from 'next/link';

export default function MealPage({ params }: { params: { mealSlug: string } }) {
    return (
        <main>
            <h1>Meal page</h1>
            <p>{params.mealSlug}</p>
            <Link href="/meals">Back to Meals Page</Link>
        </main>
    );
}