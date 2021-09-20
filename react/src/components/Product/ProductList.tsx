import { IonList } from "@ionic/react";
import * as React from "react";
import ProductListCard from "./ProductListCard";

const TestProducts = [
  {
    id: "hello",
    name: "Test Product",
    reviews_aggregate: {
      aggregate: {
        average: {
          rating: 2,
        },
      },
    },
    reviews: [{ rating: 2, text: "First Review" }],
  },
];

const ProductList = () => {
  return (
    <IonList>
      {TestProducts.map((product) => {
        return (
          <ProductListCard
            name={product.name}
            ratingAggregate={product.reviews_aggregate.aggregate.average.rating}
            reviews={product.reviews}
            id={product.id}
          />
        );
      })}
    </IonList>
  );
};

export default ProductList;
