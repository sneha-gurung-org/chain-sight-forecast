import React from 'react';
import { OperationalBarChart } from '../charts/OperationalBarChart';
import { LiveTracking } from '../LiveTracking';

interface OperationsTabProps {
  shipmentData: any[];
}

export const OperationsTab = ({ shipmentData }: OperationsTabProps) => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <OperationalBarChart data={shipmentData} />
      <LiveTracking />
    </div>
  </div>
);