export interface Course {
  name: string;
  credits: number;
  grade: string | null;
}

export type GradeOption = 'S' | 'A' | 'B' | 'C' | 'D' | 'E' | 'P';

export const gradeValueMap: Record<string, number> = {
  'S': 10,
  'A': 9,
  'B': 8,
  'C': 7,
  'D': 6,
  'E': 4,
  'P': 0,
};

export const initialCourses: Course[] = [
  { name: 'Mathematics for Data Science I', credits: 4, grade: null },
  { name: 'Statistics for Data Science I', credits: 4, grade: null },
  { name: 'Computational Thinking', credits: 4, grade: null },
  { name: 'English I', credits: 4, grade: null },
  { name: 'Mathematics for Data Science II', credits: 4, grade: null },
  { name: 'Statistics for Data Science II', credits: 4, grade: null },
  { name: 'Programming in Python', credits: 4, grade: null },
  { name: 'English II', credits: 4, grade: null },
  { name: 'Database Management Systems', credits: 4, grade: null },
  { name: 'Programming, Data Structures and Algorithms using Python', credits: 4, grade: null },
  { name: 'Modern Application Development I', credits: 4, grade: null },
  { name: 'Modern Application Development I - Project', credits: 2, grade: null },
  { name: 'Programming Concepts using Java', credits: 4, grade: null },
  { name: 'Modern Application Development II', credits: 4, grade: null },
  { name: 'Modern Application Development II - Project', credits: 2, grade: null },
  { name: 'System Commands', credits: 3, grade: null },
  { name: 'Machine Learning Foundations', credits: 4, grade: null },
  { name: 'Business Data Management', credits: 4, grade: null },
  { name: 'Business Data Management - Project', credits: 2, grade: null },
  { name: 'Machine Learning Techniques', credits: 4, grade: null },
  { name: 'Machine Learning Practice', credits: 4, grade: null },
  { name: 'Machine Learning Practice - Project', credits: 2, grade: null },
  { name: 'Business Analytics', credits: 4, grade: null },
  { name: 'Tools in Data Science', credits: 3, grade: null },
];

export const gradeOptions: GradeOption[] = [
  'S', 'A', 'B', 'C', 'D', 'E', 'P'
];