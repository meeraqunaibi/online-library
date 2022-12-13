import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import MainPage from "./pages/mainPage/MainPage";
import LoginPage from "./pages/loginPage/loginPage";
import UserProvider, {
  UserContext,
} from "./components/provider/userProvider.component";
import { useContext, useEffect } from "react";
function App() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  return (
    <div className="App">
      <UserProvider>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="/" element={<Navigate to="/library" />} />
          <Route path="library" element={<MainPage />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
