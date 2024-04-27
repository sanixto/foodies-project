export default interface Meal {
  id?: string,
  slug?: string,
  title: string,
  image: File | string | null,
  summary: string,
  instructions: string,
  creator: string,
  creator_email: string,
};