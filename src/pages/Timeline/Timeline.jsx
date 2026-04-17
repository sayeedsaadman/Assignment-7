import { useContext, useState } from "react";
import { FaPhone, FaComment, FaVideo, FaFilter } from "react-icons/fa";
import { TimelineContext } from "../../context/TimelineContext";

const iconMap = {
  Call: <FaPhone className="text-emerald-700 text-xs" />,
  Text: <FaComment className="text-blue-500 text-xs" />,
  Video: <FaVideo className="text-purple-500 text-xs" />,
};

const Timeline = () => {
  const { timelineEntries } = useContext(TimelineContext);
  const [filter, setFilter] = useState("All");

  const sorted = [...timelineEntries]
    .filter((e) => filter === "All" || e.type === filter)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "long", day: "numeric", year: "numeric",
    });

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="font-serif font-bold text-3xl text-gray-900 mb-6">Timeline</h1>

      <div className="mb-6 flex items-center gap-2">
        <FaFilter className="text-gray-400 text-xs" />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="text-sm border border-gray-200 rounded-md px-3 py-1.5 bg-white text-gray-600 focus:outline-none focus:ring-1 focus:ring-emerald-900"
        >
          <option value="All">Filter timeline</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
      </div>

      {sorted.length === 0 ? (
        <p className="text-center text-gray-400 text-sm py-12">No entries found.</p>
      ) : (
        <div className="flex flex-col rounded-xl overflow-hidden border border-gray-100">
          {sorted.map((entry, idx) => (
            <div
              key={entry.id}
              className={`flex items-center gap-4 bg-white px-5 py-4 ${
                idx !== sorted.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0">
                {iconMap[entry.type]}
              </div>
              <div>
                <p className="text-sm text-gray-800">
                  <span className="font-medium">{entry.type}</span>{" "}
                  <span className="text-gray-500">
                    {entry.title.replace(`${entry.type} `, "")}
                  </span>
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{formatDate(entry.date)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;