import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function handleError(err: Error | string | unknown): void {
  if (err instanceof Error) {
    // This is a native JavaScript error (e.g., TypeError, RangeError)
    console.error(err.message);
    throw new Error(`Error: ${err.message}`);
  } else if (typeof err === 'string') {
    // This is a string error message
    console.error(err);
    throw new Error(`Error: ${err}`);
  } else {
    // This is an unknown type of error
    console.error(err);
    throw new Error(`Unknown error: ${JSON.stringify(err)}`);
  }
}
