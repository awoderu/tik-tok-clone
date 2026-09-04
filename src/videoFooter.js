import React from 'react'
import "./videoFooter.css";
import { IoMdMusicalNote } from "react-icons/io";
// import Ticker from './ticker';
import { motion } from "motion/react";
// import Ticker from 'react-ticker';


function VideoFooter() {
  return (
    <div className='videoFooter'>
      <div className='videoFooter__text'>
          <h3>@user12341969</h3>
          <p>this is a description </p>
          
          <div className='videoFooter__musicRow'>
            <IoMdMusicalNote className='videoFooter__icon' size="2em" />
            <div className='videoFooter__ticker'>
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration: 10, repeat: Infinity }}
                style={{ display: "flex", width: "max-content", whiteSpace: "nowrap", gap: "2rem" }}
              >
                <span>Item 1</span><span>Item 2</span><span>Item 3</span>
                <span>Item 1</span><span>Item 2</span><span>Item 3</span>
              </motion.div>
            </div>
          </div>
              {/* <Ticker/> */}
      </div>
      <img className='videoFooter__record' src='https://static.thenounproject.com/png/934821-200.png' alt='' />
    </div>
  )
}

export default VideoFooter;
