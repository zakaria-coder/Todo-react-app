import React from "react";
import { Routes, Route } from "react-router-dom";
import AllMeetUpsPage from "./pages/AllMeetUps";
import NewMeetUpPage from "./pages/NewMeetUp";
import FavoritesPage from "./pages/Favorites";
import "./App.css"; // Import the CSS file
import NavigationBar from "./components/layout/MainNavigation";

function App() {
  return (
    <div>   
    <NavigationBar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<AllMeetUpsPage />} />
          <Route path="/NewMeetUp" element={<NewMeetUpPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>

      <footer>© 2024 Todo APP. All rights reserved.</footer>
    </div>
  );
}

export default App;
