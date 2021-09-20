import { gql } from "@apollo/client";

const PRODUCT_LIST = gql`
  query listAllProductsWithReviewsAndAggregate {
    product {
      id
      name
      reviews_aggregate {
        aggregate {
          avg {
            rating
          }
        }
      }
      reviews {
        id
        rating
        text
      }
    }
  }
`;
