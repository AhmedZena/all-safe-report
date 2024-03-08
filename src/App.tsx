import { PDFViewer } from "@react-pdf/renderer";
import "./App.css";
import Navbar from "./components/Navbar";
import { ReportController } from "./controllers/ReportController";
import { useTranslation } from "react-i18next";
import { ReportView } from "./components/ReportView";
import { ReportData } from "./types/ReportData"; // Add the correct path to the JSON file
import { useState, useEffect } from "react";

function App() {
  const { i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const [showReport, setShowReport] = useState(false);
  const [reportData, setReportData] = useState<ReportData | null>(null);

  useEffect(() => {
    // Fetch report data from a local JSON file
    const fetchReportData = async () => {
      try {
        const response = await fetch("../public/data/ReportView.json"); // Add the correct path to the JSON file
        if (response.ok) {
          const data = await response.json();
          setReportData(data);
        } else {
          console.error("Error fetching report data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching report data:", error);
      }
    };

    fetchReportData();
  }, []);

  const handleShowReport = () => {
    setShowReport(!showReport);
  };

  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />
      <div className="reprt-view">
        <div className="download-report">
          <ReportController />
        </div>
        <button className="toggle-report" onClick={handleShowReport}>
          {showReport ? "Hide Report" : "Show Report"}
        </button>
        {showReport && reportData && (
          <PDFViewer width={1000} height={600}>
            <ReportView data={reportData} />
          </PDFViewer>
        )}
      </div>
    </div>
  );
}

export default App;
