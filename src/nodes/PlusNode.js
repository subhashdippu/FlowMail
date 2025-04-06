import React from "react";
import { Plus } from "lucide-react";

const PlusNode = () => (
  <div className="w-7 h-7 flex items-center justify-center border-2 border-blue-500 rounded-md text-blue-500 cursor-pointer bg-white shadow">
    <Plus size={16} />
  </div>
);

export default PlusNode;
