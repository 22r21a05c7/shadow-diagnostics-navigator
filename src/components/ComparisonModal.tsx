
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Disease } from '@/data/diseases';

interface ComparisonModalProps {
  diseases: Array<{disease: Disease; probability: number}>;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ComparisonModal: React.FC<ComparisonModalProps> = ({
  diseases,
  open,
  onOpenChange,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Disease Comparison</DialogTitle>
        </DialogHeader>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Criteria</TableHead>
                {diseases.map((d) => (
                  <TableHead key={d.disease.id}>
                    {d.disease.name} ({d.probability}%)
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Description</TableCell>
                {diseases.map((d) => (
                  <TableCell key={d.disease.id}>{d.disease.description}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Treatment</TableCell>
                {diseases.map((d) => (
                  <TableCell key={d.disease.id}>{d.disease.treatment}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Diet</TableCell>
                {diseases.map((d) => (
                  <TableCell key={d.disease.id}>{d.disease.diet}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Lifestyle</TableCell>
                {diseases.map((d) => (
                  <TableCell key={d.disease.id}>{d.disease.lifestyle}</TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComparisonModal;
