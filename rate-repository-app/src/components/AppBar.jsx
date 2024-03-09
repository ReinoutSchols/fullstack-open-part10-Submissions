import { View, StyleSheet, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link} from 'react-router-native';
import AppBarTab from "./AppBarTab";
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

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <Link to="/">
          <AppBarTab text={"Repositories"}/>
        </Link>
        <Link to="/signin">
          <AppBarTab text={"Sign In"}/>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;