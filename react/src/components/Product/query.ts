import { gql } from "@apollo/client";

const PRODUCT_LIST = gql`
  query listAllProducs {
    product {
      id
    }
  }
`;
