import React, { useState } from 'react';

interface FormData {
    name: string;
    number: string;
    email: string;
    message: string;
}

export const TestForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({ name: '', number: '', email: '', message: '' });
    const [status, setStatus] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            const response = await fetch('./test-script.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Email sent successfully!');
            } else {
                setStatus('Failed to send email.');
            }
        } catch (error) {
            setStatus('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="max-w-96 mx-auto">
            <form onSubmit={handleSubmit} className='contact-form'>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Name" className="block w-full border border-grayLight my-2.5 p-[15px] rounded-sm placeholder:text-grayLight focus:border-wfGreenLight focus-visible:border-wfGreenLight focus-visible:outline-none text-wfGreenLight" />
                </div>
                <div>
                    <label htmlFor="number">Number:</label>
                    <input type="text" id="number" name="number" value={formData.number} onChange={handleChange} required placeholder="Phone number" className="block w-full border border-grayLight my-2.5 p-[15px] rounded-sm placeholder:text-grayLight text-wfGreenLight" />
                </div>
                
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email" className="block w-full border border-grayLight my-2.5 p-[15px] rounded-sm placeholder:text-grayLight text-wfGreenLight" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="What's on your mind?" className="block w-full border border-grayLight my-2.5 p-[15px] rounded-sm placeholder:text-grayLight text-wfGreenLight" />
                </div>
                <button type="submit" className="block w-full bg-green-600 my-2.5 p-[15px] rounded-md text-white">Submit Enquiry</button>
            </form>
            {status && <p>{status}</p>}
        </div>
    );
};
