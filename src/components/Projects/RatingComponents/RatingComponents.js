import React from "react";
import "./RatingComponents.scss";
import RatingContainer from "./RatingContainer/RatingContainer";
import RatingOverview from "./RatingOverview/RatingOverview";
import RatingProduct from "./RatingProduct/RatingProduct";
import RatingSummary from "./RatingSummary/RatingSummary";

export default function RatingComponents() {
  return (
    <div className="rating-components">
      <RatingContainer>
        <RatingSummary />
      </RatingContainer>
      <RatingContainer>
        <RatingOverview />
      </RatingContainer>
      <RatingContainer>
        <RatingProduct />
      </RatingContainer>
    </div>
  );
}
