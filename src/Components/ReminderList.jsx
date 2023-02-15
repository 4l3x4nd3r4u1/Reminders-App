import ReminderItem from "./ReminderItem";
import { AnimatePresence } from "framer-motion";
import { memo } from "react";

const ReminderList = ({ reminders, removeReminder }) => {
  return (
    <div className="divide-y divided-solid overflow-hidden">
      <AnimatePresence>
        {reminders.map((reminder) => (
          <ReminderItem reminder={reminder} key={reminder.id} removeReminder={removeReminder} />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default memo(ReminderList);
