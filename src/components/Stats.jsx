import React from "react";

function Stats({
  Icon,
  iconColor,
  label = "Total Income:",
  amount = "0",
}) {
  return (
    <div className="w-full p-2 sm:p-4 bg-black">
      <div className="flex justify-center">
        
        <div className="w-full sm:w-auto flex items-center gap-4 sm:gap-6 
                        p-4 sm:p-5 
                        bg-cyan-800 hover:bg-slate-500 
                        transition-colors 
                        rounded-lg border text-white">

          {/* Icon */}
          <Icon className={`text-3xl sm:text-4xl ${iconColor}`} />

          {/* Text */}
          <div className="flex flex-col">
            <div className="text-xs sm:text-sm text-gray-100">
              {label}
            </div>
            <div className="text-lg sm:text-xl font-semibold">
              {amount}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Stats;