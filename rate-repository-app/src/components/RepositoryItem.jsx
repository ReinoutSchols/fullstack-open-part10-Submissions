import React from 'react';
import { View,  Image, StyleSheet} from 'react-native';
import Text from './Text';

import theme from '../theme';
export const RepositoryItem = ({ item, onShowUnderlay, onHideUnderlay }) => {
  const formatCount = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  const styles = StyleSheet.create({
    container: {
      paddingTop: 30,
      backgroundColor:"white"
    },
    tinyLogo: {
      width: 50,
      height: 50,
      marginLeft:20,
      borderRadius: 10
    },
    LogoNameDescription: {
      display:"flex",
      flexDirection: "row"
    },
    numbers: {
      flexDirection:"row",
      justifyContent:"space-evenly", 
      marginLeft:30,
      marginTop:15
    }, 
    details: {
      flexDirection:"row",
      alignItems: "center"
    },
    label: {
      marginRight: 10, 
      color: "grey"
    }, 
    fontNumbers: {
      fontWeight: theme.fontWeights.bold
    }, 
    fontName: {
      fontWeight: theme.fontWeights.bold,
      marginLeft: 25
    },
    textDescription: {
      marginLeft: 25,
      color:"grey"
    }, 
    textLanguage:{
      backgroundColor:theme.colors.primary,
      color:"white",
      borderStyle: "solid",
      borderWidth: 0.1,
      borderRadius: 5,
      display:"flex",
      borderColor:"white",
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginLeft: 25,
      marginRight: 10,
      maxWidth:90,
      justifyContent:"space-between"
    }
  });
  return (
    <View
      onShowUnderlay={onShowUnderlay}
      onHideUnderlay={onHideUnderlay}
      style={styles.container}
    >
      <View style={styles.LogoNameDescription}>
        <Image source={{ uri: item.ownerAvatarUrl }} style={styles.tinyLogo} />
        <View>
          <Text style={styles.fontName}>{item.fullName}</Text>
          <Text style={styles.textDescription}>{item.description}</Text>
          <View style={styles.details}>
            <Text color="primary" style={styles.textLanguage}>{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.numbers}>
        <View >
          <Text style={styles.fontNumbers}>{formatCount(item.stargazersCount)}</Text>
          <Text color="textSecondary" style={styles.label}>Stars</Text>
        </View>
        <View>
          <Text style={styles.fontNumbers}>{formatCount(item.forksCount)}</Text>
          <Text color="textSecondary" style={styles.label}>Forks</Text>
        </View>
        <View>
          <Text style={styles.fontNumbers}>{item.reviewCount}</Text>
          <Text color="textSecondary" style={styles.label}>Reviews</Text>
        </View>
        <View>
          <Text style={styles.fontNumbers}>{formatCount(item.ratingAverage)}</Text>
          <Text color="textSecondary" style={styles.label}>Rating</Text>
        </View>
      </View>
    </View>
  );
};


export default RepositoryItem;