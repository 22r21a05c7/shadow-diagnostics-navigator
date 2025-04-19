
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import SymptomSelector from '@/components/SymptomSelector';
import DiseaseResults from '@/components/DiseaseResults';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { predictDisease } from '@/utils/predictionAlgorithm';
import { useToast } from '@/hooks/use-toast';
import ComparisonModal from '@/components/ComparisonModal';
import { BarChart2 } from 'lucide-react';

const Index = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<number[]>([]);
  const [results, setResults] = useState([]);
  const [hasRun, setHasRun] = useState(false);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const { toast } = useToast();

  // Run prediction whenever symptoms change and we have at least one symptom
  useEffect(() => {
    if (selectedSymptoms.length > 0 && hasRun) {
      runPrediction();
    }
  }, [selectedSymptoms]);

  const runPrediction = () => {
    if (selectedSymptoms.length === 0) {
      toast({
        title: "No symptoms selected",
        description: "Please select at least one symptom to get a prediction",
        variant: "destructive",
      });
      return;
    }

    setHasRun(true);
    const predictionResults = predictDisease(selectedSymptoms);
    setResults(predictionResults);

    if (selectedSymptoms.length < 3) {
      toast({
        title: "Limited symptoms",
        description: "For more accurate results, please select at least 3 symptoms",
        variant: "default",
      });
    } else if (predictionResults.length === 0) {
      toast({
        title: "No matches found",
        description: "No diseases matched your symptom combination. Try different symptoms.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Prediction complete",
        description: `Found ${predictionResults.length} potential matches based on your symptoms`,
        variant: "default",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-grow container mx-auto py-6 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <SymptomSelector 
              selectedSymptoms={selectedSymptoms} 
              setSelectedSymptoms={setSelectedSymptoms} 
            />
            
            <div className="flex justify-center gap-4">
              <Button 
                onClick={runPrediction} 
                size="lg"
                className="w-full sm:w-auto"
              >
                Analyze Symptoms
              </Button>
              {results.length > 1 && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsComparisonOpen(true)}
                  className="w-full sm:w-auto"
                >
                  <BarChart2 className="mr-2 h-4 w-4" />
                  Compare Results
                </Button>
              )}
            </div>
          </div>
          
          <div>
            <DiseaseResults results={results} />
          </div>
        </div>
      </main>
      
      <ComparisonModal
        diseases={results}
        open={isComparisonOpen}
        onOpenChange={setIsComparisonOpen}
      />
      
      <Footer />
    </div>
  );
};

export default Index;
