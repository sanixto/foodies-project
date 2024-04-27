'use server';

import Meal from "@/interfaces/meal.interface";

export const shareMeal = async (formData: FormData) => {
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



