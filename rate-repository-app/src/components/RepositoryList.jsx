import { FlatList, View, StyleSheet } from 'react-native';
import { RepositoryItem } from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    display: "flex",
    backgroundColor: "#e1e4e8",
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryList = () => {
  const { repositories } = useRepositories();
  console.log("repositories in repolist component", repositories);
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];
  
  return (
    <>
      <FlatList
        data={repositoryNodes}
        style={styles.container}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item, separators }) => (
          <RepositoryItem
            item={item}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}
          />
        )}
      />
    </>
  );
};

export default RepositoryList;
