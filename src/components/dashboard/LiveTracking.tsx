import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Truck, Package } from 'lucide-react';

export const LiveTracking = () => (
  <Card className="bg-card/50 backdrop-blur-sm border-border/50">
    <CardHeader>
      <CardTitle className="text-foreground">Live Tracking</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div className="flex justify-between items-center p-3 border border-border/50 rounded-lg">
          <div className="flex items-center gap-2">
            <Truck className="h-4 w-4 text-primary" />
            <span className="font-medium">Shipment #SC-2024-001</span>
          </div>
          <Badge variant="secondary" className="bg-success/20 text-success">In Transit</Badge>
        </div>
        <div className="flex justify-between items-center p-3 border border-border/50 rounded-lg">
          <div className="flex items-center gap-2">
            <Package className="h-4 w-4 text-warning" />
            <span className="font-medium">Shipment #SC-2024-002</span>
          </div>
          <Badge variant="secondary" className="bg-warning/20 text-warning">Processing</Badge>
        </div>
      </div>
    </CardContent>
  </Card>
);