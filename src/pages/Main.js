import React from "react";
import { Outlet } from "react-router-dom";
import LeadListSelector from "../components/LeadListSelector";
function HomePage() {
  return (
    <div>
      {/* <Navbar /> */}
      <Outlet />
      {/* <LeadListSelector /> */}
    </div>
  );
}

export default HomePage;
