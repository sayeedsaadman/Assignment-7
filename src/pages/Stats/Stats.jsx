import { useContext } from "react";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";
import { TimelineContext } from "../../context/TimelineContext";

const COLORS = { Text: "#7c3aed", Call: "#059669", Video: "#064e3b" };

const Stats = () => {
  const { timelineEntries } = useContext(TimelineContext);

  const counts = timelineEntries.reduce((acc, e) => {
    acc[e.type] = (acc[e.type] || 0) + 1;
    return acc;
  }, {});

  const data = Object.entries(counts).map(([name, value]) => ({ name, value }));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="font-serif font-bold text-3xl text-gray-900 mb-8">
        Friendship Analytics
      </h1>
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <p className="text-sm text-gray-500 mb-4">By Interaction Type</p>
        <div className="flex justify-center">
          <PieChart width={320} height={260}>
            <Pie
              data={data}
              cx={160}
              cy={115}
              innerRadius={70}
              outerRadius={105}
              paddingAngle={4}
              cornerRadius={6}
              dataKey="value"
            >
              {data.map((entry, i) => (
                <Cell key={i} fill={COLORS[entry.name] || "#9ca3af"} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
                fontSize: "12px",
              }}
            />
            <Legend
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: "12px", paddingTop: "12px" }}
            />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Stats;