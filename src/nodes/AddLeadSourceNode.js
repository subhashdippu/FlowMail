import React from "react";

const AddLeadSourceNode = ({ data }) => {
  return (
    <div
      onClick={data.onClick}
      className="bg-white border rounded-md shadow-md px-6 py-4 w-64 text-center text-sm"
    >
      <div className="text-lg font-light">+</div>
      <div className="font-medium text-gray-800 cursor-pointer">
        Add Lead Source
      </div>
      <div className="text-gray-500">Click to add leads from List or CRM</div>
    </div>
  );
};

export default AddLeadSourceNode;
