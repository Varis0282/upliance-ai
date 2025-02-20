"use client";
import { useState } from "react";
import Link from 'next/link';
import Logo from '@/public/images/logo.jpg'
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-blue-600 flex items-center gap-x-4">
                    <Image src={Logo} alt="Logo" className="w-12 inline rounded-full" />
                    Upliance.ai
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-600 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✖" : "☰"}
                </button>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    <li><Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link></li>
                    <li><Link href="/dashboard" className="text-gray-700 hover:text-blue-500">Dashboard</Link></li>
                    <li><Link href="#" className="text-gray-700 hover:text-blue-500">Services</Link></li>
                    <li><Link href="#" className="text-gray-700 hover:text-blue-500">Contact</Link></li>
                </ul>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t shadow-md">
                    <ul className="flex flex-col space-y-4 p-4">
                        <li><Link href="/" className="text-gray-700 hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</Link></li>
                        <li><Link href="/dashboard" className="text-gray-700 hover:text-blue-500" onClick={() => setIsOpen(false)}>Dashboard</Link></li>
                        <li><Link href="#" className="text-gray-700 hover:text-blue-500" onClick={() => setIsOpen(false)}>Services</Link></li>
                        <li><Link href="#" className="text-gray-700 hover:text-blue-500" onClick={() => setIsOpen(false)}>Contact</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
