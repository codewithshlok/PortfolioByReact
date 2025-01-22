import React, { useState } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        message: "",
    });
    const [flashMessage, setFlashMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://192.168.132.13:8080/demo", formData);
            console.log(response.data);
            setFlashMessage("Thank you for reaching out! We will get back to you soon.");
            setFormData({ name: "", mobile: "", email: "", message: "" });
        } catch (error) {
            console.error("Error submitting the form:", error);
            setFlashMessage("Failed to send the message. Please try again later.");
        }

        setTimeout(() => setFlashMessage(""), 10000); // Flash message disappears after 10 seconds
    };


    return (
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center px-5 py-10"
            style={{
                backgroundImage: "url('/contact.webp')",
            }}
        >
            <div className="w-full max-w-3xl bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold">Contact a Full Stack Developer</h2>
                    <p className="mt-2 text-lg md:text-xl">
                        Let’s collaborate or discuss any doubts or suggestions you might have!
                    </p>
                </div>

                <form className="p-6 md:p-10" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="mobile" className="block text-gray-700 font-medium mb-2">Mobile Number</label>
                        <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your mobile number"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                            placeholder="Enter your message"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Send Message
                    </button>
                </form>

                {flashMessage && (
                    <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
                        {flashMessage}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contact;