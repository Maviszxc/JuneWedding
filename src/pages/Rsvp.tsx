import { motion } from 'framer-motion';
import { RsvpForm } from '../components/RsvpForm';

export function Rsvp() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-24 px-4 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif text-navy-900 mb-6">RSVP</h1>
          <p className="text-lg md:text-xl text-gray-600">
            Please let us know if you'll be joining us on our special day.
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <RsvpForm />
        </div>
      </div>
    </motion.div>
  );
}