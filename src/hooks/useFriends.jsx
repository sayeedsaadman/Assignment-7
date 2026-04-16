import { useEffect, useState } from "react";

const useFriends = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriends = async () => {
      const res = await fetch("/friends.json");
      const data = await res.json();
      setTimeout(() => {
        setFriends(data);
        setLoading(false);
      }, 1200);
    };
    fetchFriends();
  }, []);

  return { friends, loading };
};

export default useFriends;
