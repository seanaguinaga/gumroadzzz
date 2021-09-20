import { IonItem } from "@ionic/react";
import React from "react";

interface ProductReviewsListItemProps {
  review: any;
}

const ProductReviewsListItem: React.FC<ProductReviewsListItemProps> = ({
  review,
}) => {
  let { text, rating } = review;
  return (
    <IonItem lines="none">
      <div slot="start">
        <h3>
          {Array.from([1, 2, 3, 4, 5]).map((star) => {
            return (
              <i
                key={star}
                rating-value={star}
                className={`rating__star ${
                  star <= rating ? "fas" : "far"
                } fa-star`}
              />
            );
          })}
        </h3>
      </div>
      <h3 className="ion-text-wrap">{text}</h3>
    </IonItem>
  );
};

export default ProductReviewsListItem;
