import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    onCompleted: (data) => {
      setRepositories(data.repositories);
    },
  });
  console.log("data from apollo fetch", data);
  const [repositories, setRepositories] = useState();

  if (loading) return <p>Loading ...</p>;
  if (error) return `Error! ${error.message}`;
  return { repositories, loading };
};

export default useRepositories;
