"use client"
import { useState } from 'react';
import { SendIcon } from '../components/icons';

const fieldClasses =
  'w-full bg-transparent border border-stone-700/60 rounded-lg px-4 py-3 text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-amber-600/60 transition-colors';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <main className="max-w-2xl w-full mx-auto px-6 flex-grow">
      <h1 className="text-4xl md:text-5xl font-bold text-stone-100 tracking-tight mb-10">
        contact me.
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className={fieldClasses}
          />
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={fieldClasses}
          />
        </div>
        <textarea
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Drop a note with any website feedback or career opportunities, or just say hi. Where are you from?"
          className={`${fieldClasses} resize-none leading-relaxed`}
        />
        <button
          type="submit"
          className="w-full bg-stone-100 text-stone-900 font-semibold py-3.5 rounded-lg flex items-center justify-center space-x-2 hover:bg-white transition-colors"
        >
          <span>Send Message</span>
          <SendIcon />
        </button>
        <p className="text-xs text-stone-500 pt-1">
          By submitting this form, I agree to the{' '}
          <a href="#" className="font-medium text-stone-400 hover:text-stone-100 transition-colors">
            privacy policy
          </a>
          .
        </p>
      </form>
    </main>
  );
}