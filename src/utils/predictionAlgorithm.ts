
import { symptoms } from "../data/symptoms";
import { diseases, Disease } from "../data/diseases";

interface DiseaseWithProbability {
  disease: Disease;
  probability: number;
}

export const predictDisease = (selectedSymptomIds: number[]): DiseaseWithProbability[] => {
  if (selectedSymptomIds.length === 0) {
    return [];
  }

  // Calculate probability for each disease
  const diseasesWithProbabilities = diseases.map((disease) => {
    // Count how many of the selected symptoms match this disease
    const matchingSymptoms = disease.symptoms.filter((symptomId) => 
      selectedSymptomIds.includes(symptomId)
    );
    
    const matchingSymptomCount = matchingSymptoms.length;
    const totalDiseaseSymptoms = disease.symptoms.length;
    const totalSelectedSymptoms = selectedSymptomIds.length;
    
    // Calculate probability based on:
    // 1. How many of the disease's symptoms were selected
    // 2. How many of the selected symptoms match the disease
    // 3. The disease's base probability weight
    
    const coverageOfDiseaseSymptoms = matchingSymptomCount / totalDiseaseSymptoms;
    const relevanceOfSelectedSymptoms = matchingSymptomCount / totalSelectedSymptoms;
    
    // Combine these factors into a single probability score
    let probability = (coverageOfDiseaseSymptoms * 0.6 + relevanceOfSelectedSymptoms * 0.4) * disease.probability_weight;
    
    // Adjust probability if too few symptoms are selected
    if (selectedSymptomIds.length < 3) {
      probability *= 0.7; // Reduce confidence if very few symptoms
    }
    
    // Apply minimum threshold to avoid displaying diseases with very low probability
    if (probability < 0.1) {
      probability = 0;
    }
    
    return {
      disease,
      probability: Math.min(Math.round(probability * 100), 100) // Cap at 100% and round to integer
    };
  });

  // Sort by probability (descending) and filter out diseases with zero probability
  return diseasesWithProbabilities
    .filter(item => item.probability > 0)
    .sort((a, b) => b.probability - a.probability);
};
