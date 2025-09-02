import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  trend?: 'up' | 'down';
  description: string;
  onClick?: () => void;
}

export const MetricCard = ({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  trend = "up", 
  description, 
  onClick 
}: MetricCardProps) => (
  <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 cursor-pointer group" onClick={onClick}>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{title}</CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold text-foreground">{value}</div>
      <div className="flex items-center text-xs text-muted-foreground">
        {trend === 'up' ? (
          <TrendingUp className="mr-1 h-3 w-3 text-success" />
        ) : (
          <TrendingDown className="mr-1 h-3 w-3 text-danger" />
        )}
        <span className={trend === 'up' ? 'text-success' : 'text-danger'}>{change}</span>
        <span className="ml-1">{description}</span>
      </div>
    </CardContent>
  </Card>
);