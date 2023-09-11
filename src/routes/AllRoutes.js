import { Routes, Route } from "react-router-dom"; 
import { MovieList, MovieDetail, PageNotFound, Search} from "../pages";

import React from 'react'

export const AllRoutes = () => {
    return (
        <div className="dark:bg-slate-800">
            <Routes>
                <Route path="/" element={<MovieList api='movie/now_playing'/>} />
                <Route path="/movie/:id" element={<MovieDetail />} />
                <Route path="/movies/popular" element={<MovieList api='movie/popular'/>} />
                <Route path="/movies/top_rated" element={<MovieList  api='movie/top_rated'/>}/>
                <Route path="/movies/upcoming" element={ <MovieList api='movie/upcoming'/>}/>
                <Route path="search" element={<Search api='search/movie'/>} />
                <Route path="*" element={<PageNotFound />}/>
            </Routes>
        </div>
  )
}
