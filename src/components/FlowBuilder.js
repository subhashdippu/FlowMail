import React from "react";
import ReactFlow, { Controls, useNodesState, useEdgesState } from "reactflow";
import "reactflow/dist/style.css";
import { Plus } from "lucide-react";

const AddLeadSourceNode = () => {
  return (
    <div className="bg-white border rounded-md shadow-md px-6 py-4 w-64 text-center text-sm">
      <div className="text-lg font-light">+</div>
      <div className="font-medium text-gray-800">Add Lead Source</div>
      <div className="text-gray-500">Click to add leads from List or CRM</div>
    </div>
  );
};

const SequenceStartPointNode = () => {
  return (
    <div className="bg-white border rounded-md shadow-md px-6 py-4 w-64 text-center text-sm font-medium text-gray-800">
      Sequence Start Point
    </div>
  );
};

const PlusNode = () => {
  return (
    <div className="w-7 h-7 flex items-center justify-center border-2 border-blue-500 rounded-md text-blue-500 cursor-pointer">
      <Plus size={16} />
    </div>
  );
};

const nodeTypes = {
  addLeadSource: AddLeadSourceNode,
  sequenceStart: SequenceStartPointNode,
  plusNode: PlusNode,
};

const initialNodes = [
  {
    id: "1",
    type: "addLeadSource",
    position: { x: 200, y: 40 },
    data: {},
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

export default function FlowBuilder() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

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

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
      >
        <Controls />
      </ReactFlow>
    </div>
  );
}
