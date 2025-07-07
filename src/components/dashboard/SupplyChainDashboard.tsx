import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { 
  Truck, 
  Package, 
  AlertTriangle, 
  TrendingUp, 
  MapPin, 
  Clock,
  BarChart3,
  Activity
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
  Cell
} from 'recharts';

// Mock data compatible with PowerBI data models
const shipmentData = [
  { month: 'Jan', delivered: 850, inTransit: 120, delayed: 30 },
  { month: 'Feb', delivered: 920, inTransit: 140, delayed: 25 },
  { month: 'Mar', delivered: 780, inTransit: 160, delayed: 45 },
  { month: 'Apr', delivered: 1100, inTransit: 180, delayed: 20 },
  { month: 'May', delivered: 1200, inTransit: 150, delayed: 35 },
  { month: 'Jun', delivered: 1050, inTransit: 170, delayed: 28 }
];

const predictiveData = [
  { week: 'W1', predicted: 280, actual: 275 },
  { week: 'W2', predicted: 320, actual: 310 },
  { week: 'W3', predicted: 290, actual: 295 },
  { week: 'W4', predicted: 350, actual: null },
  { week: 'W5', predicted: 380, actual: null },
  { week: 'W6', predicted: 340, actual: null }
];

const regionData = [
  { name: 'North America', value: 35, color: 'hsl(215, 90%, 60%)' },
  { name: 'Europe', value: 28, color: 'hsl(25, 95%, 53%)' },
  { name: 'Asia Pacific', value: 22, color: 'hsl(142, 76%, 36%)' },
  { name: 'Latin America', value: 15, color: 'hsl(271, 91%, 65%)' }
];

const MetricCard = ({ title, value, change, icon: Icon, trend = "up", description }: any) => (
  <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold text-foreground">{value}</div>
      <div className="flex items-center text-xs text-muted-foreground">
        <TrendingUp className={`mr-1 h-3 w-3 ${trend === 'up' ? 'text-success' : 'text-danger'}`} />
        <span className={trend === 'up' ? 'text-success' : 'text-danger'}>{change}</span>
        <span className="ml-1">{description}</span>
      </div>
    </CardContent>
  </Card>
);

const SupplyChainDashboard = () => {
  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Supply Chain Analytics</h1>
          <p className="text-muted-foreground mt-1">Real-time visibility and predictive insights</p>
        </div>
        <Badge variant="secondary" className="bg-success/20 text-success border-success/30">
          Live Data • Updated 2 min ago
        </Badge>
      </div>

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
          title="Risk Alerts"
          value="8"
          change="-23%"
          icon={AlertTriangle}
          trend="down"
          description="active issues"
        />
        <MetricCard
          title="Cost Efficiency"
          value="$2.4M"
          change="+8.3%"
          icon={BarChart3}
          description="saved this quarter"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Shipment Trends */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Shipment Performance Trends</CardTitle>
            <CardDescription className="text-muted-foreground">
              Monthly delivery status tracking
            </CardDescription>
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
                    borderRadius: '8px'
                  }} 
                />
                <Area type="monotone" dataKey="delivered" stackId="1" stroke="hsl(var(--chart-1))" fill="hsl(var(--chart-1))" fillOpacity={0.6} />
                <Area type="monotone" dataKey="inTransit" stackId="1" stroke="hsl(var(--chart-2))" fill="hsl(var(--chart-2))" fillOpacity={0.6} />
                <Area type="monotone" dataKey="delayed" stackId="1" stroke="hsl(var(--chart-5))" fill="hsl(var(--chart-5))" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Predictive Analytics */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Demand Prediction vs Actual</CardTitle>
            <CardDescription className="text-muted-foreground">
              AI-powered forecasting accuracy
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={predictiveData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Line type="monotone" dataKey="predicted" stroke="hsl(var(--chart-1))" strokeWidth={3} strokeDasharray="5 5" />
                <Line type="monotone" dataKey="actual" stroke="hsl(var(--chart-3))" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Regional Distribution */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Regional Distribution</CardTitle>
            <CardDescription className="text-muted-foreground">
              Shipment volume by region
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={regionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {regionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Risk Assessment */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Risk Assessment</CardTitle>
            <CardDescription className="text-muted-foreground">
              Supply chain risk factors
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Weather Impact</span>
                <span className="text-warning">Medium</span>
              </div>
              <Progress value={45} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Supplier Reliability</span>
                <span className="text-success">High</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Transportation</span>
                <span className="text-danger">Low</span>
              </div>
              <Progress value={25} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Inventory Levels</span>
                <span className="text-success">Optimal</span>
              </div>
              <Progress value={78} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Recent Alerts */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Recent Alerts</CardTitle>
            <CardDescription className="text-muted-foreground">
              Last 24 hours activity
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Alert className="border-warning/50 bg-warning/10">
              <AlertTriangle className="h-4 w-4 text-warning" />
              <AlertDescription className="text-sm">
                Delay expected for Route #1247 due to port congestion
              </AlertDescription>
            </Alert>
            <Alert className="border-success/50 bg-success/10">
              <Activity className="h-4 w-4 text-success" />
              <AlertDescription className="text-sm">
                Supplier ABC123 performance improved by 15%
              </AlertDescription>
            </Alert>
            <Alert className="border-primary/50 bg-primary/10">
              <MapPin className="h-4 w-4 text-primary" />
              <AlertDescription className="text-sm">
                New warehouse location optimized for East Coast
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SupplyChainDashboard;