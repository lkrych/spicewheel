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
  "minimalist": {wrapper: "minimalist-wrapper", ul: "minimalist-img-grid", detail: {li: "minimalist-overlay-container", img: "minimalist-overlay-img" , p: ""}} ,
  "basic": {wrapper: "basic-wrapper", ul: "basic-img-grid", detail: {li: "", img: "" , p: ""}}
};
