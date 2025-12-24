'use client';

import { X } from 'lucide-react';
import { useState } from 'react';

export function EmailDialog({ handleDone }: { handleDone: () => void }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);
    const [responseMsg, setResponseMsg] = useState('');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSend = async () => {
        setLoading(true);
        const res = await fetch('/api/send-email', {
            method: 'POST',
            body: JSON.stringify({
                to: formData.email,
                subject: 'Message from ' + formData.name,
                html: `<p>${formData.message}</p><p>From: ${formData.name} (${formData.email})</p>`,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await res.json();
        setResponseMsg(data.success ? '✅ Message Sent!' : '❌ Failed to send.');
        setLoading(false);
        if (data.success) {
            setTimeout(() => {
                handleDone();
            }, 2000);
        }
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={handleDone}
            />

            {/* Centered Dialog */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-gradient-to-br from-zinc-900 to-black border border-green-500/30 rounded-xl shadow-2xl overflow-hidden">
                    {/* Header */}
                    <div className="relative px-6 py-6 border-b border-green-500/20 bg-black/50">
                        <h2 className="text-xl font-bold text-white">Send a Message</h2>
                        <button
                            onClick={handleDone}
                            className="absolute top-4 right-4 p-1 hover:bg-zinc-800 rounded-lg transition"
                        >
                            <X size={20} className="text-gray-400 hover:text-white" />
                        </button>
                    </div>

                    {/* Form Content */}
                    <div className="px-6 py-6 space-y-4">
                        {/* Name Field */}
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-semibold text-green-400">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className="w-full px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
                            />
                        </div>

                        {/* Email Field */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-semibold text-green-400">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="w-full px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
                            />
                        </div>

                        {/* Message Field */}
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-semibold text-green-400">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your message here..."
                                rows={4}
                                className="w-full px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition resize-none"
                            />
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="px-6 py-4 bg-black/50 border-t border-green-500/20 space-y-3">
                        <button
                            onClick={handleSend}
                            disabled={loading}
                            className="w-full px-4 py-2.5 bg-green-500 hover:bg-green-600 disabled:bg-green-500/50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition duration-200"
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>

                        {responseMsg && (
                            <p className="text-sm text-center font-medium text-green-400 animate-pulse">
                                {responseMsg}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
