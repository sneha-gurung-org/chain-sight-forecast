import React from 'react';
import { MetricCard } from '../MetricCard';
import { ShipmentTrendsChart } from '../charts/ShipmentTrendsChart';
import { PerformanceRadialChart } from '../charts/PerformanceRadialChart';
import { RegionalPerformance } from '../RegionalPerformance';
import { AlertsSection } from '../AlertsSection';
import { Package, Truck, DollarSign, Shield } from 'lucide-react';

interface OverviewTabProps {
  shipmentData: any[];
  performanceData: any[];
  regionData: any[];
}

export const OverviewTab = ({ shipmentData, performanceData, regionData }: OverviewTabProps) => (
  <div className="space-y-6">
    {/* Key Metrics Row */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard
        title="Total Shipments"
        value="1,247"
        change="+12.5%"
        icon={Package}
        description="from last month"
      />
      <MetricCard
        title="On-Time Delivery"
        value="94.2%"
        change="+2.1%"
        icon={Truck}
        description="vs target 92%"
      />
      <MetricCard
        title="Cost Savings"
        value="$2.4M"
        change="+8.3%"
        icon={DollarSign}
        description="this quarter"
      />
      <MetricCard
        title="Risk Score"
        value="23"
        change="-15%"
        icon={Shield}
        trend="down"
        description="risk points"
      />
    </div>

    {/* Charts Row */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ShipmentTrendsChart data={shipmentData} />
      <PerformanceRadialChart data={performanceData} />
    </div>

    {/* Regional Distribution & Alerts */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <RegionalPerformance data={regionData} />
      <AlertsSection />
    </div>
  </div>
);