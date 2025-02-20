"use client";
import { useEffect, useState } from "react";
interface UserDataProps {
    userData: { name: string; address: string; email: string; phone: string, userId: string };
    setUserData: React.Dispatch<React.SetStateAction<{ name: string; address: string; email: string; phone: string, userId: string }>>;
    handleFormSubmit: any;
    loading: boolean;
    setIsTrueLeave: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserDataForm2 = ({ userData, setUserData, handleFormSubmit, loading, setIsTrueLeave }: UserDataProps) => {
    const handleChange = (e: any) => {
        setIsTrueLeave(false);
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };
    return (
        <div className="flex flex-col gap-4">
            {/* <h2 className="text-xl font-bold text-center">User Data Form</h2> */}
            {/* <input
                type="text"
                name="name"
                placeholder="Name"
                value={userData.name}
                onChange={handleChange}
                className="border p-2 rounded"
            />
            <input
                type="text"
                name="id"
                placeholder="User Id"
                value={userId}
                // onChange={handleChange}
                className="border p-2 rounded"
                readOnly
            /> */}
            <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={userData.address}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={userData.email}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={userData.phone}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />
                <button
                    className={`flex duration-300 items-center justify-center gap-x-2 px-6 py-2 font-medium rounded-lg transition-all ${loading ? "bg-gray-200 cursor-not-allowed" : "border border-black hover:bg-black hover:text-white text-black"}`}
                    type="submit">
                    <span>Save</span>
                    {loading && (
                        <div className="inline w-5 h-5 border-2 border-gray-300 border-t-white rounded-full animate-spin"></div>
                    )}
                </button>
            </form>
        </div>
    );
};

export default UserDataForm2;
