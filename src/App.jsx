import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBarTemp from "./Components/NavBarTemp";
import LoginScreen from "./pages/LoginScreen";
import Explore from "./pages/Explore";
import HomeScreen from "./pages/HomeScreen";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <NavBarTemp />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Login" element={<LoginScreen />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
