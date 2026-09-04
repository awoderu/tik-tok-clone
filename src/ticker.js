import React from 'react'
import './ticker.css';
import { motion } from "motion/react";

const MyTicker = () => {
  return (
    <div style={{ overflow: "hidden", display: "flex", width: "100%" }}>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        style={{ display: "flex", whiteSpace: "nowrap", gap: "2rem" }}
      >
        {/* Render your items twice so it loops seamlessly */}
        <span>Item 1</span><span>Item 2</span><span>Item 3</span>
        <span>Item 1</span><span>Item 2</span><span>Item 3</span>
      </motion.div>
    </div>
  );
};

export default MyTicker;
