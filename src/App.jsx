import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBarTemp from "./Components/NavBarTemp";
import LoginScreen from "./pages/LoginScreen";
import Explore from "./pages/Explore";
import HomeScreen from "./pages/HomeScreen";
import Profile from "./pages/Profile";
import NavTop from "./Components/NavbarTop";
import Concerts from "./pages/Concerts";
import Reviews from "./pages/Reviews";
import Notifications from "./pages/Notifications";
import NavbarBottom from "./Components/NavbarBottom";

function App() {
  return (
    <>
      <NavTop />
      <NavBarTemp />
      <NavbarBottom />

      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/Concerts" element={<Concerts />} />
          <Route path="/Notifications" element={<Notifications />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Login" element={<LoginScreen />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
