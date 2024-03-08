import React, { useEffect, useState } from "react";
import { ReportModel } from "../models/ReportModel";
import { ReportView } from "../components/ReportView";
import { PDFDownloadLink } from "@react-pdf/renderer";
// import { useTranslation } from "react-i18next";
import styles from "./ReportController.module.css";
import { ReportData } from "../types/ReportData";

export const ReportController: React.FC = () => {
  // const { t } = useTranslation();
  const [reportData, setReportData] = useState<ReportData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        const data = await ReportModel.getReportData();
        setReportData(data);
      } catch (error) {
        console.error("Error fetching report data:", error);
        // Handle the error as per your requirement
      } finally {
        setLoading(false);
      }
    };

    fetchReportData();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <div>Loading report data...</div> // Display a loading message or spinner
      ) : (
        <PDFDownloadLink
          //   document={reportData && <ReportView data={reportData} />}
          document={
            reportData ? (
              <ReportView data={reportData} />
            ) : (
              <div>Loading...</div>
            )
          }
          fileName="report.pdf"
        >
          <button>
            <input className={styles.check} type="checkbox" />
            <div className={styles.btn}>
              <span className={styles.me}>download</span>
              <span className={styles.mo}>
                Hang on a moment, download in progress
              </span>
            </div>
          </button>
        </PDFDownloadLink>
      )}
    </div>
  );
};
