
import React, { useState, useEffect } from 'react';
import { symptoms } from '../data/symptoms';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check, X, Search } from 'lucide-react';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command';
import VoiceInput from './VoiceInput';

interface SymptomSelectorProps {
  selectedSymptoms: number[];
  setSelectedSymptoms: React.Dispatch<React.SetStateAction<number[]>>;
}

const SymptomSelector: React.FC<SymptomSelectorProps> = ({
  selectedSymptoms,
  setSelectedSymptoms
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  const filteredSymptoms = symptoms.filter(symptom => 
    symptom.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    symptom.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSymptom = (symptomId: number) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptomId)
        ? prev.filter(id => id !== symptomId)
        : [...prev, symptomId]
    );
  };

  const clearSelection = () => {
    setSelectedSymptoms([]);
  };

  const handleVoiceResult = (text: string) => {
    setSearchTerm(text.toLowerCase());
    setIsCommandOpen(true);
  };

  useEffect(() => {
    if (searchTerm) {
      setIsCommandOpen(true);
    }
  }, [searchTerm]);

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <CardTitle>Select Your Symptoms</CardTitle>
        <CardDescription>
          Choose all symptoms that you're currently experiencing
        </CardDescription>
        <div className="flex items-center gap-2 mt-2">
          <div className="relative flex-1">
            <Input
              placeholder="Search symptoms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-secondary pr-8"
            />
            <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
          <VoiceInput onResult={handleVoiceResult} />
          {selectedSymptoms.length > 0 && (
            <Button 
              variant="outline" 
              onClick={clearSelection}
              size="icon"
              className="shrink-0"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        {selectedSymptoms.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {selectedSymptoms.map(id => {
              const symptom = symptoms.find(s => s.id === id);
              return (
                <Badge 
                  key={id} 
                  variant="secondary"
                  className="flex items-center gap-1 pr-1"
                >
                  {symptom?.name}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-4 w-4"
                    onClick={() => toggleSymptom(id)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              );
            })}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {filteredSymptoms.map(symptom => (
              <Button
                key={symptom.id}
                variant={selectedSymptoms.includes(symptom.id) ? "default" : "outline"}
                className={`h-auto py-2 px-3 justify-start text-left ${
                  selectedSymptoms.includes(symptom.id) 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-foreground hover:bg-muted"
                }`}
                onClick={() => toggleSymptom(symptom.id)}
              >
                <div className="flex items-center gap-2">
                  {selectedSymptoms.includes(symptom.id) && (
                    <Check className="h-4 w-4 shrink-0" />
                  )}
                  <div>
                    <div className="font-medium">{symptom.name}</div>
                    <div className="text-xs opacity-80 line-clamp-1">{symptom.description}</div>
                  </div>
                </div>
              </Button>
            ))}
            {filteredSymptoms.length === 0 && (
              <div className="col-span-full py-10 text-center text-muted-foreground">
                No symptoms found matching "{searchTerm}"
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default SymptomSelector;
