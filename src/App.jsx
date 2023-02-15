import { useState, useCallback } from "react"
import { AnimatePresence, motion } from 'framer-motion';
import { initialReminders } from './utils/fakeData'
import NewReminderInput from "./Components/NewReminderInput";
import ReminderContainer from "./Components/ReminderContainer";
import ReminderHeader from "./Components/ReminderHeader";
import ReminderList from "./Components/ReminderList";
import "./App.css";

let x = initialReminders.length;

function App() {
  const [reminders, setReminders] = useState(initialReminders);
  const [editNewReminder, setEditNewReminder] = useState(false);
  const [reminder, setReminder] = useState({ title: "", text: "", date: "8 Feb 2023", id: 0 });
  const [progress, setProgress] = useState(0);

  const removeReminder = useCallback((i) => {
    const remindersFiltered = reminders.filter(reminder => reminder.id !== i);
    setReminders(remindersFiltered);
    setProgress(progress === 100 ? 0 : progress + 10);
  }, [reminders, progress]);

  function saveReminder() {
    if (reminder.title.trim().length === 0 && reminder.text.trim().length === 0) {
      return;
    }

    setReminders([{ ...reminder, id: x }, ...reminders]);
    setReminder({ title: "", text: "", date: "8 Feb 2023", id: 0 });
    setEditNewReminder(false);

    x++;
  }

  function cancelReminderWhenEditing() {
    setEditNewReminder(false);
    setReminder({ title: "", text: "", date: "8 Feb 2023", id: 0 });
  }

  return (
    <div className="App mx-auto border">
      <AnimatePresence>
        {editNewReminder &&
          <NewReminderInput
            reminder={reminder}
            cancelReminder={cancelReminderWhenEditing}
            saveReminder={saveReminder}
            setReminder={setReminder}
          />
        }
      </AnimatePresence>

      <ReminderContainer>
        <ReminderHeader length={reminders.length} onClick={() => setEditNewReminder(true)} />

        <div className="h-1.5 bg-zinc-200 rounded mt-2 flex items-center px-1">
          <motion.div
            className="h-2/4 bg-purple-500 rounded-full"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <ReminderList reminders={reminders} removeReminder={removeReminder} />
      </ReminderContainer>
    </div >
  )
}

export default App;
