import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Movies from "./components/Movies";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies" element={<Movies/>} />
    </Routes>
    </Provider>
    </BrowserRouter>
  )
};

export default App;