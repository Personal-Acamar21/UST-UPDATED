import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { showSuccess, showError } from '../utils/toast';
import LoadingSpinner from '../components/LoadingSpinner';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_email: 'INFO@USTSOCCER.COM'
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      
      showSuccess('Message sent successfully!');
      reset();
    } catch (error) {
      showError('Failed to send message. Please try again later.');
      console.error('Email error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-[#8ED204] mr-3" />
                <div>
                  <p>ULTIMATE SOCCER TRAINING LLC</p>
                  <p>DBA UST KINGS PARK</p>
                  <p>P.O. BOX: 312</p>
                  <p>KINGS PARK NY 11754</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#8ED204] mr-3" />
                <a href="tel:631-506-6557" className="hover:text-[#8ED204] transition-colors">631-506-6557</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#8ED204] mr-3" />
                <a href="mailto:INFO@USTSOCCER.COM" className="hover:text-[#8ED204] transition-colors">INFO@USTSOCCER.COM</a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                {...register('name')}
                className="w-full px-4 py-2 border rounded-lg focus:ring-[#8ED204] focus:border-[#8ED204]"
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                {...register('email')}
                className="w-full px-4 py-2 border rounded-lg focus:ring-[#8ED204] focus:border-[#8ED204]"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                {...register('message')}
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-[#8ED204] focus:border-[#8ED204]"
                disabled={isSubmitting}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#8ED204] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#8ED204]/90 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <LoadingSpinner size="small" color="#000000" />
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
