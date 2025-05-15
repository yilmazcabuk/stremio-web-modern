/** biome-ignore-all lint/nursery/noUnresolvedImports: <shadcn UI default configuration> */
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
