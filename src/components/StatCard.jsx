import React, { useEffect, useState } from "react";

// Card component
const StatCard = ({ title, value }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 flex flex-col justify-center items-center transition-colors duration-300">
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">{title}</h3>
      <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-2">{value}</p>
    </div>
  );
};

export default StatCard;