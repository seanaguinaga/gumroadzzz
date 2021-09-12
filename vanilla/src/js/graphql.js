export const graphql = ({ query, variables = {} }) =>
  fetch("https://gumroad.hasura.app/v1/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-Role": "anonymous",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })
    .then((res) => res.json())
    .then((result) => result);
