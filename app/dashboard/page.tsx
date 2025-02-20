"use client";
import { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js";
import usersData from "@/public/userData.json";
import Navbar from "@/components/Navbar";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const Dashboard = () => {
    const [yourCount, setYourCount] = useState(0);
    const [users, setUsers] = useState(usersData);

    // Insert your count into the users list
    const usersWithYourCount = [
        ...users,
        { id: "your-id", name: "You", count: yourCount } // Add yourself to the list
    ];

    // Count users who have more or less count than you
    const moreThanYou = users.filter((user) => user.count > yourCount).length;
    const lessThanYou = users.filter((user) => user.count <= yourCount).length;

    // 📊 Bar Chart Data
    const barChartData = {
        labels: usersWithYourCount.map((user) => user.name),
        datasets: [
            {
                label: "User Counts",
                data: usersWithYourCount.map((user) => user.count),
                backgroundColor: usersWithYourCount.map((user) =>
                    user.name === "You" ? "black" : user.count > yourCount ? "rgba(255, 99, 132, 0.6)" : "rgba(54, 162, 235, 0.6)"
                ),
            },
        ],
    };

    // 📊 Pie Chart Data
    const pieChartData = {
        labels: ["More than you", "Less than you"],
        datasets: [
            {
                data: [moreThanYou, lessThanYou],
                backgroundColor: ["rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)"],
            },
        ],
    };

    useEffect(() => {
        const count = localStorage.getItem("count");
        if (count) {
            setYourCount(parseInt(count));
        }
    }, []);

    const handleCountChange = (count: number) => {
        setYourCount(count);
        localStorage.setItem("count", count.toString());
    }

    return (
        <>
            <Navbar />
            <main className="flex flex-col justify-center items-center min-h-screen w-full mt-4">
                <h2 className="text-2xl font-bold text-center mb-6">📊 User Activity Dashboard</h2>

                {/* Count Controller */}
                <div className="flex justify-center items-center mb-6">
                    <button onClick={() => handleCountChange(yourCount + 1)} className="px-4 py-2 bg-blue-500 text-white rounded-lg mx-2">
                        Increase Count
                    </button>
                    <button onClick={() => handleCountChange(0)} className="px-2 py-1 border border-black text-black rounded-lg mx-2">
                        Reset
                    </button>
                    <button onClick={() => handleCountChange(yourCount - 1)} className="px-4 py-2 bg-red-500 text-white rounded-lg mx-2">
                        Decrease Count
                    </button>
                </div>

                <div>
                    {/* Your Count */}
                    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-lg font-semibold text-center mb-2">Your Count</h3>
                        <p className="text-2xl font-semibold text-center">{yourCount}</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row w-full justify-center items-start gap-16">
                    {/* 📊 Bar Chart */}
                    <div className="bg-white p-4 rounded-lg shadow-md md:w-2/5 w-full">
                        <h3 className="text-lg font-semibold text-center mb-2">User Count Comparison</h3>
                        <Bar data={barChartData} />
                    </div>

                    {/* 📊 Pie Chart */}
                    <div className="bg-white p-4 rounded-lg shadow-md md:w-2/5 w-full">
                        <h3 className="text-lg font-semibold text-center mb-2">Users Who Have More/Less Count</h3>
                        <Pie data={pieChartData} />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Dashboard;
