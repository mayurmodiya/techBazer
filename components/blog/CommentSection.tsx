'use client';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

// Define Zod schema for comment form data
const commentSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  message: z.string().nonempty(),
});

// Define types for comment data
type CommentData = z.infer<typeof commentSchema>;

const CommentSection: React.FC = () => {
  // React Hook Form
  const { register, handleSubmit, formState: { errors } } = useForm<CommentData>({
    resolver: zodResolver(commentSchema),
  });

  // State for storing comments
  const [comments, setComments] = useState<CommentData[]>([]);

  // Function to handle form submission
  const onSubmit: SubmitHandler<CommentData> = (data) => {
    // Handle form submission here (e.g., send data to backend)
    console.log(data);
    // Update comments state with new comment
    setComments([...comments, data]);
  };

  return (
    <div className="mt-8 max-w-screen-2xl mx-auto p-4 lg:p-8 border-t-2">
      <h3 className="text-2xl font-semibold mb-4">Add a Comment</h3>
      <form onSubmit={handleSubmit(onSubmit)} className=' w-full lg:w-1/2 p-4  bg-slate-100 dark:bg-slate-800 '>
        <div className="mb-4">
          <Label htmlFor="name" className="block text-gray-700">Name</Label>
          <Input type="text" id="name" {...register('name')} className="mt-1 block w-full" />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        </div>
        <div className="mb-4">
          <Label htmlFor="email" className="block text-gray-700">Email</Label>
          <Input type="email" id="email" {...register('email')} className="mt-1 block w-full" />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>
        <div className="mb-4">
          <Label htmlFor="message" className="block text-gray-700">Message</Label>
          <textarea id="message" {...register('message')} className="form-textarea mt-1 block w-full" />
          {errors.message && <span className="text-red-500">{errors.message.message}</span>}
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
      </form>
      
      {/* Display comments here*/}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Comments</h3>
        <ul className="space-y-4">
          {comments.map((comment, index) => (
            <li key={index} className="border p-4 rounded-lg">
              <p className="font-semibold">{comment.name}</p>
              <p>{comment.message}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentSection;
