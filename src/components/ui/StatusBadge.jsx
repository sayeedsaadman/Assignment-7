
const StatusBadge = ({ status }) => {
  const styles = {
    overdue: "bg-red-100 text-red-600",
    "almost due": "bg-yellow-100 text-yellow-600",
    "on-track": "bg-green-100 text-green-600",
  };
  const labels = {
    overdue: "Overdue",
    "almost due": "Almost Due",
    "on-track": "On Track",
  };

  return (
    <span className={`px-2 py-0.5 rounded text-xs font-semibold ${styles[status] || "bg-gray-100 text-gray-600"}`}>
      {labels[status] || status}
    </span>
  );
};

export default StatusBadge;