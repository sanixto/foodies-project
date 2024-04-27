'use server';

import { redirect } from "next/navigation";

import Meal from "@/interfaces/meal.interface";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text: string) {
  return !text || text.trim() === '';
}

function isInvalidImage(image: File) {
  return !image || image.size === 0;
}

interface FormState {
  message: string | null;
}

export async function shareMeal(prevState: FormState, formData: FormData) {
  'use server';

  const meal: Meal = {
    title: formData.get('title')?.toString()!,
    image: formData.get('image') as File || null,
    summary: formData.get('summary')?.toString()!,
    instructions: formData.get('instructions')?.toString()!,
    creator: formData.get('name')?.toString()!,
    creator_email: formData.get('email')?.toString()!,
  }

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    isInvalidImage(meal.image as File) ||
    !meal.creator_email.includes('@')
  ) {
    return {
        message: 'Invalid input',
    };
  }

  saveMeal(meal);
  revalidatePath('/meals');
  redirect('/meals');
}



