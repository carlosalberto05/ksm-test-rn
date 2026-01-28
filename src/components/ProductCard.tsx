import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useFavoriteStore } from "../store/useFavoriteStore";
import { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { favorites, toggleFavorite } = useFavoriteStore();
  const isFavorite = favorites.includes(product.id);

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.content}>
        <View>
          <Text style={styles.category}>{product.category}</Text>
          <Text style={styles.title} numberOfLines={2}>
            {product.title}
          </Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>
              {product.rating.rate} ({product.rating.count})
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={() => toggleFavorite(product.id)}
            activeOpacity={0.7}
          >
            <Text style={{ fontSize: 20 }}>{isFavorite ? "❤️" : "🤍"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  content: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  category: {
    fontSize: 12,
    color: "#888",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    color: "#666",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2ecc71",
  },
  favoriteButton: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
});
