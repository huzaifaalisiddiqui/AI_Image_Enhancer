import React from "react";

const Loading = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-full space-y-2"
      aria-label="Loading"
    >
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-blue-400 border-t-transparent animate-spin" />
        <div className="absolute inset-0 rounded-full blur-sm opacity-30 border-4 border-blue-400 border-t-transparent animate-spin"></div>
      </div>
      <span className="text-sm text-gray-600 animate-pulse font-medium">
        Enhancing image...
      </span>
    </div>
  );
};

export default Loading;
