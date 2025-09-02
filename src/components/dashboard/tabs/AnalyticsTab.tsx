import React from 'react';
import { PredictiveLineChart } from '../charts/PredictiveLineChart';

interface AnalyticsTabProps {
  predictiveData: any[];
}

export const AnalyticsTab = ({ predictiveData }: AnalyticsTabProps) => (
  <div className="space-y-6">
    <PredictiveLineChart data={predictiveData} />
  </div>
);