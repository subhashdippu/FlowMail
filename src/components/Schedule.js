import React, { useState } from "react";

const SchedulerUI = () => {
  const [launchDate, setLaunchDate] = useState("2025-04-02");
  const [launchTime, setLaunchTime] = useState("12:45");
  const [timezone, setTimezone] = useState("Asia/Calcutta");
  const [addDelay, setAddDelay] = useState(true);
  const [delayFrom, setDelayFrom] = useState(10);
  const [delayTo, setDelayTo] = useState(20);

  const [weekdays, setWeekdays] = useState([
    { day: "Monday", enabled: true, from: "09:00", till: "17:00" },
    { day: "Tuesday", enabled: true, from: "09:00", till: "17:00" },
    { day: "Wednesday", enabled: true, from: "09:00", till: "17:00" },
    { day: "Thursday", enabled: true, from: "09:00", till: "17:00" },
    { day: "Friday", enabled: true, from: "09:00", till: "17:00" },
  ]);

  const handleTimeChange = (index, field, value) => {
    const updated = [...weekdays];
    updated[index][field] = value;
    setWeekdays(updated);
  };

  const toggleDay = (index) => {
    const updated = [...weekdays];
    updated[index].enabled = !updated[index].enabled;
    setWeekdays(updated);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md max-w-3xl mx-auto">
      {/* Launch Settings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-semibold mb-1">
            Launch on - Date
          </label>
          <input
            type="date"
            value={launchDate}
            onChange={(e) => setLaunchDate(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Time</label>
          <input
            type="time"
            value={launchTime}
            onChange={(e) => setLaunchTime(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Timezone</label>
          <select
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            <option value="Asia/Calcutta">Asia/Calcutta</option>
            {/* Add more timezones if needed */}
          </select>
        </div>
      </div>

      {/* Random Delay */}
      <div className="mb-4">
        <label className="flex items-center space-x-2 mb-2">
          <input
            type="checkbox"
            checked={addDelay}
            onChange={() => setAddDelay(!addDelay)}
            className="accent-green-600"
          />
          <span className="font-medium text-sm">Add Random Delays</span>
        </label>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            placeholder="FROM (minutes)"
            value={delayFrom}
            onChange={(e) => setDelayFrom(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
          <input
            type="number"
            placeholder="TO (minutes)"
            value={delayTo}
            onChange={(e) => setDelayTo(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>
      </div>

      {/* Weekday Configuration */}
      <div className="mt-6">
        <h3 className="font-semibold mb-2">Configure Sending Hours & Days</h3>
        <div className="grid grid-cols-6 text-sm font-medium border-b pb-2 mb-2">
          <span>Enabled</span>
          <span>Day</span>
          <span>From</span>
          <span>Till</span>
          <span className="col-span-2">Emails Sends / Day / Sender</span>
        </div>

        {weekdays.map((item, idx) => (
          <div
            key={item.day}
            className="grid grid-cols-6 items-center py-2 border-b last:border-none"
          >
            <div>
              <input
                type="checkbox"
                checked={item.enabled}
                onChange={() => toggleDay(idx)}
                className="accent-green-600"
              />
            </div>
            <div>{item.day}</div>
            <div>
              <input
                type="time"
                value={item.from}
                onChange={(e) => handleTimeChange(idx, "from", e.target.value)}
                className="border rounded px-2 py-1 w-full"
              />
            </div>
            <div>
              <input
                type="time"
                value={item.till}
                onChange={(e) => handleTimeChange(idx, "till", e.target.value)}
                className="border rounded px-2 py-1 w-full"
              />
            </div>
            <div className="col-span-2">
              <input
                type="text"
                disabled
                value="24 - 48"
                className="border rounded px-2 py-1 w-full bg-gray-100 text-center"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <div className="flex justify-end mt-6">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Next
        </button>
      </div>
    </div>
  );
};

export default SchedulerUI;
