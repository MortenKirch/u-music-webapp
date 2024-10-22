import "./App.css";
import { Routes, Route } from "react-router-dom";
// import NavBarTemp from "./Components/NavBarTemp";
import LoginScreen from "./pages/LoginScreen";
import Explore from "./Pages/Explore";
import HomeScreen from "./pages/HomeScreen";
import Profile from "./pages/Profile";
import NavTop from "./Components/NavbarTop";
import Concerts from "./pages/Concerts";
import Reviews from "./pages/Reviews";
import Notifications from "./pages/Notifications";
import NavbarBottom from "./Components/NavbarBottom";
import CreateAccount from "./Pages/CreateAccount";
import ChooseGenre from "./Pages/ChooseGenre";
import CompleteProfile from "./Pages/CompleteProfile";
import Charts from "./pages/Charts";

function App() {
  return (
    <>
      <NavTop />

      <NavbarBottom />

      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/Charts" element={<Charts />} />
          <Route path="/Concerts" element={<Concerts />} />
          <Route path="/Notifications" element={<Notifications />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Login" element={<LoginScreen />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/choose-genre" element={<ChooseGenre />} />
          <Route path="/finish-profile" element={<CompleteProfile />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
