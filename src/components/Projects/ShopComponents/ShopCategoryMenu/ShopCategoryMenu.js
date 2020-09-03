import React from "react";
import "./ShopCategoryMenu.scss";
import ShopCategoryItem from "./ShopCategoryItem/ShopCategoryItem";

export default function ShopCategoryMenu() {
  const categoryItems = [
    {
      id: 1,
      title: "Sportswear",
      items: 167,
      icon: "fas fa-basketball-ball fa-3x",
    },
    {
      id: 2,
      title: "Accessories",
      items: 86,
      icon: "fas fa-wallet fa-3x",
    },
    {
      id: 3,
      title: "Merchandise",
      items: 123,
      icon: "fas fa-coffee fa-3x",
    },
  ];

  return (
    <div className="shop-category-menu">
      {categoryItems.map((category) => (
        <ShopCategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
