import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart3, Truck, TrendingUp, Users } from 'lucide-react';

// Import components
import { DashboardHeader } from './DashboardHeader';
import { OverviewTab } from './tabs/OverviewTab';
import { OperationsTab } from './tabs/OperationsTab';
import { AnalyticsTab } from './tabs/AnalyticsTab';
import { SuppliersTab } from './tabs/SuppliersTab';

// Import data
import { 
  shipmentData, 
  predictiveData, 
  regionData, 
  performanceData, 
  supplierData 
} from './data/mockData';

const SupplyChainDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [timeRange, setTimeRange] = useState('6months');
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  const handleExport = () => {
    // Export functionality would go here
    console.log('Exporting data...');
  };

  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      <DashboardHeader
        timeRange={timeRange}
        setTimeRange={setTimeRange}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        onExport={handleExport}
      />

      {/* Interactive Navigation Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="operations" className="flex items-center gap-2">
            <Truck className="h-4 w-4" />
            Operations
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="suppliers" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Suppliers
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <OverviewTab 
            shipmentData={shipmentData}
            performanceData={performanceData}
            regionData={regionData}
          />
        </TabsContent>

        <TabsContent value="operations">
          <OperationsTab shipmentData={shipmentData} />
        </TabsContent>

        <TabsContent value="analytics">
          <AnalyticsTab predictiveData={predictiveData} />
        </TabsContent>

        <TabsContent value="suppliers">
          <SuppliersTab supplierData={supplierData} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SupplyChainDashboard;