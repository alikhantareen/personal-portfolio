import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/Ali Iftikhar.pdf";
  link.download = "Ali_Iftikhar_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
