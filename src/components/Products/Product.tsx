import React from "react";
import { imgUrl } from "../../data/Product";

const Product: React.FC = () => {
  return (
    <section
      className="px-3 sm:px-0 flex gap-y-10 gap-x-3 flex-col sm:flex-row items-center justify-evenly pt-20 relative z-20"
      id="product"
    >
      {imgUrl.map((img) => (
        <img src={img} />
      ))}
    </section>
  );
};

export default Product;
