import { useState } from "react";

const AddnewStudent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    birthDate: "",
    image: "",
    bloodGroup: "",
    height: "",
    weight: "",
    eyeColor: "",
    hairColor: "",
    hairType: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    university: "",
    department: "",
    companyName: "",
  });



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newobj = {
      ...formData,
      address: {
        city: formData.city,
        state: formData.state,
        postalCode: formData.postalCode
      }
    }
    try {
      const response = await fetch("https://student-management-system-backend-black.vercel.app/students/add-student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newobj),
      });

      if (!response.ok) {
        throw new Error("Failed to add student");
      }

      const data = await response.json();
      console.log("Student added successfully:", data);

      // Optional: reset form
      setFormData({
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        email: "",
        phone: "",
        birthDate: "",
        image: "",
        bloodGroup: "",
        height: "",
        weight: "",
        eyeColor: "",
        hairColor: "",
        hairType: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
        university: "",
        department: "",
        companyName: "",
      });
    } catch (error) {
      console.error("Error:", error.message);
    }
  };


  // Reusable input field styles
  const inputClass =
    "w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-4 py-6">
      <div className="w-full max-w-6xl bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 sm:p-10 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Add New Student
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className={inputClass} required />
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className={inputClass} required />
              <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} className={inputClass} required />
              <select name="gender" value={formData.gender} onChange={handleChange} className={inputClass} required>
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className={inputClass} required />
              <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className={inputClass} required />
              <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} className={inputClass} />
              <input type="url" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} className={inputClass} />
            </div>
          </div>

          {/* Physical Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Physical Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <input type="text" name="bloodGroup" placeholder="Blood Group" value={formData.bloodGroup} onChange={handleChange} className={inputClass} />
              <input type="number" name="height" placeholder="Height (cm)" value={formData.height} onChange={handleChange} className={inputClass} />
              <input type="number" name="weight" placeholder="Weight (kg)" value={formData.weight} onChange={handleChange} className={inputClass} />
              <input type="text" name="eyeColor" placeholder="Eye Color" value={formData.eyeColor} onChange={handleChange} className={inputClass} />
              <input type="text" name="hairColor" placeholder="Hair Color" value={formData.hairColor} onChange={handleChange} className={inputClass} />
              <input type="text" name="hairType" placeholder="Hair Type" value={formData.hairType} onChange={handleChange} className={inputClass} />
            </div>
          </div>

          {/* Address Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Address
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <input type="text" name="address" placeholder="Street Address" value={formData.address} onChange={handleChange} className={inputClass} />
              <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className={inputClass} />
              <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} className={inputClass} />
              <input type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} className={inputClass} />
              <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} className={inputClass} />
            </div>
          </div>

          {/* Education & Work */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Education & Work
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <input type="text" name="university" placeholder="University" value={formData.university} onChange={handleChange} className={inputClass} />
              <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} className={inputClass} />
              <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} className={inputClass} />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              onClick={handleSubmit}
            >
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


export default AddnewStudent;