import { useState } from "react";
import { TimelineContext } from "./TimelineContext";

const TimelineProvider = ({ children }) => {
  const [timelineEntries, setTimelineEntries] = useState([]);

  const addEntry = (entry) => setTimelineEntries((prev) => [entry, ...prev]);

  return (
    <TimelineContext.Provider value={{ timelineEntries, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
};

export default TimelineProvider;