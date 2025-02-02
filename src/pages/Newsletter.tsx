import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { showSuccess, showError } from '../utils/toast';

const newsletterSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  interests: z.array(z.string()).min(1, 'Please select at least one interest')
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export default function NewsletterSignup() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema)
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    try {
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbybLXMXyYStDksN0EE4Mv-BKJUefQswxrf8EuK0LVBbDzKbZ1516Paf8l8X7Qz2zs3x/exec';
      
      // Create the data object in the format expected by the Apps Script
      const postData = {
        firstName: data.firstName,
        email: data.email,
        interests: data.interests
      };

      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(postData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      if (result.status === 'success') {
        showSuccess('Successfully subscribed to newsletter!');
        reset();
      } else {
        throw new Error(result.message || 'Failed to subscribe');
      }
    } catch (error) {
      showError('Failed to subscribe. Please try again later.');
      console.error('Newsletter signup error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-900 p-6 rounded-lg"
    >
      <div className="text-white mb-6">
        <h3 className="text-xl font-bold mb-2">Stay Connected</h3>
        <p className="text-gray-300">
          Subscribe to our newsletter for the latest updates, events, and exclusive content.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="First Name"
            {...register('firstName')}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-[#8ED204] focus:ring-1 focus:ring-[#8ED204]"
            disabled={isSubmitting}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email Address"
            {...register('email')}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-[#8ED204] focus:ring-1 focus:ring-[#8ED204]"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <p className="text-white mb-2">I'm interested in:</p>
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-white">
              <input
                type="checkbox"
                value="youth-programs"
                {...register('interests')}
                className="form-checkbox text-[#8ED204]"
                disabled={isSubmitting}
              />
              <span>Youth Programs</span>
            </label>
            <label className="flex items-center space-x-2 text-white">
              <input
                type="checkbox"
                value="camps"
                {...register('interests')}
                className="form-checkbox text-[#8ED204]"
                disabled={isSubmitting}
              />
              <span>Camps & Clinics</span>
            </label>
            <label className="flex items-center space-x-2 text-white">
              <input
                type="checkbox"
                value="events"
                {...register('interests')}
                className="form-checkbox text-[#8ED204]"
                disabled={isSubmitting}
              />
              <span>Events & Tournaments</span>
            </label>
          </div>
          {errors.interests && (
            <p className="text-red-500 text-sm mt-1">{errors.interests.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#8ED204] text-black py-2 rounded-lg font-semibold hover:bg-[#8ED204]/90 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </motion.div>
  );
}
