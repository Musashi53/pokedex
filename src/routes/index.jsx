import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";
import AllPokemonsPage from "../pages/all pokemons";
import CategoriesPage from "../pages/categories";
import SearchPage from "../pages/search";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/allpokemons" element={<AllPokemonsPage/>}/>
        <Route path="/categories" element={<CategoriesPage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
      </Routes>
    </>
  );
};

export default Router;
