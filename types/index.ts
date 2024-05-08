export enum ERole {
  ROLE_PARENT = "ROLE_PARENT",
  ROLE_TEACHER = "ROLE_TEACHER",
  ROLE_ADMIN = "ROLE_ADMIN",
}

export interface Role {
  id: string;
  name: ERole;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  password: string;
  roles: Role[];
}

export interface Student {
  id: string;
  firstname: string;
  lastname: string;
  school_level: string;
}

export interface Parent {
  id: string;
  user: User;
  children: Student[];
}

export interface Teacher {
  id: string;
  user: User;
}

export interface Quiz {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface Course {
  id: string;
  videoUrl: string;
  pdfUrl: string;
  name: string;
  term: number;
  schoolLevel: string;
  subject: string;
  dateOfCreation: string;
  teacher: Teacher;
  quizzes?: Quiz[];
}
