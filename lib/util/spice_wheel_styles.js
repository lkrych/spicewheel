export const fetchCSS = (cssStyle, rowNumber) => {
  return (
    {
      row: rows[rowNumber],
      detail: styles[cssStyle]
    }
  );
};


const rows = {
  1: ".col-md-12",
  2: ".col-md-6",
  3: ".col-md-4",
  4: ".col-md-3"
};

const styles = {
  "modern": {ul: "img-grid", detail: {li: "overlay-container", img: "overlay-img .img-responsive" , p: ""}},
  "e-commerce1": {ul: "", detail: {li: "" , img: "" , p: ""}} ,
  "e-commerce2": {ul: "", detail: {li: "" , img: "" , p: ""}}
};
