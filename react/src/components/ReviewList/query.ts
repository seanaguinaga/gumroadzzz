import { gql } from "@apollo/client";

const LIST_REVIEWS_QUERY = gql`
  query listProductReviews($product_id: uuid!) {
    review(where: { product_id: { _eq: $product_id } }) {
      rating
      text
    }
  }
`;
