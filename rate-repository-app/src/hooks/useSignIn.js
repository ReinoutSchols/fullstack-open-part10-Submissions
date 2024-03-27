import { useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/queries";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);

  const signIn = async ({ username, password }) => {
    try {
      console.log(mutate);
      const { data } = await mutate({
        variables: { credentials: { username, password } },
      });

      console.log("User authenticated:", data);
    } catch (error) {
      console.error("Authentication failed:", error.message);
    }
  };

  return [signIn, result];
};

export default useSignIn;
