import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadialBarChart, RadialBar, Tooltip, ResponsiveContainer } from 'recharts';

interface PerformanceRadialChartProps {
  data: Array<{
    name: string;
    value: number;
    target: number;
  }>;
}

export const PerformanceRadialChart = ({ data }: PerformanceRadialChartProps) => (
  <Card className="bg-card/50 backdrop-blur-sm border-border/50">
    <CardHeader>
      <CardTitle className="text-foreground">Performance vs Targets</CardTitle>
      <CardDescription className="text-muted-foreground">
        Key performance indicators and benchmarks
      </CardDescription>
    </CardHeader>
    <CardContent>
      <ResponsiveContainer width="100%" height={300}>
        <RadialBarChart data={data} innerRadius="30%" outerRadius="80%">
          <RadialBar dataKey="value" cornerRadius={10} fill="hsl(var(--chart-1))" />
          <Tooltip />
        </RadialBarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);