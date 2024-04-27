'use server';

import { redirect } from "next/navigation";

import Meal from "@/interfaces/meal.interface";
import { saveMeal } from "./meals";

export async function shareMeal(formData: FormData) {
  'use server';

  const meal: Meal = {
    title: formData.get('title')?.toString()!,
    image: formData.get('image') as File || null,
    summary: formData.get('summary')?.toString()!,
    instructions: formData.get('instructions')?.toString()!,
    creator: formData.get('name')?.toString()!,
    creator_email: formData.get('email')?.toString()!,
  }

  saveMeal(meal);
  redirect('/meals');
}



