import Button from "./Button";

function ReminderHeader({ length, onClick }) {
  return (
    <div className={`flex justify-between py-3 ${length > 0 ? "border-b border-gray-200" : ""}`}>
      Reminders
      <Button onClick={onClick}>
        Add Reminder
      </Button>
    </div>
  );
}

export default ReminderHeader;
