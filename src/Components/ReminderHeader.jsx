import Button from "./Button";
import { useEffect, useRef } from "react";
import ProgressBar from "./ProgressBar";

function ReminderHeader({ length, onClick, progress, setProgress }) {
  const lastProgressRef = useRef();

  useEffect(() => {
    if (progress === 100)
      setTimeout(() => setProgress(0), 1200)

  }, [progress]);

  useEffect(() => {
    lastProgressRef.current = progress
  }, [progress]);

  const last = lastProgressRef.current === undefined ? 0 : lastProgressRef.current;

  return (
    <div className={`${length > 0 ? "border-b border-gray-200" : ""} py-3`}>
      <div className="flex justify-between">
        Reminders
        <Button onClick={onClick}>
          Add Reminder
        </Button>
      </div>
      <ProgressBar
        last={last}
        progress={progress}
      />
    </div>
  );
}

export default ReminderHeader;
