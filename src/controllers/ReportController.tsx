// controllers/ReportController.tsx
import React from "react";
import { ReportModel } from "../models/ReportModel";
import { ReportView } from "../components/ReportView";
import { PDFDownloadLink } from "@react-pdf/renderer";
// import { useTranslation } from "react-i18next";
import styles from "./ReportController.module.css";
export const ReportController: React.FC = () => {
  //   const { t } = useTranslation();
  const reportData = ReportModel.getReportData();

  return (
    <div className={styles.container}>
      <PDFDownloadLink
        document={<ReportView data={reportData} />}
        fileName="report.pdf"
      >
        {/* {({ blob, url, loading, error }) =>
          loading ? t("reportContoller.loading") : t("reportContoller.download")
        } */}
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
    </div>
  );
};
