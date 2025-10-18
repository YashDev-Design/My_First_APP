import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { reviews } from "../data/user_posts";
import { useTheme } from "../context/ThemeContext";

const ReviewCard = ({ title, imageUrl, description }) => {
  const { theme } = useTheme();

  const renderItem = ({ item }) => (
    <View style={[styles.card, { backgroundColor: theme.card }]}>
      <Text style={[styles.cardTitle, { color: theme.text }]}>
        {item.title}
      </Text>
      <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
      <Text style={[styles.cardDescription, { color: theme.text }]}>
        {item.description}
      </Text>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList
        data={reviews}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  listContent: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: "#555",
  },
});

export default function Reviews() {
  return <ReviewCard />;
}
