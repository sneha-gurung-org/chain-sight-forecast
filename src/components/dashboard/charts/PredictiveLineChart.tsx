import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface PredictiveLineChartProps {
  data: Array<{
    week: string;
    predicted: number;
    actual: number | null;
    confidence: number;
  }>;
}

export const PredictiveLineChart = ({ data }: PredictiveLineChartProps) => (
  <Card className="bg-card/50 backdrop-blur-sm border-border/50">
    <CardHeader>
      <CardTitle className="text-foreground">Predictive Analytics</CardTitle>
      <CardDescription>AI-powered demand forecasting and trend analysis</CardDescription>
    </CardHeader>
    <CardContent>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" />
          <YAxis stroke="hsl(var(--muted-foreground))" />
          <Tooltip />
          <Line type="monotone" dataKey="predicted" stroke="hsl(var(--chart-1))" strokeWidth={2} strokeDasharray="5 5" />
          <Line type="monotone" dataKey="actual" stroke="hsl(var(--chart-2))" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);