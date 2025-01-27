import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
}

export function Logo({ className = "w-10 h-10" }: LogoProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ rotate: -90, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      transition={{
        duration: 1,
        ease: [0.6, 0.01, -0.05, 0.95],
        opacity: { duration: 0.6 }
      }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: [0.34, 1.56, 0.64, 1]
        }}
      >
        <img
          src="/src/assets/images/logow.png"
          alt="Wedding Logo"
          className="w-full h-full object-contain"
        />
      </motion.div>
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}
