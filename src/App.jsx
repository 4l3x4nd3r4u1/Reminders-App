import { useState, useCallback } from "react"
import { initialReminders } from './utils/fakeData'
import { AnimatePresence } from 'framer-motion';
import ReminderContainer from "./Components/ReminderContainer";
import NewReminderInput from "./Components/NewReminderInput";
import ReminderHeader from "./Components/ReminderHeader";
import ReminderList from "./Components/ReminderList";
import "./App.css";

let x = initialReminders.length;

function App() {
  const [reminders, setReminders] = useState(initialReminders);
  const [editNewReminder, setEditNewReminder] = useState(false);
  const [reminder, setReminder] = useState({ title: "", text: "", date: "8 Feb 2023", id: 0 });
  const [progress, setProgress] = useState(70);

  const removeReminder = useCallback((i) => {
    if (progress === 100) return;

    const remindersFiltered = reminders.filter(reminder => reminder.id !== i);
    setReminders(remindersFiltered);
    setProgress(progress + 10);
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
    <div className="App mx-auto">
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
        <ReminderHeader
          length={reminders.length}
          onClick={() => setEditNewReminder(true)}
          progress={progress}
          setProgress={setProgress}
        />

        <ReminderList reminders={reminders} removeReminder={removeReminder} />
      </ReminderContainer>
    </div>
  )
}

export default App;
