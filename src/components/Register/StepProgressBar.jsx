import { motion } from "framer-motion";

export default function StepProgressBar({ step, totalSteps }) {
  const stepNames = [
    "Basic Details",
    "Address",
    "Aadhaar Verification",
    "Education",
    "Achievements",
    "Social Media",
  ];

  const percentage = ((step - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="relative w-full mb-5">
      {/* Circles Row */}
      <div className="flex justify-between items-center relative z-10 px-4 sm:px-10">
        {stepNames.map((name, idx) => {
          const active = step >= idx + 1;
          return (
            <div key={idx} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-semibold
                ${active ? "bg-blue-600" : "bg-gray-300"}`}
              >
                {idx + 1}
              </div>

              <p
                className={`text-xs sm:text-sm mt-2 font-medium
                ${active ? "text-blue-700" : "text-gray-500"}`}
              >
                {name}
              </p>
            </div>
          );
        })}
      </div>

      {/* Progress bar only between circles */}
      <div className="absolute top-4 left-[calc(8.333%+0rem)] right-[calc(8.333%+0rem)] h-2 bg-gray-300 rounded-full z-0">
        <motion.div
          className="h-2 bg-blue-600 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </div>
  );
}
