import ApolloClient from "apollo-boost";

const apolloClient = new ApolloClient({
  // 你需要在這裡使用絕對路徑
  uri: "https://mask-data-farmer.herokuapp.com/graphql"
});

export default apolloClient;
