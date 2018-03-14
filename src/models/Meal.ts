export interface Meal {
  title: string,
  image: string,
  ingredients: Array<{name: string, serving: number}>
}