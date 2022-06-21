import { Switch, Routes, Link } from "react-router-dom";
import HomePage from "../pages/home";
import AllPokemonsPage from "../pages/all pokemons";
import CategoriesPage from "../pages/categories";
import SearchPage from "../pages/search";

const Router = () => {
  return (
    <>
      <Switch>
        <Routes path={HomePage}/>
        <Routes path={AllPokemonsPage}/>
        <Routes path={CategoriesPage}/>
        <Routes path={SearchPage}/>
      </Switch>
    </>
  );
};

export default Router;
