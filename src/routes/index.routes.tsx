import { Routes, Route } from "react-router-dom";
import Preview from "../pages/Preview";
import Home from "../pages/Home";
import { Profile } from "../pages/Profile";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Preview/>} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/profile/:name" element={<Profile />}/>
    </Routes>
  );
};
