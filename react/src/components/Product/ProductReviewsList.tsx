import { IonItem, IonLabel, IonList, IonListHeader } from "@ionic/react";
import React from "react";
import { Review } from "../../generated/graphql";
import ProductReviewsListItem from "./ProductReviewsListItem";

interface ProductReviewsListProps {
  reviews: Partial<Review>[];
}

const ProductReviewsList: React.FC<ProductReviewsListProps> = ({ reviews }) => {
  return (
    <IonList lines="none">
      <IonListHeader style={{ paddingLeft: 0 }}>Reviews</IonListHeader>
      {reviews.length === 0 && (
        <IonItem>
          <IonLabel>No Reviews</IonLabel>
        </IonItem>
      )}
      {reviews.map((review) => (
        <ProductReviewsListItem review={review} key={review.id} />
      ))}
    </IonList>
  );
};

export default ProductReviewsList;
