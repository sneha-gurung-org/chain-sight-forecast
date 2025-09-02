import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ShipmentTrendsChartProps {
  data: Array<{
    month: string;
    delivered: number;
    inTransit: number;
    delayed: number;
    cost: number;
  }>;
}

export const ShipmentTrendsChart = ({ data }: ShipmentTrendsChartProps) => (
  <Card className="bg-card/50 backdrop-blur-sm border-border/50">
    <CardHeader className="flex flex-row items-center justify-between">
      <div>
        <CardTitle className="text-foreground">Shipment Performance Trends</CardTitle>
        <CardDescription className="text-muted-foreground">
          Monthly delivery status and cost analysis
        </CardDescription>
      </div>
      <Button variant="ghost" size="sm">
        <Filter className="h-4 w-4" />
      </Button>
    </CardHeader>
    <CardContent>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
          <YAxis stroke="hsl(var(--muted-foreground))" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--card))', 
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              boxShadow: '0 10px 30px -10px hsl(var(--primary) / 0.3)'
            }} 
          />
          <Area type="monotone" dataKey="delivered" stackId="1" stroke="hsl(var(--chart-1))" fill="hsl(var(--chart-1))" fillOpacity={0.8} />
          <Area type="monotone" dataKey="inTransit" stackId="1" stroke="hsl(var(--chart-2))" fill="hsl(var(--chart-2))" fillOpacity={0.6} />
          <Area type="monotone" dataKey="delayed" stackId="1" stroke="hsl(var(--chart-5))" fill="hsl(var(--chart-5))" fillOpacity={0.4} />
        </AreaChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);