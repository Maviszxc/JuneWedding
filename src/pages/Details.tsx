import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Music, Camera, Gift } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export function Details() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-5xl font-serif text-center text-navy-900 mb-16"
          {...fadeInUp}
        >
          Wedding Details
        </motion.h1>

        {/* Ceremony Section */}
        <motion.section className="mb-24" {...fadeInUp}>
          <h2 className="text-3xl font-serif text-center text-navy-900 mb-12">Ceremony</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <Calendar className="w-10 h-10 text-navy-600 mb-4" />
              <h3 className="text-xl font-medium mb-2">Date & Time</h3>
              <p>June 21, 2025</p>
              <p>3:00 PM - 4:00 PM</p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <MapPin className="w-10 h-10 text-navy-600 mb-4" />
              <h3 className="text-xl font-medium mb-2">Location</h3>
              <p>The Immaculate Conception</p>
              <p>Cathedral of Cubao</p>
              <p className="text-sm mt-2">40 Lantana St., Cubao</p>
              <p className="text-sm">Philippines, 1111</p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <Camera className="w-10 h-10 text-navy-600 mb-4" />
              <h3 className="text-xl font-medium mb-2">What to Expect</h3>
              <p>Traditional Ceremony</p>
              <p>Photography Session</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Reception Section */}
        <motion.section className="mb-24" {...fadeInUp}>
          <h2 className="text-3xl font-serif text-center text-navy-900 mb-12">Reception</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <Clock className="w-10 h-10 text-navy-600 mb-4" />
              <h3 className="text-xl font-medium mb-2">Schedule</h3>
              <p>5:00 PM - 9:00 PM</p>
              <p className="text-sm mt-2">Cocktail Hour: 5:00 PM</p>
              <p className="text-sm">Dinner: 6:00 PM</p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <MapPin className="w-10 h-10 text-navy-600 mb-4" />
              <h3 className="text-xl font-medium mb-2">Venue</h3>
              <p>Oasis Manila</p>
              <p className="text-sm mt-2">169 Aurora Blvd.</p>
              <p className="text-sm">Brgy Ermitano, 1500</p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <Music className="w-10 h-10 text-navy-600 mb-4" />
              <h3 className="text-xl font-medium mb-2">Entertainment</h3>
              <p>Live Band Performance</p>
              <p>Dance Floor</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Gift Registry */}
        <motion.section className="text-center" {...fadeInUp}>
          <div className="bg-white p-12 rounded-2xl shadow-lg">
            <Gift className="w-12 h-12 text-navy-600 mx-auto mb-6" />
            <h2 className="text-3xl font-serif text-navy-900 mb-4">Gift Registry</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have registered at the following stores.
            </p>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}