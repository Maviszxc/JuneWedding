import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { supabase } from '../lib/supabase';

export function RsvpForm() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    attending: null as boolean | null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from('rsvps')
        .insert([formData]);
      
      if (error) throw error;
      
      alert('Thank you for your RSVP!');
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        attending: null
      });
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      alert('There was an error submitting your RSVP. Please try again.');
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="space-y-6 w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div>
        <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-1">
          First Name
        </label>
        <input
          type="text"
          id="first_name"
          required
          className="w-full px-4 py-2 rounded-lg border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500 transition-colors"
          value={formData.first_name}
          onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-1">
          Last Name
        </label>
        <input
          type="text"
          id="last_name"
          required
          className="w-full px-4 py-2 rounded-lg border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500 transition-colors"
          value={formData.last_name}
          onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-4 py-2 rounded-lg border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500 transition-colors"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="space-y-4">
        <span className="block text-sm font-medium text-gray-700">Will you be attending?</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Button
            type="button"
            variant={formData.attending === true ? 'primary' : 'outline'}
            onClick={() => setFormData({ ...formData, attending: true })}
            className="w-full justify-center text-center py-3"
          >
            Yes, I'll be there!
          </Button>
          <Button
            type="button"
            variant={formData.attending === false ? 'primary' : 'outline'}
            onClick={() => setFormData({ ...formData, attending: false })}
            className="w-full justify-center text-center py-3"
          >
            Sorry, I can't make it
          </Button>
        </div>
      </div>

      <Button 
        type="submit" 
        size="lg" 
        className="w-full py-4 mt-8 text-lg font-medium transition-all transform hover:scale-105 duration-200"
      >
        Submit RSVP
      </Button>
    </motion.form>
  );
}