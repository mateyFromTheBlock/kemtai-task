import React, { useEffect, useRef } from 'react';

// eslint-disable-next-line no-undef
const { innerWidth: width, document } = window;

const Circle = ({ id, radius, color, angle, className, xPos, yPos, sAngle }) => {
  const idRef = useRef(id);
  useEffect(() => {
    const c = document.getElementById(id);
    const ctx = c.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(xPos, yPos);
    ctx.arc(xPos, yPos, radius, sAngle, angle);
    ctx.fillStyle = color;
    ctx.fill();
  }, [angle, color, radius]);

  return <canvas id={idRef.current} width={width} className={className} />;
};

export default Circle;
