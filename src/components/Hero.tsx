import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-blue-900 dark:text-white mb-6 animate-fade-in">
          Basetty Sai Prakash
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-delay">
          UI Developer
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-12 animate-fade-in-delay-2">
          Crafting beautiful and intuitive user interfaces with modern web technologies.
          Passionate about creating exceptional digital experiences.
        </p>
        <a
          href="#about"
          className="inline-block animate-bounce"
          aria-label="Scroll to About section"
        >
          <ChevronDown className="w-8 h-8 text-blue-900 dark:text-white" />
        </a>
      </div>
    </section>
  );
}