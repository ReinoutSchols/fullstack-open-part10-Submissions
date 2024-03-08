import { View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    flexDirection: 'row',
    alignItems: 'center', 
    height: 100, 
    borderBottomWidth: 1,
    display: "flex"
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab  style={styles.tab} text={"Repositories"} />
    </View>
  );
};

export default AppBar;