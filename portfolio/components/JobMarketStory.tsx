/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect, useMemo } from "react";
import Papa from "papaparse";
// Add this line if you want to use ParseResult without the "Papa." prefix
import type { ParseResult } from "papaparse";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend, AreaChart, Area } from "recharts";
import { Filter, BarChart3, TrendingUp, Info } from 'lucide-react';

interface JobVacancyRow {
  REF_DATE: string;
  GEO: string;
  Statistics: string;
  VALUE: string;
}

export default function JobMarketStory() {
  const [rawData, setRawData] = useState<JobVacancyRow[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Dashboard State (Power BI style filters)
  const [selectedGeo, setSelectedGeo] = useState("Canada");
  const [selectedStat, setSelectedStat] = useState("Job vacancies");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    // Ensure the filename exactly matches: job_vacancies.csv
    Papa.parse("/data/job_vacancies.csv", {
      download: true,
      header: true,
      skipEmptyLines: true,
      // Using 'any' to remove strict typechecks as requested
      complete: (results: any) => {
        if (results.data && results.data.length > 0) {
          setRawData(results.data);
          setError(null);
        } else {
          setError("Audit Failed: CSV is empty or path is incorrect.");
        }
      },
      error: () => setError("System Error: Could not reach CSV file path.")
    });
  }, []);

  // Advanced Filtering & Sorting Logic
  const processedData = useMemo(() => {
    return rawData
      .filter(row => row.GEO === selectedGeo && row.Statistics === selectedStat)
      .map(row => ({
        date: row.REF_DATE,
        value: parseFloat(row.VALUE.replace(/,/g, '')) || 0,
      }))
      .sort((a, b) => {
        return sortOrder === "asc"
          ? a.date.localeCompare(b.date)
          : b.date.localeCompare(a.date);
      });
  }, [rawData, selectedGeo, selectedStat, sortOrder]);

  // Dynamic Metadata for Filters
  const geos = useMemo(() => Array.from(new Set(rawData.map(r => r.GEO))).filter(Boolean), [rawData]);
  const stats = useMemo(() => Array.from(new Set(rawData.map(r => r.Statistics))).filter(Boolean), [rawData]);

  // Metric Calculations
  const latestVal = processedData[processedData.length - 1]?.value || 0;
  const previousVal = processedData[processedData.length - 2]?.value || 0;
  const percentChange = previousVal !== 0 ? ((latestVal - previousVal) / previousVal * 100).toFixed(1) : 0;

  if (error) return <div className="text-red-500 font-mono text-sm p-4 border border-red-900 bg-red-900/10 rounded-xl">{error}</div>;

  return (
    <div className="bg-zinc-900/40 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl overflow-hidden">
      {/* Power BI Header Bar */}
      <div className="p-6 border-b border-white/5 bg-white/5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-white text-xl font-bold flex items-center gap-2">
            <BarChart3 className="text-emerald-500" size={20} />
            National Job Market Intelligence
          </h3>
          <p className="text-zinc-500 text-xs font-mono mt-1 italic">Quarterly Statistics (Unadjusted) — Source: StatCan</p>
        </div>

        {/* Metric Cards */}
        <div className="flex gap-4">
          <div className="bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-xl">
            <span className="text-[10px] text-emerald-500 font-bold uppercase block tracking-wider">Current {selectedStat}</span>
            <span className="text-white font-bold text-lg">{latestVal.toLocaleString()}</span>
          </div>
          <div className={`px-4 py-2 rounded-xl border ${Number(percentChange) >= 0 ? 'bg-blue-500/10 border-blue-500/20' : 'bg-red-500/10 border-red-500/20'}`}>
            <span className={`text-[10px] font-bold uppercase block tracking-wider ${Number(percentChange) >= 0 ? 'text-blue-500' : 'text-red-500'}`}>QoQ Shift</span>
            <span className="text-white font-bold text-lg">{percentChange}%</span>
          </div>
        </div>
      </div>

      {/* Slicer / Filter Panel */}
      <div className="px-6 py-4 bg-black/20 flex flex-wrap gap-6 items-center border-b border-white/5">
        <div className="flex items-center gap-3">
          <Filter size={14} className="text-zinc-500" />
          <select
            value={selectedGeo}
            onChange={(e) => setSelectedGeo(e.target.value)}
            className="bg-zinc-800 border border-white/10 text-zinc-300 text-xs rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-emerald-500 outline-none transition-all cursor-pointer"
          >
            {geos.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>

        <select
          value={selectedStat}
          onChange={(e) => setSelectedStat(e.target.value)}
          className="bg-zinc-800 border border-white/10 text-zinc-300 text-xs rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-emerald-500 outline-none transition-all cursor-pointer"
        >
          {stats.map(s => <option key={s} value={s}>{s}</option>)}
        </select>

        <button
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          className="text-xs font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
        >
          Sort: {sortOrder.toUpperCase()}
        </button>
      </div>

      {/* Advanced Charting Area */}
      <div className="p-8 h-[450px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={processedData}>
            <defs>
              <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
            <XAxis
              dataKey="date"
              stroke="#52525b"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              dy={15}
            />
            <YAxis
              stroke="#52525b"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              tickFormatter={(val) => val >= 1000 ? `${(val / 1000).toFixed(0)}k` : val}
            />
            <Tooltip
              contentStyle={{ backgroundColor: '#09090b', borderRadius: '16px', border: '1px solid #ffffff10', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.5)' }}
              itemStyle={{ color: '#10b981', fontWeight: 'bold' }}
              labelStyle={{ color: '#71717a', marginBottom: '4px', fontSize: '10px' }}
              cursor={{ stroke: '#10b981', strokeWidth: 1 }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#10b981"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorVal)"
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Narrative Footer */}
      <div className="px-8 pb-8 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-zinc-500 text-[11px]">
          <Info size={14} className="text-emerald-500/50" />
          <span>Synthesized using unadjusted inactive data. Data represents GEO and Statistics mapping from StatCan.</span>
        </div>
        <div className="text-zinc-600 text-[10px] font-mono pl-5">
          Source: Statistics Canada. Table 14-10-0325-01 Job vacancies, payroll employees, job vacancy rate, and average offered hourly wage by provinces and territories, quarterly, unadjusted for seasonality.
        </div>
      </div>
    </div>
  );
}