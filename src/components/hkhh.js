// src/components/EmailComposer.jsx

import React from "react";
import { MdOutlineDrafts } from "react-icons/md";

const EmailComposer = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl mx-auto p-6">
        {/* Title */}
        <h2 className="text-xl font-semibold mb-4">
          Business Offer? What are you selling?
        </h2>

        {/* Offer + Language + Button */}
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Your Offer, Ex: SEO services for enterprises in USA"
            className="flex-grow border border-gray-300 rounded-md p-2"
          />
          <select className="border border-gray-300 rounded-md p-2">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-1">
            <MdOutlineDrafts className="text-xl" />
            Draft Email
          </button>
        </div>

        {/* Subject Line */}
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Subject Line <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter Subject Line"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Email Body */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <button className="text-sm bg-gray-200 px-2 py-1 rounded">
              Default Variables
            </button>
            <button className="text-sm bg-gray-200 px-2 py-1 rounded">
              List Variables
            </button>
            <button className="text-sm bg-gray-200 px-2 py-1 rounded">
              Spintax
            </button>
            <button className="text-sm bg-gray-200 px-2 py-1 rounded">
              Unsubscribe Link
            </button>
            <button className="text-sm bg-gray-200 px-2 py-1 rounded">
              Personalized Image
            </button>
          </div>
          <textarea
            rows={8}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Write your email..."
          >
            test
          </textarea>
        </div>

        {/* Score Sidebar */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 text-sm">
          <div>
            <p className="font-semibold">Overall Score</p>
            <p className="text-gray-500">Write More…</p>
          </div>
          <div>
            <p className="font-semibold">Words</p>
            <p className="text-gray-500">0</p>
          </div>
          <div>
            <p className="font-semibold">Read Time</p>
            <p className="text-gray-500">less than a minute</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-6">
          {["Urgency", "Shady", "Over Promise", "Money", "Unnatural"].map(
            (label, index) => (
              <div
                key={index}
                className="bg-gray-100 p-2 rounded-md text-center border text-sm"
              >
                <p className="text-red-500 font-semibold">0</p>
                <p>{label}</p>
              </div>
            )
          )}
        </div>

        {/* Attachments */}
        <div className="mt-6 border-t pt-4">
          <p className="text-sm font-medium mb-2">Add Attachments</p>
          <div className="border border-dashed border-gray-400 p-4 rounded-md text-center text-gray-500">
            Drag 'n' Drop up to 3 files as attachments.
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailComposer;
