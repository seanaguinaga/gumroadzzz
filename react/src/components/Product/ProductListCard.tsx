import { IonCard, IonCardContent, IonCardHeader } from "@ionic/react";
import { Review } from "../../generated/graphql";
import ProductCardTitle from "./ProductCardTitle";
import ProductRatingsAggregateStars from "./ProductRatingsAggregateStars";
import ProductReviewsList from "./ProductReviewsList";

interface ProductListCardProps {
  id: string;
  name: string;
  ratingAggregate: number;
  reviews: Partial<Review>[];
}

const ProductListCard: React.FC<ProductListCardProps> = ({
  ratingAggregate,
  name,
  reviews,
  id: productID,
}) => {
  return (
    <IonCard>
      <IonCardHeader>
        <ProductCardTitle name={name} />
        <ProductRatingsAggregateStars
          ratingAggregate={ratingAggregate}
          productID={productID}
        />
      </IonCardHeader>
      <IonCardContent>
        <ProductReviewsList reviews={reviews} />
      </IonCardContent>
    </IonCard>
  );
};

export default ProductListCard;
