import Button from "./Button";
import { motion } from "framer-motion";
import CalendarIcon from "./CalendarIcon";

const variants = {
  hidden: {
    opacity: 0,
    height: 0
  },
  show: {
    opacity: 1,
    height: "auto",
    transition: {
      opacity: {
        delay: 0.7
      },
      height: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      opacity: {
        duration: 0.2
      },
      height: {
        delay: 0.2,
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  }
}

function ReminderItem({ reminder, removeReminder }) {
  const { title, text, date, id } = reminder;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="flex py-2">
        <div className="flex-1">
          {title}
          <p className="text-zinc-500 text-sm">{text}</p>
          <span className="flex items-center">
            <CalendarIcon />
            <span className="text-zinc-500 text-sm ml-2">{date}</span>
          </span>
        </div>
        <div>
          <Button onClick={() => removeReminder(id)}>&times;</Button>
        </div>
      </div>
    </motion.div>
  );
}

export default ReminderItem;
