import React from "react";
import "./ShopComponents.scss";

import ProjectChangeAnimation from "../../ProjectChangeAnimation/ProjectChangeAnimation";

import ShopMainNotification from "./ShopMainNotification/ShopMainNotification";
import ShopSecondaryNotification from "./ShopSecondaryNotification/ShopSecondaryNotification";
import ShopCategoryMenu from "./ShopCategoryMenu/ShopCategoryMenu";
import ShopTabMenu from "./ShopTabMenu/ShopTabMenu";
import ProductShowcase from "./ProductShowcase/ProductShowcase";

import paypalLogo from "../../../assets/images/logos/paypal.png";

export default function ShopComponents() {
  return (
    <ProjectChangeAnimation>
      <div className="shop-components">
        <ProductShowcase />
        <ShopTabMenu />
        <ShopCategoryMenu />
        <ShopMainNotification
          title="Check this out!"
          text="Up to 70% discount on the season end products."
        />
        <ShopMainNotification
          title="PayPal"
          text="Up to 70% discount on the season end products."
          icon={paypalLogo}
        />
        <ShopSecondaryNotification
          title="Check our sales."
          text="Up to 70% discount on the season end products."
        />
      </div>
    </ProjectChangeAnimation>
  );
}
