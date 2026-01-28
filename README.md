# React Native Product List - Challenge

A single-screen mobile application built with **React Native** and **Expo** that fetches products from a REST API, displays them in an optimized list, and manages a "Favorite" state with persistence.

## 🚀 Features

- **Data Fetching**: Managed with [TanStack Query]
- **Global State**: Managed with [Zustand]
- **Persistence**: Favorites are saved locally using [AsyncStorage]
- **UI/UX**:
  - Clean mobile-friendly card layout using **Flexbox**.
  - Loading states with `ActivityIndicator`.
  - Optimized list rendering with `FlatList`.
  - Safe area handling with `react-native-safe-area-context`.

## 🛠️ Tech Stack

- **Framework**: Expo (React Native)
- **Language**: TypeScript
- **State Management**: Zustand
- **Data Fetching**: TanStack Query (React Query)
- **Storage**: AsyncStorage

## 📂 Project Structure (Clean Architecture)

```text
src/
 ├── api/           # API call definitions (Fetch/Axios)
 ├── components/    # Reusable UI components (ProductCard)
 ├── hooks/         # Custom hooks for business logic (useProducts)
 ├── screens/       # Main screen components (HomeScreen)
 ├── store/         # Global state management (Zustand)
 ├── types/         # TypeScript interfaces and types
```

⚙️ Installation & Setup
Clone the repository:
bash
git clone <your-repo-url>
Usa el código con precaución.

Install dependencies:
bash
npm install
Usa el código con precaución.

Start the project:
bash
npx expo start
Usa el código con precaución.

Test on device:
Scan the QR code with the Expo Go app (Android/iOS).
