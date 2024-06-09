// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-orange-300 text-black py-8">
            <div className="container mx-auto text-center">
                <div className="mb-4">
                    <h1 className="text-2xl font-bold">My Mern Blog</h1>
                </div>
                <div className="mb-4">
                    <ul className="flex justify-center space-x-6">
                        <li><a href="#about" className="hover:underline">About</a></li>
                        <li><a href="#services" className="hover:underline">Services</a></li>
                        <li><a href="#contact" className="hover:underline">Contact</a></li>
                    </ul>
                </div>
                <div className="text-sm">
                    <p>&copy; 2024 My Mern Website. All Rights Reserved. by Ibtisam Afzal</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
