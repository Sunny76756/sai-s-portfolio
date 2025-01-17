import React from 'react';
import myPic from '../assets/mypic.jpeg';
export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 dark:text-white mb-16">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={myPic}
                alt="Basetty Sai Prakash"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-900 dark:text-white mb-4">
              Hello, I'm Sai Prakash
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate UI Developer with expertise in creating responsive and user-friendly
              web applications. With a strong foundation in front-end technologies and a keen eye
              for design, I transform ideas into seamless digital experiences.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-blue-900 dark:text-white mb-2">Languages</h4>
                <p className="text-gray-600 dark:text-gray-300">English, Telugu, Hindi</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 dark:text-white mb-2">Location</h4>
                <p className="text-gray-600 dark:text-gray-300">Nandyal, Andhra Pradesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}