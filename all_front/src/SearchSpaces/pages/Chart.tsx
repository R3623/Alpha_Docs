"use client"

import {
  Line,
  LineChart,
  Bar,
  BarChart,
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts" 
// Using simple divs instead of Card components for deployment
import { TrendingUp, TrendingDown, DollarSign, Users, Activity, BarChart3 } from "lucide-react"
import "../../assets/chart.scss"


// Data for charts
const revenueData = [
  { month: "Jan", revenue: 4500, expenses: 2400, profit: 2100 },
  { month: "Feb", revenue: 5200, expenses: 2800, profit: 2400 },
  { month: "Mar", revenue: 4800, expenses: 2600, profit: 2200 },
  { month: "Apr", revenue: 6100, expenses: 3200, profit: 2900 },
  { month: "May", revenue: 7300, expenses: 3800, profit: 3500 },
  { month: "Jun", revenue: 8200, expenses: 4100, profit: 4100 },
]

const trafficData = [
  { day: "Mon", visitors: 2400, pageViews: 4800 },
  { day: "Tue", visitors: 1398, pageViews: 3200 },
  { day: "Wed", visitors: 9800, pageViews: 12000 },
  { day: "Thu", visitors: 3908, pageViews: 6800 },
  { day: "Fri", visitors: 4800, pageViews: 8200 },
  { day: "Sat", visitors: 3800, pageViews: 6400 },
  { day: "Sun", visitors: 4300, pageViews: 7200 },
]

const categoryData = [
  { name: "Technology", value: 35, color: "#4A90E2" },
  { name: "Marketing", value: 25, color: "#5DADE2" },
  { name: "Sales", value: 20, color: "#85C1E9" },
  { name: "Support", value: 15, color: "#AED6F1" },
  { name: "Other", value: 5, color: "#D6EAF8" },
]

const performanceData = [
  { quarter: "Q1", target: 8000, actual: 7200 },
  { quarter: "Q2", target: 9000, actual: 9500 },
  { quarter: "Q3", target: 10000, actual: 9800 },
  { quarter: "Q4", target: 11000, actual: 11200 },
]

export default function ChartPage() {
  return (
    <div className="chart-page">
      {/* Section Header */}
      <header className="chart-header">
        <div className="chart-header__content">
          <h1 className="chart-header__title">Analytics Dashboard</h1>
          <p className="chart-header__subtitle">Overview of real-time performance and statistics</p>
        </div>
      </header>

      {/* Section KPI Cards */}
      <section className="kpi-section">
        <div className="kpi-section__grid">
          <div className="kpi-card">
            <div className="kpi-card__header">
              <span className="kpi-card__title">Total Revenue</span>
              <div className="kpi-card__icon kpi-card__icon--revenue">
                <DollarSign size={20} />
              </div>
            </div>
            <div className="kpi-card__body">
              <h3 className="kpi-card__value">€36,100</h3>
              <div className="kpi-card__trend kpi-card__trend--up">
                <TrendingUp size={16} />
                <span>+12.5%</span>
              </div>
            </div>
          </div>

          <div className="kpi-card">
            <div className="kpi-card__header">
              <span className="kpi-card__title">Active Users</span>
              <div className="kpi-card__icon kpi-card__icon--users">
                <Users size={20} />
              </div>
            </div>
            <div className="kpi-card__body">
              <h3 className="kpi-card__value">24,506</h3>
              <div className="kpi-card__trend kpi-card__trend--up">
                <TrendingUp size={16} />
                <span>+8.2%</span>
              </div>
            </div>
          </div>

          <div className="kpi-card">
            <div className="kpi-card__header">
              <span className="kpi-card__title">Conversion Rate</span>
              <div className="kpi-card__icon kpi-card__icon--activity">
                <Activity size={20} />
              </div>
            </div>
            <div className="kpi-card__body">
              <h3 className="kpi-card__value">3.8%</h3>
              <div className="kpi-card__trend kpi-card__trend--down">
                <TrendingDown size={16} />
                <span>-2.1%</span>
              </div>
            </div>
          </div>

          <div className="kpi-card">
            <div className="kpi-card__header">
              <span className="kpi-card__title">Performance</span>
              <div className="kpi-card__icon kpi-card__icon--performance">
                <BarChart3 size={20} />
              </div>
            </div>
            <div className="kpi-card__body">
              <h3 className="kpi-card__value">94.2%</h3>
              <div className="kpi-card__trend kpi-card__trend--up">
                <TrendingUp size={16} />
                <span>+5.4%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Revenue Chart */}
      <section className="chart-section">
        <div className="chart-card">
          <div className="chart-card__header">
            <h3 className="chart-card__title">Revenue Analysis</h3>
            <p className="chart-card__description">Comparison of revenue, expenses, and profit over 6 months</p>
          </div>
          <div className="chart-card__content">
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4A90E2" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#4A90E2" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#E74C3C" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#E74C3C" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#5DADE2" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#5DADE2" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E8F4F8" />
                  <XAxis dataKey="month" stroke="#4A90E2" />
                  <YAxis stroke="#4A90E2" />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#fff", border: "1px solid #4A90E2", borderRadius: "8px" }}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#4A90E2"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorRevenue)"
                    name="Revenue"
                  />
                  <Area
                    type="monotone"
                    dataKey="expenses"
                    stroke="#E74C3C"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorExpenses)"
                    name="Expenses"
                  />
                  <Area
                    type="monotone"
                    dataKey="profit"
                    stroke="#5DADE2"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorProfit)"
                    name="Profit"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Section Traffic & Performance */}
      <section className="chart-grid-section">
        <div className="chart-grid-section__grid">
          {/* Traffic Chart */}
          <div className="chart-grid-section__item">
            <div className="chart-card">
                <div className="chart-card__header">
                <h3 className="chart-card__title">Weekly Traffic</h3>
                <p className="chart-card__description">Visitors and page views per day</p>
              </div>
              <div className="chart-card__content">
                <div className="chart-container">
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={trafficData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E8F4F8" />
                      <XAxis dataKey="day" stroke="#4A90E2" />
                      <YAxis stroke="#4A90E2" />
                      <Tooltip
                        contentStyle={{ backgroundColor: "#fff", border: "1px solid #4A90E2", borderRadius: "8px" }}
                      />
                      <Legend />
                      <Bar dataKey="visitors" fill="#4A90E2" radius={[8, 8, 0, 0]} name="Visitors" />
                      <Bar dataKey="pageViews" fill="#85C1E9" radius={[8, 8, 0, 0]} name="Page Views" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Chart */}
          <div className="chart-grid-section__item">
            <div className="chart-card">
                <div className="chart-card__header">
                <h3 className="chart-card__title">Quarterly Performance</h3>
                <p className="chart-card__description">Targets vs Actuals</p>
              </div>
              <div className="chart-card__content">
                <div className="chart-container">
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E8F4F8" />
                      <XAxis dataKey="quarter" stroke="#4A90E2" />
                      <YAxis stroke="#4A90E2" />
                      <Tooltip
                        contentStyle={{ backgroundColor: "#fff", border: "1px solid #4A90E2", borderRadius: "8px" }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="target"
                        stroke="#AED6F1"
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        name="Target"
                      />
                      <Line type="monotone" dataKey="actual" stroke="#4A90E2" strokeWidth={3} name="Actual" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Category Distribution */}
      <section className="chart-section">
        <div className="chart-card">
          <div className="chart-card__header">
            <h3 className="chart-card__title">Category Distribution</h3>
            <p className="chart-card__description">Resource allocation by department</p>
          </div>
          <div className="chart-card__content">
            <div className="chart-container chart-container--centered">
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${((percent ?? 0) * 100).toFixed(0)}%`}
                    outerRadius={120}
                    fill="#4A90E2"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: "#fff", border: "1px solid #4A90E2", borderRadius: "8px" }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="category-legend">
                {categoryData.map((category, index) => (
                  <div key={index} className="category-legend__item">
                    <span className="category-legend__color" style={{ backgroundColor: category.color }}></span>
                    <span className="category-legend__label">{category.name}</span>
                    <span className="category-legend__value">{category.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
