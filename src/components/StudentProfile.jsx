import React from 'react'
import { useLocation } from "react-router-dom";

// Reusable InfoCard Component
const InfoCard = ({ label, value }) => (
    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
        <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
        <p className="text-lg font-semibold">{value || "N/A"}</p>
    </div>
)


const StudentProfile = () => {
    const location = useLocation();
    const student = location.state;

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 flex justify-center">
            <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-center p-6 gap-6 border-b border-gray-200 dark:border-gray-700">
                    <img
                        src={student.image}
                        alt={student.firstName}
                        className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500"
                    />
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl font-bold">
                            {student.firstName} {student.lastName}
                        </h1>
                        <p className="text-indigo-500 font-medium">{student.company.title}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{student.role}</p>
                    </div>
                </div>

                {/* Info Grid */}
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InfoCard label="Age" value={student.age} />
                    <InfoCard label="Gender" value={student.gender} />
                    <InfoCard label="University" value={student.university} />
                    <InfoCard label="Department" value={student.company.department} />
                    <InfoCard label="City" value={student.address.city} />
                    <InfoCard label="Country" value={student.address.country} />
                    <InfoCard label="Email" value={student.email} />
                    <InfoCard label="Phone" value={student.phone} />
                    <InfoCard label="Blood Group" value={student.bloodGroup} />
                    <InfoCard label="Height" value={`${student.height} cm`} />
                    <InfoCard label="Weight" value={`${student.weight} kg`} />
                    <InfoCard label="Eye Color" value={student.eyeColor} />
                    <InfoCard label="Hair" value={`${student.hair.color} (${student.hair.type})`} />
                </div>

                {/* Address */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                    <h2 className="text-lg font-semibold mb-2">Address</h2>
                    <p>{student.address.address}</p>
                    <p>
                        {student.address.city}, {student.address.state} {student.address.postalCode}
                    </p>
                    <p>{student.address.country}</p>
                </div>
            </div>
        </div>
    );
};

export default StudentProfile;