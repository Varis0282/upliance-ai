"use client";
import { useEffect, useState } from "react";
import Counter from "@/components/home/Counter";
import RichTextEditor from "@/components/home/RichTextEditor";
import UserDataForm from "@/components/home/UserData";
import UserDataForm2 from "@/components/home/UserData2";
import { v4 as uuidv4 } from 'uuid';
import UnsavedChangesWarning from "@/components/UnsavedWarnings";
import Navbar from "@/components/Navbar";
import LiquidEffect from "@/components/LiquidAnimation";

export default function Home() {
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState({ name: "", address: "", email: "", phone: "", userId: "" });
  const [loading, setLoading] = useState(false);
  const [isTrueLeave, setIsTrueLeave] = useState(true);

  // Normalize intensity for background gradient (max intensity at count = 20)
  const intensity = Math.min(Math.abs(count) / 20, 1) * 100;

  const handleFormSubmit = (e: any) => {
    setLoading(true);
    e.preventDefault();
    setTimeout(() => {
      setLoading(false);
      setIsTrueLeave(true);
      localStorage.setItem("userData", JSON.stringify(userData));
    }, 1500);
  }

  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) {
      const userData = JSON.parse(data);
      setUserData(userData);
    } else {
      setUserData({ ...userData, userId: uuidv4() });
    }

    const count = localStorage.getItem("count");
    if (count) {
      setCount(parseInt(count));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCountChange = (count: number) => {
    setCount(count);
    localStorage.setItem("count", count.toString());
  }

  // Dynamic background gradient
  const bgGradient =
    count > 0
      ? `linear-gradient(${intensity}deg, rgba(18, 194, 233, ${intensity / 100}), rgba(196, 113, 237, ${intensity / 100}), rgba(246, 79, 89, ${intensity / 100}))`
      : count < 0
        ? `linear-gradient(${intensity}deg, rgba(185, 43, 39, ${intensity / 100}), rgba(21, 101, 192, ${intensity / 100}))`
        : "white";

  return (
    <>
      <Navbar />
      <main className="flex flex-col justify-center items-center min-h-screen w-full pt-4 gap-y-6" style={{ background: bgGradient }}>
        <div className="w-full max-w-5xl grid grid-cols-1 gap-6">
          {/* Left Section: Counter & Rich Text Editor */}
          <div className="flex flex-row gap-6 w-full">
            <div className="p-6 bg-white shadow-md rounded-lg w-1/2">
              <Counter count={count} setCount={setCount} handleCountChange={handleCountChange} />
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg w-1/2">
              <RichTextEditor userData={userData} setUserData={setUserData} />
            </div>
          </div>

          {/* Right Section: User Data Forms */}
          <div className="flex flex-row gap-6 w-full">
            <div className="p-6 bg-white shadow-md rounded-lg w-1/2">
              <UserDataForm userData={userData} setUserData={setUserData} handleFormSubmit={handleFormSubmit} loading={loading} setIsTrueLeave={setIsTrueLeave} />
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg w-1/2">
              <UserDataForm2 userData={userData} setUserData={setUserData} handleFormSubmit={handleFormSubmit} loading={loading} setIsTrueLeave={setIsTrueLeave} />
            </div>
          </div>
        </div>
        <UnsavedChangesWarning isTrueLeave={isTrueLeave} />
        <div className="w-full">
          <LiquidEffect />
        </div>
      </main>
    </>
  );
}
