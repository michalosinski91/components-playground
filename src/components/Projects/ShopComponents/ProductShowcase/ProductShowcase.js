import React from "react";
import "./ProductShowcase.scss";

import ProductPhotoCarousel from "./ProductPhotoCarousel/ProductPhotoCarousel";

import photo1 from "../../../../assets/images/products/leatherBag1.jpg";
import photo2 from "../../../../assets/images/products/leatherBag2.jpg";
import photo3 from "../../../../assets/images/products/leatherBag3.jpg";
import photo4 from "../../../../assets/images/products/leatherBag4.jpg";

export default function ProductShowcase() {
  const photos = [
    {
      id: 1,
      src: photo1,
      description: "Front",
    },
    {
      id: 2,
      src: photo2,
      description: "Back",
    },
    {
      id: 3,
      src: photo3,
      description: "Side",
    },
    {
      id: 4,
      src: photo4,
      description: "Pocket",
    },
  ];
  return (
    <div className="product-showcase">
      <ProductPhotoCarousel photos={photos} />
    </div>
  );
}
