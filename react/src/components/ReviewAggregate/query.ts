import { gql } from "@apollo/client";

const REVIEW_AGGREGATE_QUERY = gql`
  query getReviewsAggregate {
    review_aggregate {
      aggregate {
        avg {
          rating
        }
      }
    }
  }
`;
