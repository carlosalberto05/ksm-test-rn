import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ProductCard } from '../ProductCard';
import { useFavoriteStore } from '../../store/useFavoriteStore';

// Mock the store hook
jest.mock('../../store/useFavoriteStore', () => ({
  useFavoriteStore: jest.fn(),
}));

const mockProduct = {
  id: 1,
  title: 'Test Product',
  price: 99.99,
  description: 'Test Description',
  category: 'Test Category',
  image: 'https://example.com/image.jpg',
  rating: {
    rate: 4.5,
    count: 10,
  },
};

describe('ProductCard', () => {
  const mockToggleFavorite = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useFavoriteStore as unknown as jest.Mock).mockReturnValue({
      favorites: [],
      toggleFavorite: mockToggleFavorite,
    });
  });

  it('renders product details correctly', () => {
    const { getByText } = render(<ProductCard product={mockProduct} />);

    expect(getByText('Test Product')).toBeTruthy();
    expect(getByText('$99.99')).toBeTruthy();
    expect(getByText('Test Category')).toBeTruthy();
  });

  it('calls toggleFavorite when the heart button is pressed', () => {
    const { getByText } = render(<ProductCard product={mockProduct} />);
    
    // The button displays 🤍 when not favorite
    const heartButton = getByText('🤍');
    fireEvent.press(heartButton);

    expect(mockToggleFavorite).toHaveBeenCalledWith(mockProduct.id);
  });

  it('displays a red heart when the product is in favorites', () => {
    (useFavoriteStore as unknown as jest.Mock).mockReturnValue({
      favorites: [1],
      toggleFavorite: mockToggleFavorite,
    });

    const { getByText } = render(<ProductCard product={mockProduct} />);
    
    expect(getByText('❤️')).toBeTruthy();
  });
});
