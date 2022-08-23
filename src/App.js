import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import AppRoutes from "./AppRoutes/AppRoutes";

// import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes></AppRoutes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
