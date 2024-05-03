import React from 'react';

const HelpPage = () => {
  return (
    <div className="px-4 py-8 lg:px-16 lg:py-12 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-8">
          Help Center
        </h1>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {/* FAQ Item */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">How can I track my order?</h3>
              <p className="text-gray-700 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at tincidunt justo. Duis in leo justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vitae metus augue.</p>
            </div>
            {/* Repeat above structure for more FAQ items */}
          </div>
        </div>
        <div className="mt-8 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
              <input type="text" id="name" placeholder="Your Name" className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
              <input type="email" id="email" placeholder="you@example.com" className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea id="message" placeholder="Your message..." className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none" rows='4' ></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 dark:bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
