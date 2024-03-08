import { StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  tab: {
    fontSize: 18,
    color: theme.colors.textTab,
    marginLeft:20
  },
});

const AppBarTab = (props) => {
  return (
    <Pressable>
      <Text style={styles.tab}>{props.text}</Text>
    </Pressable>
  );
};

export default AppBarTab;