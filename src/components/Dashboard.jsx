import { useEffect, useState } from "react";
import StatCard from "./StatCard.jsx"

const Dashboard = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3000/dashboard/stats")
            .then(res => res.json())
            .then(data => {
                setStats(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching dashboard stats:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen text-gray-600 dark:text-gray-300">Loading...</div>;
    }

    if (!stats) {
        return <div className="flex justify-center items-center min-h-screen text-red-500">Failed to load data.</div>;
    }


    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 py-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-center text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8">
                    Student Dashboard
                </h1>
                {/* Stats Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <StatCard title="Total Students" value={stats.totalStudents} />
                    <StatCard title="Male Students" value={stats.genderCount?.male || 0} />
                    <StatCard title="Female Students" value={stats.genderCount?.female || 0} />
                    <StatCard title="Average Age" value={stats.averageAge} />
                    <StatCard title="Youngest Age" value={stats.minAge} />
                    <StatCard title="Oldest Age" value={stats.maxAge} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard