import { HashLoader } from "react-spinners";
import useFriends from "../../hooks/useFriends";
import Banner from "../../components/homepage/Banner";
import FriendCard from "../../components/ui/FriendCard";

const Home = () => {
  const { friends, loading } = useFriends();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <Banner friends={friends} />
      <section className="pb-12">
        <h2 className="font-serif font-semibold text-xl text-gray-900 mb-6">
          Your Friends
        </h2>
        {loading ? (
          <div className="flex justify-center items-center h-48">
            <HashLoader color="#064e3b" size={40} />
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {friends.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;

