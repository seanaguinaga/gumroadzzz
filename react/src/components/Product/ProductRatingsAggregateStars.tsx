import { IonItem } from "@ionic/react";
import ProductNewReviewButton from "./ProductNewReviewButton";

interface ProductRatingsAggregateStarsProps {
  ratingAggregate: number;
  productID: string;
}

const ProductRatingsAggregateStars: React.FC<ProductRatingsAggregateStarsProps> =
  ({ ratingAggregate, productID }) => {
    return (
      <IonItem lines="none">
        <div slot="start">
          <h3>{Math.round(ratingAggregate * 10) / 10}</h3>
        </div>
        <h3>
          {Array.from([1, 2, 3, 4, 5]).map((star) => {
            return (
              <i
                key={star}
                rating-value={star}
                className={`rating__star ${
                  star <= ratingAggregate ? "fas" : "far"
                } fa-star`}
              />
            );
          })}
        </h3>
        <ProductNewReviewButton productID={productID} />
      </IonItem>
    );
  };

export default ProductRatingsAggregateStars;
