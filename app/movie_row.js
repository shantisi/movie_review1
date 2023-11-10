import Action_row from "./action.js"
import { movie_data} from './movie_data.js';
const Movie_row=({movies,onDelete}) =>{
    return(
    <> 
    	<div className ="movie_row">
    		<div className ="img_col">
    			<img className="movie_row1"src={movies.image} alt ="movie"/>
            </div>
            <div className="img_col1">
                <div className="Details">
                    <div className="a"><h1>{movies.movie_name}</h1></div>
                    <div className="p">{movies.year_time} | {movies.joner}</div>
                    <h2>Description</h2>  
                    <p>{movies.description}</p>                
                </div>
                 
                <Action_row onDelete={onDelete} movie={movies}/>
             </div>
        </div>
      </>
    );
};
export default Movie_row;
