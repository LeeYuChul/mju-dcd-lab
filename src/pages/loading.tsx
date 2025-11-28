import PixelCard from '../components/PixelCard';
import ShinyText from '../components/ShinyText';
import { motion } from 'framer-motion';
import { useEffect } from 'react';


interface LoadingProps {
  progress?: number;
}

export default function Loading({ progress = 0 }: LoadingProps) {
  useEffect(() => {
    document.title = "Core Loop Lab - Loading";
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      exit={{ backgroundColor: "rgba(0,0,0,0)" }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <PixelCard
          variant="pink"
          gap={10}
          speed={20}
          colors="#f8fafc,#f1f5f9,#cbd5e1"
          noFocus={true}
          className="w-full h-full"
          progress={progress}
        />
      </motion.div>

      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <motion.div
          layoutId="dcd-lab-title"
          transition={{ duration: 0.8, ease: "circOut" }}
        >
          <ShinyText text="Core Loop Lab" speed={3} className="text-4xl font-bold" />
        </motion.div>
      </div>
    </motion.div>
  );
}
