import Counter from "./Counter";
import { motion } from 'framer-motion';

function ProgressBar({ last, progress }) {
  const width = `${progress}%`;

  return (
    <div className="mt-2 pb-1">
      <Counter from={last} to={progress} />
      <div className="h-1.5 bg-zinc-200 rounded flex items-center px-1">
        <motion.div
          className="h-2/4 bg-purple-500 rounded-full"
          animate={{ width }}
          transition={{ duration: 1.2 }}
        />
      </div>
    </div>
  );
}

export default ProgressBar
