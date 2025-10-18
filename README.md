📱 My First App — React Native + Expo Router

Developer: Javeed Mohammad (Yash-Dev)
Course: Mobile Computing | AUM Graduate Project

⸻

🧩 Overview

This app is a multi-screen React Native project built with Expo Router.
It demonstrates core concepts of mobile UI design, navigation, persistent state, and global theming.
Each screen focuses on different interactive tasks — from color mixing and counters to games and user input forms.

⸻

🚀 Features

✅ Global Light & Dark Theme
• Theme automatically applies across all screens using a custom ThemeContext.
• Includes theme persistence and dynamic color updates for headers, text, and backgrounds.

✅ Drawer Navigation (Hamburger Menu)
• Access all screens from a sleek, responsive sidebar menu.

✅ Interactive Screens:
• 🖍️ RGB Color Mixer: Adjust RGB sliders to see real-time color changes.
• 🔢 Counter: Smart increment/decrement with persistent storage using AsyncStorage.
• 🎯 Tiles Game: Memory-matching tiles with win animations.
• 😊 Alert Form: Mood form with emoji selection and pop-up alerts.
• 💬 Reviews: Fetches and displays user posts dynamically from user_posts.js.
• 🧱 Layout Task: Button-based screen navigation to layout demos.
• 👋 Welcome Page: Personalized greeting screen with input validation.

✅ Persistent Storage
• Some features (like counter value and slider settings) are stored using AsyncStorage, so data stays after app restart.

✅ Responsive Design
• Works smoothly on both iOS and Android simulators with auto layout adjustment.

⸻

⚙️ Tech Stack

Library / Tool Purpose
React Native Core UI framework
Expo Router File-based navigation
React Navigation Drawer Drawer / Hamburger menu
React Context API Global theme management
AsyncStorage Local data persistence
Reanimated & Gesture Handler Smooth animations & gestures
React Native Community Slider RGB sliders
Expo Go Easy development & testing

⸻

📂 Folder Structure

my_first_app/
│
├── app/
│ ├── \_layout.jsx
│ ├── index.jsx
│ ├── welcome.jsx
│ ├── layout_task.jsx
│ ├── alertform.jsx
│ ├── countonclick.jsx
│ ├── rgbcolor.jsx
│ ├── tiles.jsx
│ ├── reviews.jsx
│ └── ... layout1.jsx → layout4.jsx
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

⸻

🛠️ Installation & Setup 1. Clone the repo

git clone https://github.com/YashDev-Design/My_First_APP.git
cd My_First_APP

    2.	Install dependencies

npm install

    3.	Start Expo

npx expo start

    4.	Run the app
    •	Press i to open iOS Simulator
    •	Press a to open Android Emulator
    •	Or scan the QR code with Expo Go

⸻

🎨 Theme System

This app uses a custom ThemeContext that wraps the entire navigation structure.
All screens dynamically adapt colors via theme.background, theme.text, and theme.card values.

const { theme } = useTheme();

<View style={{ backgroundColor: theme.background }}>
<Text style={{ color: theme.text }}>Hello World</Text>
</View>

⸻

🧠 Learning Outcomes
• Building multi-screen mobile apps with Expo Router.
• Implementing light/dark themes using React Context.
• Managing persistent state with AsyncStorage.
• Designing modular components and responsive layouts.
• Integrating animations and gesture-based navigation.

⸻

📸 Screenshots (Optional)

You can add images later from your simulator (/screenshots folder).

⸻

👨‍💻 Author

Javeed Mohammad (Yash-Dev)
📍 Graduate Student — Auburn University at Montgomery (AUM)
💼 Student Affairs Social Media & Marketing Assistant
📧 GitHub: YashDev-Design

⸻
📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
