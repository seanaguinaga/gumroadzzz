import { IonList, IonListHeader } from "@ionic/react";
import React from "react";
import ProductReviewsListItem from "./ProductReviewsListItem";

interface ProductReviewsListProps {
  reviews: any[];
}

const ProductReviewsList: React.FC<ProductReviewsListProps> = ({ reviews }) => {
  return (
    <IonList lines="none">
      <IonListHeader style={{ paddingLeft: 0 }}>Reviews</IonListHeader>
      {reviews.map((review) => (
        <ProductReviewsListItem review={review} />
      ))}
    </IonList>
  );
};

export default ProductReviewsList;
