import { Routes, Route } from "react-router-dom";
import Preview from "../pages/Preview";
import Home from "../pages/Home";
import About from "../pages/About";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Preview/>} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  );
};

export default Router;
