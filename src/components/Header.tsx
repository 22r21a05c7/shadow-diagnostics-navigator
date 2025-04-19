
import React from 'react';
import { VitalSignIcon } from './icons/VitalSignIcon';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-card border-b border-border">
      <div className="flex items-center gap-3">
        <VitalSignIcon className="w-8 h-8 text-primary" />
        <h1 className="text-xl font-bold">MediPredict</h1>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Disease Prediction System</span>
      </div>
    </header>
  );
};

export default Header;
