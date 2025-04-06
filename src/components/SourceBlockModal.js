import React from "react";
import { X } from "lucide-react"; // Close icon
import { useNavigate } from "react-router-dom"; // For navigation

const SourceBlockModal = ({ onClose }) => {
  const navigate = useNavigate();

  const sources = [
    {
      title: "Leads from List(s)",
      description: "Connect multiple lists as source for this sequence.",
      icon: "👤➕",
      onClick: () => {
        onClose(); // Close modal first
        navigate("/lead-list-selector"); // Navigate to your route
      },
    },
    {
      title: "Segment by Events",
      description:
        "Create a segment of leads who have engaged with emails previously.",
      icon: "📊",
    },
    {
      title: "Segment of List",
      description:
        "Create a segment of leads which match SalesBlink Variables.",
      icon: "👥",
    },
    {
      title: "Lead from CRM Integration",
      description: "Pulls leads from your CRM integrations.",
      icon: "⚡",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-xl w-[600px] p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-semibold mb-2">
          Add a Source Block{" "}
          <span
            className="ml-1 cursor-help"
            title="Pick a block & configure, any new leads that match rules will be added to sequence automatically."
          >
            ❓
          </span>
        </h2>
        <p className="text-gray-600 mb-4">
          Pick a block & configure, any new leads that match rules will be added
          to sequence automatically.
        </p>

        <div className="grid grid-cols-2 gap-4">
          {sources.map((src, idx) => (
            <div
              key={idx}
              onClick={src.onClick}
              className="border border-gray-200 hover:border-pink-500 transition-colors rounded-lg p-4 cursor-pointer flex gap-3 items-start"
            >
              <div className="text-2xl bg-pink-100 text-pink-600 p-2 rounded">
                {src.icon}
              </div>
              <div>
                <div className="font-semibold">{src.title}</div>
                <div className="text-gray-500 text-sm">{src.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SourceBlockModal;
