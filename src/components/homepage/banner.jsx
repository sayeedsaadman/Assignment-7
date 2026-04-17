import { FaUserPlus } from "react-icons/fa";

const Banner = ({ friends }) => {
  const stats = [
    { value: friends.length, label: "Total Friends" },
    { value: friends.filter((f) => f.status === "on-track").length, label: "On Track" },
    { value: friends.filter((f) => f.status !== "on-track").length, label: "Need Attention" },
    { value: 12, label: "Interactions This Month" },
  ];

  return (
    <div className="text-center py-12 px-4">
      <h1 className="font-serif font-bold text-3xl sm:text-4xl text-gray-900 mb-3">
        Friends to keep close in your life
      </h1>
      <p className="text-gray-500 text-sm max-w-lg mx-auto mb-6">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button className="inline-flex items-center gap-2 bg-emerald-900 text-white text-sm font-medium px-5 py-2 rounded-md hover:bg-emerald-800 transition-colors duration-150">
        <FaUserPlus />
        Add a Friend
      </button>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 max-w-2xl mx-auto">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
            <p className="font-serif font-bold text-3xl text-gray-900">{s.value}</p>
            <p className="text-gray-400 text-xs mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;