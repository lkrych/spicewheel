export const fetchCSS = (cssStyle, rowNumber) => {
  return (
    {
      row: rows[rowNumber],
      detail: styles[cssStyle]
    }
  );
};


const rows = {
  1: "one-per-row",
  2: "two-per-row",
  3: "three-per-row",
  4: "four-per-row"
};

const styles = {
  "modern": {wrapper: "modern-wrapper", ul: "modern-img-grid", detail: {li: "modern-overlay-container", img: "modern-overlay-img" , p: ""}},
  "e-commerce1": {ul: "", detail: {li: "" , img: "" , p: ""}} ,
  "e-commerce2": {ul: "", detail: {li: "" , img: "" , p: ""}}
};
