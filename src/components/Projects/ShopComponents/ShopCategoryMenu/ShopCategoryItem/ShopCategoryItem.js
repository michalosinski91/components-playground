import React from "react";
import "./ShopCategoryItem.scss";

export default function ShopCategoryItem({ category }) {
  return (
    <div className="shop-category-item">
      <div className="shop-category-item__image">
        <i className={category.icon}></i>
      </div>
      <div className="shop-category-item__content">
        <h5>{category.title}</h5>
        <p>{category.items} items</p>
      </div>
      <div className="shop-category-item__icon">
        <i className="fas fa-long-arrow-alt-right fa-2x"></i>
      </div>
    </div>
  );
}
