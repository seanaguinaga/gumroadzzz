import { gql } from "@apollo/client";

const LIST_REVIEWS_QUERY = gql`
  query listReviews {
    review {
      id
    }
  }
`;
