import React, { useState } from "react";
import ReactFlow, {
  Controls,
  useNodesState,
  useEdgesState,
  // Background,
} from "reactflow";
import "reactflow/dist/style.css";
import { Plus } from "lucide-react";
import SourceBlockModal from "./SourceBlockModal";

// Add Lead Source Node
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

// Sequence Start Node
const SequenceStartPointNode = () => (
  <div className="bg-white border rounded-md shadow-md px-6 py-4 w-64 text-center text-sm font-medium text-gray-800">
    Sequence Start Point
  </div>
);

// Plus Node
const PlusNode = () => (
  <div className="w-7 h-7 flex items-center justify-center border-2 border-blue-500 rounded-md text-blue-500 cursor-pointer bg-white shadow">
    <Plus size={16} />
  </div>
);

// Node types mapping
const nodeTypes = {
  addLeadSource: AddLeadSourceNode,
  sequenceStart: SequenceStartPointNode,
  plusNode: PlusNode,
};

export default function FlowBuilder() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const initialNodes = [
    {
      id: "1",
      type: "addLeadSource",
      position: { x: 200, y: 40 },
      data: { onClick: openModal },
    },
    {
      id: "2",
      type: "sequenceStart",
      position: { x: 200, y: 200 },
      data: {},
    },
    {
      id: "3",
      type: "plusNode",
      position: { x: 310, y: 340 },
      data: {},
    },
  ];

  const initialEdges = [
    { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
    { id: "e2-3", source: "2", target: "3", type: "smoothstep" },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div style={{ height: "84vh" }}>
      <div className="p-6 border-b flex justify-between items-center bg-white">
        <div>
          <h2 className="text-lg font-semibold">delete ✎</h2>
          <p className="text-sm text-gray-500">
            Click on a block to configure and add it in sequence.
          </p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
          Save & Schedule
        </button>
      </div>

      {/* <div className="w-full h-screen"> */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
      >
        <Controls />
        {/* <Background /> */}
      </ReactFlow>

      {/* Modal Component */}
      {isModalOpen && <SourceBlockModal onClose={closeModal} />}
    </div>
  );
}
