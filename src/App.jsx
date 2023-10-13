import React from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "./Views/Homepage";
import MoviePage from "./Views/MoviePage";
import SearchResults from "./Views/SearchResults";
import Header from "./Components/Header";
import Footer from "./Components/Footer/index";

function App() {
    useEffect(() => {
        document.title = "Streaminal-TV";
    }, []);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route exact path="/watch" element={<MoviePage />} />
                <Route
                    exact
                    path="/search/:query"
                    element={<SearchResults />}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
