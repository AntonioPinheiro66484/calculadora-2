const grausparaRaio = (graus) => {
    return (graus * Math.PI) / 180;
  };
  const sin = (graus) => {
    return Math.sin(grausparaRaio(graus)).toFixed(6);
  };
  const cos = (graus) => {
    return Math.cos(grausparaRaio(graus)).toFixed(6);
  };
  const tan = (graus) => {
    return Math.tan(grausparaRaio(graus)).toFixed(6);
  };
  export { sin, cos, tan };