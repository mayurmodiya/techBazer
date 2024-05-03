import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import React from 'react';

const SigninPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Sign In</h2>
        <form className="space-y-4">
          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</Label>
            <Input type="email" id="email" placeholder="you@example.com" className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none" />
          </div>
          <div>
            <Label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</Label>
            <Input type="password" id="password" placeholder="********" className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none" />
          </div>
          <button type="submit" className="w-full bg-blue-500 dark:bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">
            Sign In
          </button>
        </form>
        <p className='text-center m-1'>Don&apos;t have an account <Link className='underline' href={'/sign-up'}>Sign Up</Link></p>
        <div className=' font-medium'>
            Forgot Password
            <Link className='underline p-2' href={'/forgot-password'}>here</Link>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
