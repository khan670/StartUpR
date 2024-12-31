import React from "react";
import { imgUrl } from "../../data/Product";

const Product: React.FC = () => {
  return (
    <div className="flex gap-3 items-center justify-evenly pt-20 relative z-20">
      {imgUrl.map((img) => (
        <img src={img} />
      ))}
    </div>
  );
};

export default Product;
