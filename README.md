# Facebook UI Redesign – BIMP2210 Lab Test

A React Native redesign of Facebook's mobile interface built with Expo.

---

## 📁 Project Structure

```
facebook-redesign/
├── App.js                   # Root entry point
├── package.json
├── babel.config.js
├── components/
│   ├── Avatar.js            # Reusable circular avatar (Task 3)
│   ├── PostCard.js          # Post card with like/comment/share (Task 3)
│   ├── StoryItem.js         # Story circle component (Task 3)
│   └── Navbar.js            # Top navigation bar (Task 3)
├── screens/
│   ├── HomeScreen.js        # Feed with stories and posts (Task 2)
│   ├── AddPostScreen.js     # Create post screen (Task 2)
│   ├── SearchScreen.js      # Search & discover (Task 2)
│   ├── NotificationsScreen.js
│   └── ProfileScreen.js
├── navigation/
│   └── AppNavigator.js      # Bottom tab navigation (Task 2)
└── assets/
```

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v18+)
- Expo CLI

### Install

```bash
npm install -g expo-cli
npm install
```

### Run

```bash
npx expo start
```

Scan the QR code with **Expo Go** on your phone, or press:
- `a` for Android emulator
- `i` for iOS simulator

---

## ✅ Task Checklist

| Task | Description | Marks |
|------|-------------|-------|
| Task 1 | Project setup with Expo, folder structure, dependencies | 10 |
| Task 2 | UI Redesign: Home Feed, Create Post, Stories, Bottom Nav | 40 |
| Task 3 | Components: PostCard, StoryItem, Avatar, Navbar | 20 |
| Task 4 | Code: FlatList, StyleSheet (no inline), clean code | 20 |
| Task 5 | Styling: spacing, rounded corners, shadows, responsive | 10 |

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `expo` | Development framework |
| `@react-navigation/native` | Navigation container |
| `@react-navigation/bottom-tabs` | Tab bar navigation |
| `@expo/vector-icons` | Icon set (Ionicons) |
| `react-native-safe-area-context` | Safe area insets |
| `react-native-screens` | Native screen optimization |

---

## 🎨 Design Highlights

- **Color Palette**: Facebook Blue (`#1877F2`), clean whites and light grays
- **Typography**: System fonts with weight variations for hierarchy
- **Shadows & Elevation**: Cards have subtle elevation for depth
- **Rounded Corners**: Consistent `borderRadius` throughout
- **FlatList**: Used for infinite-scroll feed (HomeScreen, SearchScreen, etc.)
- **StyleSheet API**: All styles use `StyleSheet.create()` — no inline styles

---

## 📱 Screens

1. **Home Feed** — Stories + Create Post + Post Feed (FlatList)
2. **Search** — Search bar + People suggestions
3. **Add Post** — Text input + Media action grid
4. **Notifications** — Read/unread notification list
5. **Profile** — Cover photo, avatar, stats, user posts
