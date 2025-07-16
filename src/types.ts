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
  //foundation level 1
  { name: 'English I', credits: 4, grade: null },
  { name: 'Computational Thinking', credits: 4, grade: null },
  { name: 'Statistics for Data Science I', credits: 4, grade: null },
  { name: 'Mathematics for Data Science I', credits: 4, grade: null },

  //foundation level 2
  { name: 'English II', credits: 4, grade: null },
  { name: 'Programming in Python', credits: 4, grade: null },
  { name: 'Statistics for Data Science II', credits: 4, grade: null },
  { name: 'Mathematics for Data Science II', credits: 4, grade: null },

  //diploma in programming
  { name: 'Programming, Data Structures and Algorithms using Python', credits: 4, grade: null },
  { name: 'Database Management Systems', credits: 4, grade: null },
  { name: 'Modern Application Development I', credits: 4, grade: null },
  { name: 'Modern Application Development I - Project', credits: 2, grade: null },
  { name: 'Modern Application Development II', credits: 4, grade: null },
  { name: 'Modern Application Development II - Project', credits: 2, grade: null },
  { name: 'Programming Concepts using Java', credits: 4, grade: null },
  { name: 'System Commands', credits: 3, grade: null },
  
  //diploma in data science
  { name: 'Machine Learning Foundations', credits: 4, grade: null },
  { name: 'Machine Learning Techniques', credits: 4, grade: null },
  { name: 'Machine Learning Practice', credits: 4, grade: null },
  { name: 'Machine Learning Practice - Project', credits: 2, grade: null },
  { name: 'Business Data Management', credits: 4, grade: null },
  { name: 'Business Data Management - Project', credits: 2, grade: null },
  { name: 'Business Analytics', credits: 4, grade: null },
  { name: 'Tools in Data Science', credits: 3, grade: null },

  //degree
  { name: 'Software Engineering', credits: 4, grade: null },
  { name: 'Software Testing', credits: 4, grade: null },
  { name: 'AI: Search Methods for Problem Solving', credits: 4, grade: null },
  { name: 'Deep Learning', credits: 4, grade: null },
  { name: 'Strategies for Professional Growth', credits: 4, grade: null },
  { name: 'Algorithmic Thinking in Bioinformatics', credits: 4, grade: null },
  { name: 'Big Data and Biological Networks', credits: 4, grade: null },
  { name: 'Data Visualization Design', credits: 4, grade: null },
  { name: 'Special topics in Machine Learning (Reinforcement Learning)', credits: 4, grade: null },
  { name: 'Speech Technology', credits: 4, grade: null },
  { name: 'Design Thinking for Data-Driven App Development', credits: 4, grade: null },
  { name: 'Industry 4.0', credits: 4, grade: null },
  { name: 'Sequential Decision Making', credits: 4, grade: null },
  { name: 'Market Research', credits: 4, grade: null },
  { name: 'Privacy & Security in Online Social Media', credits: 4, grade: null },
  { name: 'Introduction to Big Data', credits: 4, grade: null },
  { name: 'Financial Forensics', credits: 4, grade: null },
  { name: 'Linear Statistical Models', credits: 4, grade: null },
  { name: 'Advanced Algorithms', credits: 4, grade: null },
  { name: 'Statistical Computing', credits: 4, grade: null },
  { name: 'Computer Systems Design', credits: 4, grade: null },
  { name: 'Programming in C', credits: 4, grade: null },
  { name: 'Mathematical Thinking', credits: 4, grade: null },
  { name: 'Large Language Models', credits: 4, grade: null },
  { name: 'Introduction to Natural Language Processing (i-NLP)', credits: 4, grade: null },
  { name: 'Deep Learning for Computer Vision', credits: 4, grade: null },
  { name: 'Managerial Economics', credits: 4, grade: null },
  { name: 'Game Theory and Strategy', credits: 4, grade: null },
  { name: 'Corporate Finance', credits: 4, grade: null },
  { name: 'Deep Learning Practice', credits: 4, grade: null },
  { name: 'Operating Systems', credits: 4, grade: null },
  { name: 'Mathematical Foundations of Generative AI', credits: 4, grade: null },
  { name: 'Algorithms for Data Science (ADS)', credits: 4, grade: null },
  { name: 'Machine Learning Operations (MLOps)', credits: 4, grade: null },
];

export const gradeOptions: GradeOption[] = [
  'S', 'A', 'B', 'C', 'D', 'E', 'P'
];