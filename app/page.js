
"use client"

import './globals.css';
import Header from './Header.js';
import Movie_row from './movie_row.js';
import {movie_data} from './movie_data';
import {useState} from "react";

function app(){
    const [data, setMovies]=useState(movie_data)
    
    const handleDelete =(id)=>{
          const update_Movie=data.filter(items=>items.id!==id)
          setMovies(update_Movie);
    };
    
    return(
        <div>
            <Header/>
            {data.map((moves) => (
                <Movie_row
                    key={moves.id}
                    movies={moves}
                    onDelete={() => handleDelete(moves.id)}
                />
            ))};


        </div>
   ) 
 }; 
export default app;
