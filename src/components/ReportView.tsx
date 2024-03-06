// components/ReportView.tsx
import React from "react";
import { ReportData } from "../types/ReportData";
import {
  StyleSheet,
  Page,
  Text,
  Document,
  View,
  Image,
  Font,
} from "@react-pdf/renderer";
import logo from "../../public/assets/imgs/logo.png";

import { useTranslation } from "react-i18next";

// font
Font.register({
  family: "BodoniFLF",
  src: "../../public/assets/fonts/BodoniFLF-Bold.ttf",
});

Font.register({
  family: "MontserratLight",
  src: "../../public/assets/fonts/Montserrat-light.ttf",
});
Font.register({
  family: "MontserratReg",
  src: "../../public/assets/fonts/Montserrat-ExtraBold.ttf",
});

// Define styles for PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "#46617B", // Solid border color
    borderWidth: 22, // Width of the border
    borderStyle: "solid", // Style of the border (solid, dashed, or dotted)
  },
  section: {
    paddingTop: 5,
    paddingLeft: 50,
    paddingRight: 50,
    flexGrow: 1,
    width: "50%",
  },
  logo: {
    width: 140,
    height: 45,
    alignSelf: "center", // Center the logo in its parent View
    marginBottom: 10,
  },
  logoContainer: {
    flexDirection: "column", // Aligns children (logo) vertically
    alignItems: "center", // Centers children (logo) horizontally
    width: "100%", // Take full width to center content
  },
  title: {
    fontFamily: "BodoniFLF",
    fontSize: 70,
    textAlign: "center",
    marginBottom: 20,
    capitalize: "uppercase",
    color: "#46617B",
  },
  subtitle: {
    fontSize: 18,
    marginTop: 15,
    marginBottom: 12,
    fontWeight: "bold",
    color: "#46617B",
  },
  text: {
    fontFamily: "MontserratLight",
    fontSize: 16,
    paddingLeft: 10,
    fontColor: "#46617B",
    fontWeight: "bold",
    marginBottom: 10,
    borderBottom: 1,
    borderBottomColor: "#46617B",
    borderBottomWidth: 3,
  },

  unorderedList: {
    paddingLeft: 20,
  },
  listItem: {
    fontFamily: "MontserratLight",
    fontSize: 16,
    marginBottom: 10,
  },
  gradingSystemContainer: {
    marginTop: 40,
    marginBottom: 0,
    color: "#46617B",
    padding: 20,
  },
  gradingSystemTitle: {
    fontSize: 15,
    marginBottom: 10,
    fontWeight: "ultrabold",
  },
  gradingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  gradeItem: {
    fontSize: 12,
  },
  header: {
    fontFamily: "MontserratReg",
    fontSize: 14,
    color: "#ffffff",
    backgroundColor: "#46617B",
    padding: 10,
    fontWeight: "ultrabold",
  },
  row: {
    flexDirection: "row",
    border: 2,
    margin: 0,
    borderColor: "#46617B",
    alignItems: "center",
    // minHeight: 30,
    backgroundColor: "#ECEFF2", // This should be the lighter gray from your image
  },
  firstColumn: {
    fontSize: 12,
    textAlign: "left",
    color: "gray",
    paddingHorizontal: 10,
    paddingVertical: 6,
    flexGrow: 3, // First column takes up 3 parts
    borderRight: 1,
    borderRightColor: "#46617B",
    borderRightWidth: 2,
    width: "70%",
  },
  secondColumn: {
    fontSize: 12,
    // textAlign: "right",
    color: "#000",
    paddingHorizontal: 10,
    flexGrow: 1, // Second column takes up 1 part
    width: "30%",
  },
});

interface ReportViewProps {
  data: ReportData;
}

export const ReportView: React.FC<ReportViewProps> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} src={logo} />
          </View>
          <Text style={styles.title}>REPORT</Text>
          {/* <Text style={styles.subtitle}>Student Information</Text> */}
          <Text style={styles.text}>Name: {data.name}</Text>
          <Text style={styles.text}>Level: {data.level}</Text>

          <View style={styles.gradingSystemContainer}>
            <Text style={styles.gradingSystemTitle}>GRADING SYSTEM:</Text>

            {/* looop */}
            <View style={styles.gradingRow}>
              {/* loop on only first three */}
              {Object.entries(data.grades)
                .slice(0, 3)
                .map(([key, value]) => (
                  <Text style={styles.gradeItem}>
                    {key} {value}
                  </Text>
                ))}
            </View>
            <View style={styles.gradingRow}>
              {/* loop on only last three */}
              {Object.entries(data.grades)
                .slice(3, 6)
                .map(([key, value]) => (
                  <Text style={styles.gradeItem}>
                    {key} {value}
                  </Text>
                ))}
            </View>
          </View>

          {/* Behavior Section */}
          <Text style={styles.header}>BEHAVIOR</Text>

          {/* loop */}
          {Object.entries(data.behavior).map(([key, value]) => (
            <View style={[styles.row]}>
              {/* <Text style={styles.firstColumn}>{key}</Text> */}
              <Text style={styles.firstColumn}>{t(key)}</Text>
              <Text style={styles.secondColumn}>{value}</Text>
            </View>
          ))}

          {/* Academics Section */}
          <Text style={styles.header}>ACADEMICS</Text>

          {/* looop */}
          {Object.entries(data.academicPerformance).map(([key, value]) => (
            <View style={[styles.row]}>
              {/* <Text style={styles.firstColumn}>{key}</Text> */}
              <Text style={styles.firstColumn}>{t(key)}</Text>
              <Text style={styles.secondColumn}>{value}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};
