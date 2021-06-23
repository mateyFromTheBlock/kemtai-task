export const drawCircle = (id, color) => {
  const c = window.document.getElementById('outerCircle');
  const ctx = c.getContext('2d');
  ctx.beginPath();
  ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  ctx.fill();
};

export default { drawCircle };
