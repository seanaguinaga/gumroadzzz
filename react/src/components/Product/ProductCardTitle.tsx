import { IonCardTitle } from "@ionic/react";

interface ProductCardTitleProps {
  name: string;
}

const ProductCardTitle: React.FC<ProductCardTitleProps> = ({ name }) => {
  return <IonCardTitle>{name}</IonCardTitle>;
};

export default ProductCardTitle;
