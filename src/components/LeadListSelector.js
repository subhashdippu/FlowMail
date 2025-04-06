import React from "react";
import { X } from "lucide-react";

const LeadListSelectorOverlay = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center backdrop-blur-sm bg-black/30">
      <div className="bg-white rounded-lg shadow-xl w-[600px] p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
        >
          <X size={24} />
        </button>
        <h1 className="text-2xl font-bold mb-4">Select Lead Lists</h1>
        <p className="text-gray-600 mb-4">
          This is where you choose your lead lists.
        </p>
        {/* Insert your multi-select list component or functionality here */}
      </div>
    </div>
  );
};

export default LeadListSelectorOverlay;
