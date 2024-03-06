// types/ReportData.ts
export interface ReportData {
  name: string;
  level: string;
  grades: Grades;
  behavior: Behavior;
  academicPerformance: AcademicPerformance;
}

// arr of numbers
export interface Grades {
  A: number;
  B: number;
  C: number;
  D: number;
  E: number;
  F: number;
}

export interface Behavior {
  cooperative: string;
  neatAndOrderly: string;
  responsible: string;
}

export interface AcademicPerformance {
  GermanII: string;
  SocialStudies: string;
  WorldHistory: string;
  Geometry: string;
  Computer: string;
  English: string;
}
