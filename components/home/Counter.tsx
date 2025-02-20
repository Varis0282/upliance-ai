"use client";
import { useEffect, useState } from "react";

interface CounterProps {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    handleCountChange: (count: number) => void;
}

const Counter = ({ count, setCount, handleCountChange }: CounterProps) => {

    return (
        <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl font-bold">{count}</h2>
            <div className="flex gap-2">
                <button onClick={() => handleCountChange(count + 1)} className="px-4 py-2 bg-gray-200 hover:bg-gray-400 transition rounded">
                    +
                </button>
                <button onClick={() => handleCountChange(0)} className="px-4 py-2 bg-gray-200 hover:bg-gray-400 transition rounded">
                    Reset
                </button>
                <button onClick={() => handleCountChange(count - 1)} className="px-4 py-2 bg-gray-200 hover:bg-gray-400 transition rounded">
                    -
                </button>
            </div>
        </div>
    );
};

export default Counter;
