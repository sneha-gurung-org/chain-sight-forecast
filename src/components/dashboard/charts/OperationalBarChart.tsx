import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface OperationalBarChartProps {
  data: Array<{
    month: string;
    delivered: number;
    inTransit: number;
    delayed: number;
    cost: number;
  }>;
}

export const OperationalBarChart = ({ data }: OperationalBarChartProps) => (
  <Card className="bg-card/50 backdrop-blur-sm border-border/50">
    <CardHeader>
      <CardTitle className="text-foreground">Operational Efficiency</CardTitle>
    </CardHeader>
    <CardContent>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
          <YAxis stroke="hsl(var(--muted-foreground))" />
          <Tooltip />
          <Bar dataKey="delivered" fill="hsl(var(--chart-1))" />
          <Bar dataKey="cost" fill="hsl(var(--chart-2))" />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);