import { FaUserPlus } from "react-icons/fa";

const Banner = ({ friends }) => {
  const total = friends.length;
  const onTrack = friends.filter((f) => f.status === "on-track").length;
  const needAttention = friends.filter(
    (f) => f.status === "overdue" || f.status === "almost due"
  ).length;

  const interactionsThisMonth = 12;

  const stats = [
    { value: total, label: "Total Friends" },
    { value: onTrack, label: "On Track" },
    { value: needAttention, label: "Need Attention" },
    { value: interactionsThisMonth, label: "Interactions This Month" },
  ];

  return (
    <div className="text-center py-12 px-4">
      <h1
        className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-3"
      >
        Friends to keep close in your life
      </h1>
      <p className="text-gray-500 text-sm max-w-lg mx-auto mb-6">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button className="inline-flex items-center gap-2 text-white text-sm font-medium px-5 py-2 rounded-md">
        <FaUserPlus />
        Add a Friend
      </button>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 max-w-2xl mx-auto">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
          >
            <p className="font-display font-bold text-3xl text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
              {s.value}
            </p>
            <p className="text-gray-400 text-xs mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
