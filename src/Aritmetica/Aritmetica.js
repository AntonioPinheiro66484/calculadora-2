const decimalBinario = (decimal) => {
    return (decimal >>> 0).toString(2);
  };
  
  const binarioDecimal = (binary) => {
    return parseInt(binary, 2);
  };
  
  const decimalOcta = (decimal) => {
    return (decimal >>> 0).toString(8);
  };
  
  const octaDecimal = (octal) => {
    return parseInt(octal, 8);
  };
  
  const decimalHexadecimal = (decimal) => {
    return (decimal >>> 0).toString(16).toUpperCase();
  };
  
  const hexadecimalDecimal = (hexadecimal) => {
    return parseInt(hexadecimal, 16);
  };
  
  export { decimalBinario, binarioDecimal, decimalOcta, octaDecimal, decimalHexadecimal, hexadecimalDecimal };