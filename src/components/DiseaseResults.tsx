import React, { useState } from 'react';
import { Disease } from '../data/diseases';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, ThumbsUp, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pdf } from '@react-pdf/renderer';
import DiseaseReport from './DiseaseReport';

interface DiseaseWithProbability {
  disease: Disease;
  probability: number;
}

interface DiseaseResultsProps {
  results: DiseaseWithProbability[];
}

const DiseaseResults: React.FC<DiseaseResultsProps> = ({ results }) => {
  const [selectedDiseaseId, setSelectedDiseaseId] = useState<number | null>(
    results.length > 0 ? results[0].disease.id : null
  );

  // Find the selected disease details
  const selectedDisease = results.find(item => item.disease.id === selectedDiseaseId);

  const downloadReport = async () => {
    try {
      const blob = await pdf(<DiseaseReport results={results} />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'disease-prediction-report.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  if (results.length === 0) {
    return (
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Disease Prediction Results</CardTitle>
          <CardDescription>
            Select symptoms to see potential diagnoses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="bg-secondary border-secondary">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Please select at least 3 symptoms for more accurate predictions.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Disease Prediction Results</CardTitle>
            <CardDescription>
              Based on your symptoms, here are the possible conditions
            </CardDescription>
          </div>
          {results.length > 0 && (
            <Button variant="outline" size="sm" onClick={downloadReport}>
              <Download className="h-4 w-4 mr-2" />
              Download Report
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-3 h-[500px]">
          {/* Disease List */}
          <div className="border-r border-border md:col-span-1">
            <ScrollArea className="h-[500px]">
              <div className="p-3 space-y-2">
                {results.map((item) => (
                  <div
                    key={item.disease.id}
                    className={`p-3 rounded-md cursor-pointer transition-colors 
                      ${item.disease.id === selectedDiseaseId 
                        ? 'bg-secondary' 
                        : 'hover:bg-secondary/50'
                      }`}
                    onClick={() => setSelectedDiseaseId(item.disease.id)}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-medium">{item.disease.name}</h3>
                      <span className={`text-sm font-semibold
                        ${item.probability > 80 ? 'text-red-400' : 
                          item.probability > 60 ? 'text-amber-400' : 
                          'text-green-400'}`
                      }>
                        {item.probability}%
                      </span>
                    </div>
                    <Progress value={item.probability} className="h-1.5" />
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Disease Details */}
          <div className="md:col-span-2">
            {selectedDisease ? (
              <div className="h-full flex flex-col">
                <div className="p-4 border-b border-border">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">{selectedDisease.disease.name}</h2>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${selectedDisease.probability > 80 ? 'bg-red-400/20 text-red-400' : 
                        selectedDisease.probability > 60 ? 'bg-amber-400/20 text-amber-400' : 
                        'bg-green-400/20 text-green-400'}`
                    }>
                      {selectedDisease.probability}% Match
                    </span>
                  </div>
                  <p className="mt-2 text-muted-foreground">{selectedDisease.disease.description}</p>
                </div>

                <div className="flex-1 overflow-hidden">
                  <Tabs defaultValue="treatment" className="h-full flex flex-col">
                    <div className="border-b border-border px-4">
                      <TabsList className="bg-transparent h-12">
                        <TabsTrigger value="treatment">Treatment</TabsTrigger>
                        <TabsTrigger value="diet">Diet</TabsTrigger>
                        <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
                      </TabsList>
                    </div>
                    <ScrollArea className="flex-1">
                      <TabsContent value="treatment" className="p-4 m-0">
                        <Alert className="bg-secondary border-secondary mb-4">
                          <ThumbsUp className="h-4 w-4" />
                          <AlertDescription>
                            Always consult with a healthcare professional for proper diagnosis and treatment.
                          </AlertDescription>
                        </Alert>
                        <Accordion type="single" collapsible defaultValue="treatment">
                          <AccordionItem value="treatment" className="border-border">
                            <AccordionTrigger className="py-2">Recommended Treatment</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                              {selectedDisease.disease.treatment}
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </TabsContent>
                      <TabsContent value="diet" className="p-4 m-0">
                        <Alert className="bg-secondary border-secondary mb-4">
                          <ThumbsUp className="h-4 w-4" />
                          <AlertDescription>
                            Dietary recommendations should be discussed with a healthcare provider or registered dietitian.
                          </AlertDescription>
                        </Alert>
                        <Accordion type="single" collapsible defaultValue="diet">
                          <AccordionItem value="diet" className="border-border">
                            <AccordionTrigger className="py-2">Dietary Recommendations</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                              {selectedDisease.disease.diet}
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </TabsContent>
                      <TabsContent value="lifestyle" className="p-4 m-0">
                        <Alert className="bg-secondary border-secondary mb-4">
                          <ThumbsUp className="h-4 w-4" />
                          <AlertDescription>
                            Lifestyle modifications should be implemented gradually and with proper medical guidance.
                          </AlertDescription>
                        </Alert>
                        <Accordion type="single" collapsible defaultValue="lifestyle">
                          <AccordionItem value="lifestyle" className="border-border">
                            <AccordionTrigger className="py-2">Lifestyle Modifications</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                              {selectedDisease.disease.lifestyle}
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </TabsContent>
                    </ScrollArea>
                  </Tabs>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-muted-foreground">Select a disease to view details</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DiseaseResults;
