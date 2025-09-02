import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface SupplierData {
  name: string;
  performance: number;
  reliability: number;
  risk: string;
}

interface SuppliersListProps {
  data: SupplierData[];
}

export const SuppliersList = ({ data }: SuppliersListProps) => (
  <Card className="bg-card/50 backdrop-blur-sm border-border/50">
    <CardHeader>
      <CardTitle className="text-foreground">Supplier Performance</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {data.map((supplier, index) => (
          <div key={index} className="p-4 border border-border/50 rounded-lg space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="font-medium text-foreground">{supplier.name}</h4>
              <Badge variant={supplier.risk === 'Low' ? 'secondary' : supplier.risk === 'Medium' ? 'default' : 'destructive'}>
                {supplier.risk} Risk
              </Badge>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-muted-foreground">Performance</div>
                <Progress value={supplier.performance} className="mt-1" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Reliability</div>
                <Progress value={supplier.reliability} className="mt-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);