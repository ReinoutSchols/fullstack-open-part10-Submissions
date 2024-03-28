import { useMutation, useApolloClient } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/queries";
import useAuthStorage from "../hooks/useAuthStorage";
import { useNavigate } from "react-router-dom";

const useSignIn = () => {
  const navigate = useNavigate();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const [mutate, result] = useMutation(AUTHENTICATE);

  const signIn = async ({ username, password }) => {
    try {
      console.log(mutate);
      const { data } = await mutate({
        variables: { credentials: { username, password } },
      });
      console.log(
        "data.authenticate.accessToken:",
        data.authenticate.accessToken
      );
      await authStorage.setAccessToken(data.authenticate.accessToken);
      console.log("User authenticated:", data);
      console.log("navigating to repositories page");
      navigate("/");
      await apolloClient.resetStore();
    } catch (error) {
      console.error("Authentication failed:", error.message);
    }
  };

  return [signIn, result];
};

export default useSignIn;
