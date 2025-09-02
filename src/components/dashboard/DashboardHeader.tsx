import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RefreshCw, Download, Activity } from 'lucide-react';

interface DashboardHeaderProps {
  timeRange: string;
  setTimeRange: (value: string) => void;
  refreshing: boolean;
  onRefresh: () => void;
  onExport: () => void;
}

export const DashboardHeader = ({ 
  timeRange, 
  setTimeRange, 
  refreshing, 
  onRefresh, 
  onExport 
}: DashboardHeaderProps) => (
  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
    <div>
      <h1 className="text-3xl font-bold text-foreground">Supply Chain Command Center</h1>
      <p className="text-muted-foreground mt-1">Real-time visibility and predictive insights across your entire supply network</p>
    </div>
    <div className="flex items-center gap-3">
      <Select value={timeRange} onValueChange={setTimeRange}>
        <SelectTrigger className="w-[140px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="7days">Last 7 days</SelectItem>
          <SelectItem value="30days">Last 30 days</SelectItem>
          <SelectItem value="3months">Last 3 months</SelectItem>
          <SelectItem value="6months">Last 6 months</SelectItem>
          <SelectItem value="1year">Last year</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="outline" size="sm" onClick={onRefresh} disabled={refreshing}>
        <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
        Refresh
      </Button>
      <Button variant="outline" size="sm" onClick={onExport}>
        <Download className="h-4 w-4 mr-2" />
        Export
      </Button>
      <Badge variant="secondary" className="bg-success/20 text-success border-success/30">
        <Activity className="h-3 w-3 mr-1" />
        Live • Updated 1 min ago
      </Badge>
    </div>
  </div>
);