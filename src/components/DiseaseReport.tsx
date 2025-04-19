
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { Disease } from '../data/diseases';

interface DiseaseWithProbability {
  disease: Disease;
  probability: number;
}

interface DiseaseReportProps {
  results: DiseaseWithProbability[];
}

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  section: {
    marginBottom: 10,
  },
  disease: {
    marginBottom: 15,
  },
  diseaseName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  probability: {
    fontSize: 14,
    marginBottom: 5,
  },
  info: {
    fontSize: 12,
    marginBottom: 3,
  },
  disclaimer: {
    marginTop: 30,
    fontSize: 10,
    color: '#666',
  },
});

export const DiseaseReport = ({ results }: DiseaseReportProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>Disease Prediction Report</Text>
      <View style={styles.section}>
        {results.map((result) => (
          <View key={result.disease.id} style={styles.disease}>
            <Text style={styles.diseaseName}>{result.disease.name}</Text>
            <Text style={styles.probability}>Match Probability: {result.probability}%</Text>
            <Text style={styles.info}>Description: {result.disease.description}</Text>
            <Text style={styles.info}>Treatment: {result.disease.treatment}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.disclaimer}>
        Disclaimer: This report is generated based on reported symptoms and should not be considered as a definitive diagnosis. Please consult with a healthcare professional for proper medical evaluation.
      </Text>
    </Page>
  </Document>
);

export default DiseaseReport;
