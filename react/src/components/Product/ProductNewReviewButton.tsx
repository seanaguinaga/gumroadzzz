import { IonButton } from "@ionic/react";
import React from "react";
interface ProductNewReviewButtonProps {
  productID: string;
}

const ProductNewReviewButton: React.FC<ProductNewReviewButtonProps> = ({
  productID,
}) => (
  <IonButton routerLink={`/review/${productID}`} slot="end" color="medium">
    Add review
  </IonButton>
);

export default ProductNewReviewButton;
