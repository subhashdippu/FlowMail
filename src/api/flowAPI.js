// File: src/api/flowAPI.js
import axios from "axios";

export const scheduleEmail = async (emailData) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/schedule-email",
      emailData
    );
    return response.data;
  } catch (error) {
    console.error("Failed to schedule email", error);
    throw error;
  }
};
