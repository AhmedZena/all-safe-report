// models/ReportModel.ts
import { ReportData } from "../types/ReportData";

export class ReportModel {
  // In a real app, you might fetch this data from an API
  static getReportData(): ReportData {
    // Fake JSON data
    const data: ReportData = {
      name: "Will retrieved from database as JSON",
      level: "Level 1",
      grades: {
        A: 90,
        B: 80,
        C: 70,
        D: 60,
        F: 50,
      },
      behavior: {
        cooperative: "Excellent",
        neatAndOrderly: "Good",
        responsible: "Excellent",
      },
      academicPerformance: {
        GermanII: "A",
        SocialStudies: "B",
        WorldHistory: "A",
        Geometry: "B",
        Computer: "A",
        English: "B",
      },
    };
    return data;
  }
}
