import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface RegionData {
  name: string;
  value: number;
  volume: number;
  growth: number;
  color: string;
}

interface RegionalPerformanceProps {
  data: RegionData[];
}

export const RegionalPerformance = ({ data }: RegionalPerformanceProps) => (
  <Card className="bg-card/50 backdrop-blur-sm border-border/50">
    <CardHeader>
      <CardTitle className="text-foreground">Regional Performance</CardTitle>
      <CardDescription className="text-muted-foreground">
        Distribution and growth by region
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      {data.map((region, index) => (
        <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: region.color }} />
            <div>
              <div className="font-medium text-foreground">{region.name}</div>
              <div className="text-sm text-muted-foreground">{region.volume.toLocaleString()} units</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium text-foreground">{region.value}%</div>
            <div className={`text-sm flex items-center ${region.growth >= 0 ? 'text-success' : 'text-danger'}`}>
              {region.growth >= 0 ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
              {Math.abs(region.growth)}%
            </div>
          </div>
        </div>
      ))}
    </CardContent>
  </Card>
);