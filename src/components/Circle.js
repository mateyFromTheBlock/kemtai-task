import React, { useEffect, useRef } from 'react';

const { innerWidth: width } = window;

const Circle = ({ id, radius, color, angle, className, xPos, yPos, sAngle }) => {
  const idRef = useRef(id);
  useEffect(() => {
    const c = window.document.getElementById(id);
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
