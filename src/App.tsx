import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthenticationLayout from "./layouts/AuthenticationLayout";
interface IAppProps {}

const App: React.FC<IAppProps> = ({}) => {
  return (
    <Routes>
      <Route element={<AuthenticationLayout />}>
        <Route path="*" element={<Navigate to="/signin" />} />
        <Route path="signin" element={<div>Signin</div>} />
        <Route path="signup" element={<div>Signup</div>} />
      </Route>
    </Routes>
  );
};

export default App;
