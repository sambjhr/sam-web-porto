import { PROJECTS } from "./projects";

/**
 * Single source of truth for the headline numbers.
 * Jumbotron stats and the About section both read from here so they stay in sync.
 */

export const FREELANCE_START_YEAR = 2023;

export const YEARS_FREELANCING =
  new Date().getFullYear() - FREELANCE_START_YEAR;

export const PROJECTS_DELIVERED = PROJECTS.length;

/** Display label for total participants trained across all training programs. */
export const STUDENTS_TRAINED_LABEL = "3,5k+";

export const GPA = "3.78";
