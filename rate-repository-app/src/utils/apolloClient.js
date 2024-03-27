import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "http://192.168.129.4:4000/graphql",
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
