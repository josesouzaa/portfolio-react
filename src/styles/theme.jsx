export default {
  font: '"Poppins", sans-serif',
  black: "#021e34",
  blueH: "#184271",
  blueM: "#3884b2",
  blueL: "#9cc1d1",
  blueXL: "#d1dee4",
  white: "#f9f9f9",
  mixins: {
    btn: (size, color = "#021e34", peso = "bold") => `
  padding: 0.8rem 1.5rem;
  border-radius: 2rem;
  cursor: pointer;
  color: ${color};
  border: solid 2px ${color};
  font-weight: ${peso};
  font-size: ${size}rem;
`,
    h1: (color = "#021e34") => `
  color: ${color};
  font-size: 3.6rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 4rem;
`,
  },
  d: (size = "m", styles) => {
    if (size === "m") {
      return `@media screen and (min-width: 480px) and (max-width: 760px) {
        ${styles}
      }`;
    }
    if (size === "s") {
      return `@media screen and (max-width: 479px) {
        ${styles}
      }`;
    }
    return "erro";
  },
};
