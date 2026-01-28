import { useFavoriteStore } from "../useFavoriteStore";

// Mock @react-native-async-storage/async-storage
jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);

describe("useFavoriteStore", () => {
  beforeEach(() => {
    // Reset state before each test
    useFavoriteStore.setState({ favorites: [] });
  });

  it("should add a product to favorites", () => {
    const productId = 1;
    useFavoriteStore.getState().toggleFavorite(productId);
    expect(useFavoriteStore.getState().favorites).toContain(productId);
  });

  it("should remove a product from favorites if it already exists", () => {
    const productId = 1;
    // Add it first
    useFavoriteStore.setState({ favorites: [productId] });

    // Toggle it (should remove)
    useFavoriteStore.getState().toggleFavorite(productId);
    expect(useFavoriteStore.getState().favorites).not.toContain(productId);
  });

  it("should correctly identify if a product is favorite", () => {
    const productId = 1;
    useFavoriteStore.setState({ favorites: [productId] });
    expect(useFavoriteStore.getState().isFavorite(productId)).toBe(true);
    expect(useFavoriteStore.getState().isFavorite(2)).toBe(false);
  });
});
