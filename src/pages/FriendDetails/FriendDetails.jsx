import { useContext } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { FaPhone, FaComment, FaVideo, FaClock, FaArchive, FaTrash, FaEdit } from "react-icons/fa";
import { HashLoader } from "react-spinners";
import useFriends from "../../hooks/useFriends";
import StatusBadge from "../../components/ui/StatusBadge";
import { TimelineContext } from "../../context/TimelineContext";

const FriendDetails = () => {
  const { id } = useParams();
  const { friends, loading } = useFriends();
  const { addEntry } = useContext(TimelineContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <HashLoader color="#064e3b" size={40} />
      </div>
    );
  }

  const friend = friends.find((f) => String(f.id) === id);

  if (!friend) {
    return (
      <div className="text-center py-24 text-gray-400 text-sm">
        Friend not found.
      </div>
    );
  }

  const handleCheckIn = (type) => {
    addEntry({
      id: Date.now(),
      type,
      title: `${type} with ${friend.name}`,
      date: new Date(),
    });
    toast.success(`${type} with ${friend.name} logged!`);
  };

  const statCards = [
    { label: "Days Since Contact", value: friend.days_since_contact },
    { label: "Goal (Days)", value: friend.goal },
    {
      label: "Next Due",
      value: new Date(friend.next_due_date).toLocaleDateString("en-US", {
        month: "short", day: "numeric", year: "numeric",
      }),
    },
  ];

  const checkIns = [
    { type: "Call", icon: <FaPhone className="text-lg" /> },
    { type: "Text", icon: <FaComment className="text-lg" /> },
    { type: "Video", icon: <FaVideo className="text-lg" /> },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

        <div className="sm:col-span-1 flex flex-col gap-4">
          <div className="bg-white rounded-xl border border-gray-100 p-6 text-center shadow-sm">
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-20 h-20 rounded-full object-cover mx-auto mb-3 border-2 border-gray-100"
            />
            <h2 className="font-serif font-bold text-xl text-gray-900">{friend.name}</h2>
            <div className="flex justify-center gap-2 mt-2 flex-wrap">
              <StatusBadge status={friend.status} />
              {friend.tags.map((t) => (
                <span key={t} className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full ">
                  {t}
                </span>
              ))}
            </div>
            <p className="text-gray-400 text-xs mt-3 italic">"{friend.bio}"</p>
            <p className="text-gray-500 text-xs mt-2">{friend.email}</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden divide-y divide-gray-100">
            <button className="w-full flex items-center gap-2 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
              <FaClock className="text-gray-400" /> Snooze 2 Weeks
            </button>
            <button className="w-full flex items-center gap-2 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
              <FaArchive className="text-gray-400" /> Archive
            </button>
            <button className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-500 hover:bg-red-50 transition-colors">
              <FaTrash className="text-red-400" /> Delete
            </button>
          </div>
        </div>

        <div className="sm:col-span-2 flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-3">
            {statCards.map((s) => (
              <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
                <p className="font-serif font-bold text-2xl text-gray-900">{s.value}</p>
                <p className="text-gray-400 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-sm text-gray-900">Relationship Goal</h3>
              <button className="text-xs text-emerald-900 flex items-center gap-1 hover:underline">
                <FaEdit /> Edit
              </button>
            </div>
            <p className="text-gray-500 text-sm">
              Connect every <span className="font-bold text-gray-900">{friend.goal} days</span>
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
            <h3 className="font-semibold text-sm text-gray-900 mb-4">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-3">
              {checkIns.map((btn) => (
                <button
                  key={btn.type}
                  onClick={() => handleCheckIn(btn.type)}
                  className="flex flex-col items-center gap-2 py-4 rounded-lg border border-gray-200 text-gray-600 hover:border-emerald-900 hover:text-emerald-900 hover:bg-emerald-50 transition-all text-sm font-medium"
                >
                  {btn.icon}
                  {btn.type}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FriendDetails;