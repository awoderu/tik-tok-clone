import React from 'react';
import "./videoSidebar.css"; 
import  {useState} from 'react'
import { MdFavorite } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineMessage } from "react-icons/md";
import { FaShare } from "react-icons/fa6";


function Sidebar (){
const [liked, setLiked] = useState(false);


    return(
        <div className='videoSidebar'>
           <div className='videoSidebar__button'>
            {liked ? 
            <MdFavorite 
            onClick={e => setLiked(false)}
            />:<GrFavorite
             onClick={e => setLiked(true)} />}
                
            <p>300</p>
            </div>
             
            <div className='videoSidebar__button'>
                <MdOutlineMessage/>
                <p>Message</p>
            </div>
            <div className='videoSidebar__button'>
                <FaShare/>
                <p>Share</p>
            </div>
                
                
                
                
        
           
        </div>
    );

}

export default Sidebar;