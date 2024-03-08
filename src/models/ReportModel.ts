// models/ReportModel.ts
import { ReportData } from "../types/ReportData";

export class ReportModel {
  static async getReportData(): Promise<ReportData> {
    try {
      // Assuming the JSON file is stored in the public directory and named report-data.json
      const response = await fetch("../../public/data/ReportView.json");
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data: ReportData = await response.json();
      return data;
    } catch (error) {
      console.error("There was a problem fetching the report data:", error);
      throw error; // Re-throwing the error for the caller to handle it
    }
  }
}
