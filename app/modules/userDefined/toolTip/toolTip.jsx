import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Tooltip({ TooltipComponent, children }) {
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        display: "inline-block",
        cursor: "none",
        userSelect: "none",
      }}
    >
      {children}

      <AnimatePresence>
        {show && TooltipComponent && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            style={{
              position: "absolute",
              top: pos.y,
              left: pos.x,
              pointerEvents: "none",
              userSelect: "none",
              zIndex: 9999,
              transformOrigin: "center center",
            }}
          >
            {/* Wrapper div applies centering transform */}
            <div style={{ transform: "translate(-50%, -50%)" }}>
              <TooltipComponent />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
