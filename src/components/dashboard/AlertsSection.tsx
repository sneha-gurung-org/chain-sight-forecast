import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Activity, Zap } from 'lucide-react';

export const AlertsSection = () => (
  <Card className="bg-card/50 backdrop-blur-sm border-border/50 lg:col-span-2">
    <CardHeader>
      <CardTitle className="text-foreground flex items-center gap-2">
        <AlertTriangle className="h-5 w-5" />
        Active Alerts & Notifications
      </CardTitle>
      <CardDescription className="text-muted-foreground">
        Real-time system alerts and recommendations
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-3">
      <Alert className="border-warning/50 bg-warning/10">
        <AlertTriangle className="h-4 w-4 text-warning" />
        <AlertDescription className="text-sm">
          <div className="flex justify-between items-center">
            <span>Route #1247 delayed due to port congestion in Los Angeles</span>
            <Button variant="ghost" size="sm">View</Button>
          </div>
        </AlertDescription>
      </Alert>
      <Alert className="border-success/50 bg-success/10">
        <Activity className="h-4 w-4 text-success" />
        <AlertDescription className="text-sm">
          <div className="flex justify-between items-center">
            <span>Supplier ABC123 performance improved by 15% this quarter</span>
            <Button variant="ghost" size="sm">Details</Button>
          </div>
        </AlertDescription>
      </Alert>
      <Alert className="border-primary/50 bg-primary/10">
        <Zap className="h-4 w-4 text-primary" />
        <AlertDescription className="text-sm">
          <div className="flex justify-between items-center">
            <span>AI recommendation: Optimize warehouse layout for 12% efficiency gain</span>
            <Button variant="ghost" size="sm">Apply</Button>
          </div>
        </AlertDescription>
      </Alert>
    </CardContent>
  </Card>
);