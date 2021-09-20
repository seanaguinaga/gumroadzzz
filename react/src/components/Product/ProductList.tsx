import { IonList, IonLoading, IonToast } from "@ionic/react";
import * as React from "react";
import { useListenToAllProductsWithReviewsAndAggregateSubscription } from "../../generated/graphql";
import ProductListCard from "./ProductListCard";

const ProductList = () => {
  let { data, loading, error } =
    useListenToAllProductsWithReviewsAndAggregateSubscription();

  if (loading) {
    return <IonLoading isOpen />;
  }

  if (error) {
    return <IonToast isOpen message={error.message} />;
  }

  return (
    <IonList>
      {data?.product.map((product) => {
        return (
          <ProductListCard
            key={product.id}
            name={product?.name ?? "No Name"}
            ratingAggregate={
              product?.reviews_aggregate?.aggregate?.avg?.rating ?? 0
            }
            reviews={product.reviews}
            id={product.id}
          />
        );
      })}
    </IonList>
  );
};

export default ProductList;
