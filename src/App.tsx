import { PDFViewer } from "@react-pdf/renderer";
import "./App.css";
import Navbar from "./components/Navbar";
import { ReportController } from "./controllers/ReportController";
import { useTranslation } from "react-i18next";
import { ReportView } from "./components/ReportView";
import { ReportData } from "./types/ReportData";

interface ReportViewProps {
  data: ReportData;
}
function App() {
  const { i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  // <div dir={isRTL ? "rtl" : "ltr"}>
  {
    /* <Navbar />
    <div className="App">
      <ReportController />
    </div> */
  }
  return (
    <>
      <Navbar />
      <PDFViewer width={1000} height={600}>
        <ReportView
          data={{
            name: "Ahmed Gamal Zena",
            level: "Grade 10",
            grades: { A: 90, B: 80, C: 70, D: 60, E: 50, F: 40 },
            behavior: {
              cooperative: "Excellent",
              neatAndOrderly: "Good",
              responsible: "Excellent",
            },
            academicPerformance: {
              GermanII: "A",
              SocialStudies: "B",
              WorldHistory: "C",
              Geometry: "A",
              Computer: "B",
              English: "A",
            },
          }}
        />
      </PDFViewer>
    </>
    // </div>
  );
}

export default App;
