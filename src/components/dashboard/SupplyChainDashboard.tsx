import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { 
  Truck, 
  Package, 
  AlertTriangle, 
  TrendingUp, 
  TrendingDown,
  MapPin, 
  Clock,
  BarChart3,
  Activity,
  Calendar,
  CheckCircle2,
  CircleDot,
  PlayCircle,
  XCircle,
  Filter,
  RefreshCw,
  Download,
  Settings,
  Users,
  DollarSign,
  Globe,
  Zap,
  Shield,
  Target
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  RadialBar
} from 'recharts';

// Enhanced mock data
const shipmentData = [
  { month: 'Jan', delivered: 850, inTransit: 120, delayed: 30, cost: 125000 },
  { month: 'Feb', delivered: 920, inTransit: 140, delayed: 25, cost: 135000 },
  { month: 'Mar', delivered: 780, inTransit: 160, delayed: 45, cost: 115000 },
  { month: 'Apr', delivered: 1100, inTransit: 180, delayed: 20, cost: 155000 },
  { month: 'May', delivered: 1200, inTransit: 150, delayed: 35, cost: 165000 },
  { month: 'Jun', delivered: 1050, inTransit: 170, delayed: 28, cost: 145000 }
];

const predictiveData = [
  { week: 'W1', predicted: 280, actual: 275, confidence: 95 },
  { week: 'W2', predicted: 320, actual: 310, confidence: 92 },
  { week: 'W3', predicted: 290, actual: 295, confidence: 88 },
  { week: 'W4', predicted: 350, actual: null, confidence: 85 },
  { week: 'W5', predicted: 380, actual: null, confidence: 82 },
  { week: 'W6', predicted: 340, actual: null, confidence: 79 }
];

const regionData = [
  { name: 'North America', value: 35, volume: 4200, growth: 12.5, color: 'hsl(var(--chart-1))' },
  { name: 'Europe', value: 28, volume: 3360, growth: 8.3, color: 'hsl(var(--chart-2))' },
  { name: 'Asia Pacific', value: 22, volume: 2640, growth: 15.7, color: 'hsl(var(--chart-3))' },
  { name: 'Latin America', value: 15, volume: 1800, growth: -2.1, color: 'hsl(var(--chart-4))' }
];

const performanceData = [
  { name: 'Efficiency', value: 89, target: 85 },
  { name: 'Quality', value: 94, target: 90 },
  { name: 'Speed', value: 82, target: 80 },
  { name: 'Cost', value: 76, target: 75 }
];

const supplierData = [
  { name: 'Supplier A', performance: 94, reliability: 98, risk: 'Low' },
  { name: 'Supplier B', performance: 87, reliability: 92, risk: 'Medium' },
  { name: 'Supplier C', performance: 76, reliability: 85, risk: 'High' },
  { name: 'Supplier D', performance: 91, reliability: 96, risk: 'Low' }
];

const MetricCard = ({ title, value, change, icon: Icon, trend = "up", description, onClick }: any) => (
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

const SupplyChainDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [timeRange, setTimeRange] = useState('6months');
  const [selectedRegion, setSelectedRegion] = useState('all');
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
      {/* Enhanced Header with Controls */}
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
          <Button variant="outline" size="sm" onClick={handleRefresh} disabled={refreshing}>
            <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
          <Button variant="outline" size="sm" onClick={handleExport}>
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Badge variant="secondary" className="bg-success/20 text-success border-success/30">
            <Activity className="h-3 w-3 mr-1" />
            Live • Updated 1 min ago
          </Badge>
        </div>
      </div>

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

        <TabsContent value="overview" className="space-y-6">
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
            {/* Enhanced Shipment Trends */}
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
                  <AreaChart data={shipmentData}>
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

            {/* Performance KPIs */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Performance vs Targets</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Key performance indicators and benchmarks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RadialBarChart data={performanceData} innerRadius="30%" outerRadius="80%">
                    <RadialBar dataKey="value" cornerRadius={10} fill="hsl(var(--chart-1))" />
                    <Tooltip />
                  </RadialBarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Regional Distribution & Alerts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Regional Performance</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Distribution and growth by region
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {regionData.map((region, index) => (
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
          </div>
        </TabsContent>

        <TabsContent value="operations" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Operational Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={shipmentData}>
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

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Live Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 border border-border/50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Truck className="h-4 w-4 text-primary" />
                      <span className="font-medium">Shipment #SC-2024-001</span>
                    </div>
                    <Badge variant="secondary" className="bg-success/20 text-success">In Transit</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 border border-border/50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Package className="h-4 w-4 text-warning" />
                      <span className="font-medium">Shipment #SC-2024-002</span>
                    </div>
                    <Badge variant="secondary" className="bg-warning/20 text-warning">Processing</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">Predictive Analytics</CardTitle>
              <CardDescription>AI-powered demand forecasting and trend analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={predictiveData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip />
                  <Line type="monotone" dataKey="predicted" stroke="hsl(var(--chart-1))" strokeWidth={3} strokeDasharray="5 5" />
                  <Line type="monotone" dataKey="actual" stroke="hsl(var(--chart-3))" strokeWidth={3} />
                  <Line type="monotone" dataKey="confidence" stroke="hsl(var(--chart-2))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="suppliers" className="space-y-6">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">Supplier Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {supplierData.map((supplier, index) => (
                  <div key={index} className="p-4 border border-border/50 rounded-lg space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-foreground">{supplier.name}</h4>
                      <Badge variant={supplier.risk === 'Low' ? 'secondary' : supplier.risk === 'Medium' ? 'default' : 'destructive'}>
                        {supplier.risk} Risk
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Performance</div>
                        <Progress value={supplier.performance} className="mt-1" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Reliability</div>
                        <Progress value={supplier.reliability} className="mt-1" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SupplyChainDashboard;