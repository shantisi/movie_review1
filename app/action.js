 "use client"
 
 
import Handledelete from "./delete.js"
import React, { useState } from 'react';
const Action_row =({onDelete})=> {
    const [likes, setLikes] = useState(0);
    const handleLike = () => {
        setLikes(likes + 1);
    };
    const handleDislike = () => {
        setLikes(likes - 1);
    };
    return (
    <div className="action">
        <div className="like">
            <img src="like.png" onClick={handleLike}/>
        </div>
        <div className="rating">
            {likes}                  
        </div>
        <div className="dislike">
            <img src="dislike.png" onClick={handleDislike}/>
        </div>
        <Handledelete
            onDelete={onDelete}
        />
    </div>
  );
};
 export default  Action_row;
