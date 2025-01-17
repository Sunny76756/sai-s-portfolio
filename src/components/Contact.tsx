import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 dark:text-white mb-16">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <div className="space-y-8">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-blue-900 dark:text-blue-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-blue-900 dark:text-white mb-1">Email</h3>
                  <a
                    href="mailto:Saiprakashbasetty@gmail.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400"
                  >
                    Saiprakashbasetty@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-blue-900 dark:text-blue-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-blue-900 dark:text-white mb-1">Phone</h3>
                  <a
                    href="tel:+919381071353"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400"
                  >
                    +91 9381071353
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-blue-900 dark:text-blue-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-blue-900 dark:text-white mb-1">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Nandyal, Andhra Pradesh
                  </p>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}