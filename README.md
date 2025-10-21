# 📱 My First App — React Native + Expo Router

**Developer:** [Javeed Mohammad (Yash-Dev)](https://github.com/YashDev-Design)  
**Course:** Mobile Computing | AUM Graduate Project

---

## 🧩 Overview

Welcome to **My First App**, a sleek multi-screen React Native project crafted with **Expo Router**.  
This app showcases essential mobile development principles including seamless navigation, persistent state management, and dynamic theming — all wrapped in a modern, user-friendly interface.

---

## 🚀 Features

### 🎨 Global Light & Dark Theme

- Powered by a custom `ThemeContext`.
- Supports theme persistence with real-time updates to headers, text, and backgrounds.

### 📱 Intuitive Tab Navigation

- Navigate effortlessly via a stylish bottom tab bar, providing quick access to all main screens.

### 🧠 Highlighted Screens

- 🎨 **RGB Color Mixer:** Interactive RGB sliders for live color mixing and visualization.
- 🎯 **Tiles Game:** Engaging memory-matching tiles with smooth win animations.
- 🔢 **Counter:** Smart increment/decrement functionality with persistent storage using AsyncStorage.

### 🧩 Additional Screens

- 😊 **Alert Form:** Mood input with emoji selection and pop-up alerts.
- 💬 **Reviews:** Dynamic user posts display.
- 👋 **Welcome Page:** Personalized greetings with name input.

### 💾 Persistent Storage

- Key features like the counter and color sliders retain their state across sessions using **AsyncStorage**.

### 📱 Responsive & Modern Design

- Optimized for both iOS and Android simulators with adaptive layouts and fluid animations.

---

## 🌟 Latest Update (Expo Router Tabs)

This app has transitioned from drawer-based navigation to a **bottom tab navigation system** using Expo Router’s powerful tab routing features.  
This update enhances usability by providing a consistent and accessible navigation experience across all screens, aligning with modern mobile UI standards.

---

## ⚙️ Tech Stack

| Library / Tool                   | Purpose                           |
| -------------------------------- | --------------------------------- |
| **React Native**                 | Core UI framework                 |
| **Expo Router**                  | File-based routing & tabs         |
| **React Navigation Tabs**        | Bottom tab navigation             |
| **React Context API**            | Global theme management           |
| **AsyncStorage**                 | Local data persistence            |
| **Reanimated / Gesture Handler** | Smooth animations                 |
| **Expo Go**                      | Streamlined development & testing |

---

## 📂 Folder Structure

my_first_app/  
│  
├── app/  
│ ├── \_layout.jsx  
│ ├── index.jsx  
│ ├── welcome.jsx  
│ ├── alertform.jsx  
│ ├── countonclick.jsx  
│ ├── rgbcolor.jsx  
│ ├── tiles.jsx  
│ ├── reviews.jsx  
│ ├── layout_task.jsx  
│  
├── components/  
│ └── ThemeModal.jsx  
│  
├── constants/  
│ └── themes.js  
│  
├── context/  
│ └── ThemeContext.js  
│  
├── data/  
│ └── user_posts.js  
│  
├── package.json  
└── README.md

---

## 🛠️ Installation & Setup

1. **Clone the repo**

   ```bash
   git clone https://github.com/YashDev-Design/My_First_APP.git
   cd My_First_APP
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start Expo**

   ```bash
   npx expo start
   ```

4. **Run the app**
   - Press `i` → iOS Simulator
   - Press `a` → Android Emulator
   - Or scan the QR code using Expo Go

---

## 🎨 Theme System

This app uses a centralized `ThemeContext` to manage light and dark modes globally.  
Each screen dynamically adapts to the selected theme, ensuring a consistent and polished user experience.

```jsx
const { theme } = useTheme();

<View style={{ backgroundColor: theme.background }}>
  <Text style={{ color: theme.text }}>Hello World</Text>
</View>;
```

---

## 🧠 Learning Outcomes

- Building multi-screen mobile applications with Expo Router tab navigation.
- Implementing robust light/dark themes using React Context API.
- Managing persistent state with AsyncStorage for a seamless user experience.
- Designing modular, responsive, and accessible layouts optimized for mobile devices.

---

## 👨‍💻 Author

Javeed Mohammad (Yash-Dev)  
🎓 Graduate Student — Auburn University at Montgomery (AUM)  
💼 Student Affairs Social Media & Marketing Assistant  
🌐 GitHub: YashDev-Design

---
