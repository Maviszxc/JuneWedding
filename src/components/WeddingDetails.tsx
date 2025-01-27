import { Calendar, MapPin, Clock, Heart, Music, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export function WeddingDetails() {
  return (
    <motion.div 
      className="max-w-6xl mx-auto px-4 py-24"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div 
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Heart className="w-12 h-12 text-navy-600 mx-auto mb-6" />
        <h1 className="text-6xl font-serif text-navy-900 mb-4">Bernard & Hazel</h1>
        <p className="text-xl text-gray-600">Request the pleasure of your company</p>
      </motion.div>

      <section id="ceremony" className="mb-24">
        <motion.h2 
          className="text-3xl font-serif text-center text-navy-900 mb-12"
          {...fadeIn}
        >
          Ceremony
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className="text-center p-8 bg-white shadow-lg rounded-2xl transform hover:scale-105 transition-transform"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            <Calendar className="w-10 h-10 text-navy-600 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-navy-900 mb-2">Date</h3>
            <p className="text-gray-600">June 21, 2025</p>
            <p className="text-gray-600">3:00 PM - 4:00 PM</p>
          </motion.div>

          <motion.div 
            className="text-center p-8 bg-white shadow-lg rounded-2xl transform hover:scale-105 transition-transform"
            {...fadeIn}
            transition={{ delay: 0.4 }}
          >
            <MapPin className="w-10 h-10 text-navy-600 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-navy-900 mb-2">Venue</h3>
            <p className="text-gray-600">The Immaculate Conception</p>
            <p className="text-gray-600">Cathedral of Cubao</p>
            <p className="text-gray-600 text-sm mt-2">40 Lantana St., Cubao</p>
            <p className="text-gray-600 text-sm">Philippines, 1111</p>
          </motion.div>

          <motion.div 
            className="text-center p-8 bg-white shadow-lg rounded-2xl transform hover:scale-105 transition-transform"
            {...fadeIn}
            transition={{ delay: 0.6 }}
          >
            <Camera className="w-10 h-10 text-navy-600 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-navy-900 mb-2">Details</h3>
            <p className="text-gray-600">Traditional Ceremony</p>
            <p className="text-gray-600">Photography Session</p>
          </motion.div>
        </div>
      </section>

      <section id="reception" className="mb-24">
        <motion.h2 
          className="text-3xl font-serif text-center text-navy-900 mb-12"
          {...fadeIn}
        >
          Reception
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className="text-center p-8 bg-white shadow-lg rounded-2xl transform hover:scale-105 transition-transform"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            <Clock className="w-10 h-10 text-navy-600 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-navy-900 mb-2">Time</h3>
            <p className="text-gray-600">5:00 PM - 9:00 PM</p>
            <p className="text-gray-600 text-sm mt-2">Cocktail Hour: 5:00 PM</p>
            <p className="text-gray-600 text-sm">Dinner: 6:00 PM</p>
          </motion.div>

          <motion.div 
            className="text-center p-8 bg-white shadow-lg rounded-2xl transform hover:scale-105 transition-transform"
            {...fadeIn}
            transition={{ delay: 0.4 }}
          >
            <MapPin className="w-10 h-10 text-navy-600 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-navy-900 mb-2">Venue</h3>
            <p className="text-gray-600">Oasis Manila</p>
            <p className="text-gray-600 text-sm mt-2">169 Aurora Blvd.</p>
            <p className="text-gray-600 text-sm">Brgy Ermitano, 1500</p>
          </motion.div>

          <motion.div 
            className="text-center p-8 bg-white shadow-lg rounded-2xl transform hover:scale-105 transition-transform"
            {...fadeIn}
            transition={{ delay: 0.6 }}
          >
            <Music className="w-10 h-10 text-navy-600 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-navy-900 mb-2">Entertainment</h3>
            <p className="text-gray-600">Live Band</p>
            <p className="text-gray-600">Dance Floor</p>
          </motion.div>
        </div>
      </section>

      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
          alt="Elegant wedding venue"
          className="w-full h-[600px] object-cover rounded-2xl shadow-lg mb-8"
        />
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Join us for an evening of celebration as we unite in marriage.
          Our elegant affair will feature live music and an unforgettable celebration of love.
        </p>
      </motion.div>
    </motion.div>
  );
}