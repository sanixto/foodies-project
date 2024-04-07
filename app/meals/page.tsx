import Link from 'next/link';

export default function MealsPage() {
    return (
        <main>
            <h1>Meals page</h1>
            <p><Link href="/meals/share">Share</Link></p>
            <p><Link href="/">Back to Home</Link></p>
            <ul>
                <li><Link href="/meals/meal-1">Meal 1</Link></li>
                <li><Link href="/meals/meal-2">Meal 2</Link></li>
            </ul>
        </main>
    );
}