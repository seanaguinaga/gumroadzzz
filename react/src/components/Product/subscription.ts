import { gql } from "@apollo/client";

const PRODUCT_LIST = gql`
  subscription listenToAllProductsWithReviewsAndAggregate {
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
