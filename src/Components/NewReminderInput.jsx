import { motion } from "framer-motion";
import Button from "./Button";

const variants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      height: {
        duration: 0.6,
        delay: 0.4,
        ease: [0.76, 0, 0.24, 1],
      },
      opacity: {
        duration: 0.2
      }
    }
  },
  show: {
    height: "auto",
    opacity: 1,
    transition: {
      height: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1]
      },
      opacity: {
        delay: 0.5
      }
    }
  },
}

function NewReminderInput({ reminder, cancelReminder, saveReminder, setReminder }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="overflow-hidden"
    >
      <div className="w-4/5 mt-4 bg-white p-3 rounded mx-auto">
        <textarea
          autoFocus
          className="w-full resize-none outline-none"
          onChange={(e) => setReminder({ ...reminder, title: e.target.value })}
          placeholder="Write a new reminder title"
        />
        <textarea
          className="block text-sm w-full outline-none"
          onChange={(e) => setReminder({ ...reminder, text: e.target.value })}
          placeholder="Write a new reminder content"
        />
        <div className="flex justify-end mt-2">
          <Button onClick={cancelReminder}>Cancel</Button>
          <Button onClick={saveReminder}>Save</Button>
        </div>
      </div>
    </motion.div>
  )
}

export default NewReminderInput;
