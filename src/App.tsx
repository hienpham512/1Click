import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthenticationLayout from "./layouts/AuthenticationLayout";
import Signin from "./pages/Signin";
interface IAppProps {}

const App: React.FC<IAppProps> = ({}) => {
  return (
    <Routes>
      <Route element={<AuthenticationLayout />}>
        <Route path="*" element={<Navigate to="/signin" />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<div>Signup</div>} />
      </Route>
    </Routes>
  );
};

export default App;
