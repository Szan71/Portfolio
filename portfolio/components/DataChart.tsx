"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { useEffect, useState } from 'react';

interface ChartProps {
  url: string;
}

export default function DataChart({ url }: { url: string }) {
  // ... rest of your code remains the same {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) return;
    
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        // Example: If fetching GitHub stars, we transform the data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const transform = json.items?.slice(0, 6).map((item:any) => ({
          name: item.name.substring(0, 10),
          value: item.stargazers_count,
        })) || [];
        
        setData(transform);
        setLoading(false);
      })
      .catch((err) => console.error("Failing to fetch data:", err));
  }, [url]);

  if (loading) return <div className="h-64 flex items-center justify-center text-gray-400">Loading live data...</div>;

  return (
    <div className="h-80 w-full bg-gray-900/50 p-4 rounded-xl border border-gray-800 my-8">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
          <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
          <YAxis stroke="#94a3b8" fontSize={12} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }}
            itemStyle={{ color: '#3b82f6' }}
          />
          <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}