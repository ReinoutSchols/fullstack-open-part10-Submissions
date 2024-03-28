import { View, StyleSheet, ScrollView, Pressable} from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link} from 'react-router-native';
import AppBarTab from "./AppBarTab";
import { GET_USER } from '../graphql/queries';
import { useQuery, useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    flexDirection: 'row',
    alignItems: 'center', 
    height: 100, 
    borderBottomWidth: 1,
    display: "flex"
  }, tab: {
    fontSize: 18,
    color: theme.colors.textTab,
    marginLeft:20
  }
});

const AppBar = () => {
  const { loading, error, data, refetch } = useQuery(GET_USER);

  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    console.log("click");
    refetch();
  };

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>error</p>;
  console.log("data", data);
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <Link to="/">
          <AppBarTab text={"Repositories"}/>
        </Link>
        {data.me ? (
          <Pressable onPress={handleSignOut}>
            <AppBarTab text={"Sign out"}/>
          </Pressable>):
          (<Link to="/signin">
            <AppBarTab text={"Sign In"}/>
          </Link>)}
      </ScrollView>
    </View>
  );
};

export default AppBar;