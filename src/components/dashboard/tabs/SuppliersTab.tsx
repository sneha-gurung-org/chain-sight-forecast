import React from 'react';
import { SuppliersList } from '../SuppliersList';

interface SuppliersTabProps {
  supplierData: any[];
}

export const SuppliersTab = ({ supplierData }: SuppliersTabProps) => (
  <div className="space-y-6">
    <SuppliersList data={supplierData} />
  </div>
);