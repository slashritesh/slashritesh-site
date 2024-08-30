import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(inputDate :string) {
  const date = new Date(inputDate)
  return date.toLocaleDateString("en-US",{
    month : "long",
    day : "numeric",
    year : "numeric"
  })
}