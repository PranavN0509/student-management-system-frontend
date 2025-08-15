
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const StudentList = () => {
    const navigate = useNavigate();
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const getAllStudents = async (req, res) => {
            try {
                // Fetch from API
                const response = await fetch("https://student-management-system-backend-black.vercel.app/students/get-students");
                const data = await response.json();
                // console.log(data)
                setStudents(data);
                console.log(students)

            } catch (e) {
                console.error(e);
                res.status(500).json({ error: "Failed to fetch students" });
            }
        };
        getAllStudents();

    }, [students])


    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
            <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-left overflow-y-visible">
                        {/* Table Head */}
                        <thead className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 uppercase text-sm">
                            <tr>
                                <th className="py-3 px-4">Name</th>
                                <th className="py-3 px-4">Age</th>
                                <th className="py-3 px-4">Gender</th>
                                <th className="py-3 px-4">University</th>
                                <th className="py-3 px-4">Company Department</th>
                                <th className="py-3 px-4">Address-City</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="overflow-y-visible">
                            {students.map((student) => (
                                <tr
                                    key={student.id}
                                    onClick={() => navigate("/students/profile/", {state: student})}
                                    className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                >
                                    <td className="py-3 px-4 text-gray-800 dark:text-gray-100">
                                        {student.firstName} {student.lastName}
                                    </td>
                                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">
                                        {student.age}
                                    </td>
                                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">
                                        {student.gender}
                                    </td>
                                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">
                                        {student.university || "N/A"}
                                    </td>
                                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">
                                        {student.company?.department || "N/A"}
                                    </td>
                                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">
                                        {student.address.city || "N/A"}
                                    </td>
                                </tr>
                            )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default StudentList;