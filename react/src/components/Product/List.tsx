import * as React from "react";
import { useListAllProducsQuery } from "../../generated/graphql";

const List = () => {
  let { data } = useListAllProducsQuery();
  return <h1>{JSON.stringify(data)}</h1>;
};

export default List;
