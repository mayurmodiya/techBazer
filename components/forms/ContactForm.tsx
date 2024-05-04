import React from 'react'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

const ContactForm = () => {
  return (
    <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
    <div className="px-6 py-8 md:px-10">
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Contact Us</h2>
      <form>
        <div className="grid grid-cols-1 gap-y-6">
          <div>
            <Label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</Label>
            <Input type="text" name="name" id="name" autoComplete="name" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md" />
          </div>
          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</Label>
            <Input type="email" name="email" id="email" autoComplete="email" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md" />
          </div>
          <div>
            <Label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</Label>
            <textarea id="message" name="message" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md border" rows={10} cols={30}></textarea>
          </div>
          <div className="mt-6">
            <Button type="submit" className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-base font-medium">
              Send Message
            </Button>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default ContactForm