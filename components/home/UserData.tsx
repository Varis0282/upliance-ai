"use client";
import { useEffect, useState } from "react";

interface UserDataProps {
    userData: { name: string; address: string; email: string; phone: string; userId: string };
    setUserData: React.Dispatch<React.SetStateAction<{ name: string; address: string; email: string; phone: string; userId: string }>>;
    handleFormSubmit: any;
    loading: boolean;
    setIsTrueLeave: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserDataForm = ({ userData, setUserData, handleFormSubmit, loading, setIsTrueLeave }: UserDataProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsTrueLeave(false);
        setUserData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value || "", // ✅ Always provide a default value
        }));
    };

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-center leading-[42px]">User Data Form</h2>
            <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={userData.name}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    name="userId"
                    placeholder="User Id"
                    value={userData.userId}
                    // onChange={handleChange}
                    className="border p-2 rounded"
                    disabled // User ID should not be editable
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

export default UserDataForm;
