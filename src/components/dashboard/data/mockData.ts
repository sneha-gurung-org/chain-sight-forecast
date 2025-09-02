// Enhanced mock data
export const shipmentData = [
  { month: 'Jan', delivered: 850, inTransit: 120, delayed: 30, cost: 125000 },
  { month: 'Feb', delivered: 920, inTransit: 140, delayed: 25, cost: 135000 },
  { month: 'Mar', delivered: 780, inTransit: 160, delayed: 45, cost: 115000 },
  { month: 'Apr', delivered: 1100, inTransit: 180, delayed: 20, cost: 155000 },
  { month: 'May', delivered: 1200, inTransit: 150, delayed: 35, cost: 165000 },
  { month: 'Jun', delivered: 1050, inTransit: 170, delayed: 28, cost: 145000 }
];

export const predictiveData = [
  { week: 'W1', predicted: 280, actual: 275, confidence: 95 },
  { week: 'W2', predicted: 320, actual: 310, confidence: 92 },
  { week: 'W3', predicted: 290, actual: 295, confidence: 88 },
  { week: 'W4', predicted: 350, actual: null, confidence: 85 },
  { week: 'W5', predicted: 380, actual: null, confidence: 82 },
  { week: 'W6', predicted: 340, actual: null, confidence: 79 }
];

export const regionData = [
  { name: 'North America', value: 35, volume: 4200, growth: 12.5, color: 'hsl(var(--chart-1))' },
  { name: 'Europe', value: 28, volume: 3360, growth: 8.3, color: 'hsl(var(--chart-2))' },
  { name: 'Asia Pacific', value: 22, volume: 2640, growth: 15.7, color: 'hsl(var(--chart-3))' },
  { name: 'Latin America', value: 15, volume: 1800, growth: -2.1, color: 'hsl(var(--chart-4))' }
];

export const performanceData = [
  { name: 'Efficiency', value: 89, target: 85 },
  { name: 'Quality', value: 94, target: 90 },
  { name: 'Speed', value: 82, target: 80 },
  { name: 'Cost', value: 76, target: 75 }
];

export const supplierData = [
  { name: 'Supplier A', performance: 94, reliability: 98, risk: 'Low' },
  { name: 'Supplier B', performance: 87, reliability: 92, risk: 'Medium' },
  { name: 'Supplier C', performance: 76, reliability: 85, risk: 'High' },
  { name: 'Supplier D', performance: 91, reliability: 96, risk: 'Low' }
];