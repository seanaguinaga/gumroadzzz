import { gql } from "@apollo/client";

const INSERT_NEW_REVIEW_MUTATION = gql`
  mutation insertReview($review_insert_input: review_insert_input!) {
    insert_review_one(object: $review_insert_input) {
      rating
      text
    }
  }
`;
