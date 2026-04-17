import { Link } from "react-router";
import StatusBadge from "./StatusBadge";

const FriendCard = ({ friend }) => (
  <Link
    to={`/friends/${friend.id}`}
    className="bg-white rounded-xl p-4 border border-gray-100 flex flex-col items-center text-center gap-2 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
  >
    <img
      src={friend.picture}
      alt={friend.name}
    />
    <div>
      <h3 className="font-semibold text-sm text-gray-900">{friend.name}</h3>
      <p className="text-xs text-gray-400 mt-0.5">{friend.days_since_contact}d ago</p>
    </div>
    <div className="flex flex-wrap gap-1 justify-center">
      {friend.tags.map((tag) => (
        <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
          {tag}
        </span>
      ))}
    </div>
    <StatusBadge status={friend.status} />
  </Link>
);

export default FriendCard;