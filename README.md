# 📱 My First App — React Native + Expo Router  

**Developer:** [Javeed Mohammad (Yash-Dev)](https://github.com/YashDev-Design)  
**Course:** Mobile Computing | AUM Graduate Project  

---

## 🧩 Overview  

This app is a **multi-screen React Native project** built with **Expo Router**.  
It demonstrates key mobile development concepts like navigation, persistent state, and global theming.

---

## 🚀 Features  

### 🎨 Global Light & Dark Theme  
- Uses a custom `ThemeContext`.  
- Includes theme persistence and dynamic color updates for headers, text, and backgrounds.  

### 📂 Drawer Navigation (Hamburger Menu)  
- Access all screens from a sleek, responsive sidebar menu.  

### 🧠 Interactive Screens  
- 🖍️ **RGB Color Mixer:** Adjust RGB sliders to see real-time color changes.  
- 🔢 **Counter:** Smart increment/decrement with persistent storage using AsyncStorage.  
- 🎯 **Tiles Game:** Memory-matching tiles with win animations.  
- 😊 **Alert Form:** Mood form with emoji selection and pop-up alerts.  
- 💬 **Reviews:** Displays user posts dynamically from `user_posts.js`.  
- 🧱 **Layout Task:** Button-based navigation to layout demos.  
- 👋 **Welcome Page:** Personalized greeting with name input.  

### 💾 Persistent Storage  
- Features like counter and slider values are saved using **AsyncStorage**.  

### 📱 Responsive Design  
- Works smoothly on both iOS and Android simulators with adaptive layouts.  

---

## ⚙️ Tech Stack  

| Library / Tool | Purpose |
|----------------|----------|
| **React Native** | Core UI framework |
| **Expo Router** | File-based navigation |
| **React Navigation Drawer** | Sidebar navigation |
| **React Context API** | Global theme management |
| **AsyncStorage** | Local data persistence |
| **Reanimated / Gesture Handler** | Smooth animations |
| **Expo Go** | Easy development & testing |

---

## 📂 Folder Structure  

my_first_app/
│
├── app/
│   ├── _layout.jsx
│   ├── index.jsx
│   ├── welcome.jsx
│   ├── layout_task.jsx
│   ├── alertform.jsx
│   ├── countonclick.jsx
│   ├── rgbcolor.jsx
│   ├── tiles.jsx
│   ├── reviews.jsx
│   ├── layout1.jsx → layout4.jsx
│
├── components/
│   └── ThemeModal.jsx
│
├── constants/
│   └── themes.js
│
├── context/
│   └── ThemeContext.js
│
├── data/
│   └── user_posts.js
│
├── package.json
└── README.md

---

## 🛠️ Installation & Setup  

1. **Clone the repo**  
   ```bash
   git clone https://github.com/YashDev-Design/My_First_APP.git
   cd My_First_APP

	2.	Install dependencies

npm install


	3.	Start Expo

npx expo start


	4.	Run the app
	•	Press i → iOS Simulator
	•	Press a → Android Emulator
	•	Or scan the QR code using Expo Go

⸻

🎨 Theme System

This app uses a ThemeContext to manage color themes globally.
Each screen adapts automatically to the selected theme.

const { theme } = useTheme();

<View style={{ backgroundColor: theme.background }}>
  <Text style={{ color: theme.text }}>Hello World</Text>
</View>


⸻

🧠 Learning Outcomes
	•	Building multi-screen mobile apps with Expo Router.
	•	Implementing light/dark themes with React Context.
	•	Managing persistent state using AsyncStorage.
	•	Designing modular, responsive, and user-friendly layouts.

⸻

👨‍💻 Author

Javeed Mohammad (Yash-Dev)
🎓 Graduate Student — Auburn University at Montgomery (AUM)
💼 Student Affairs Social Media & Marketing Assistant
🌐 GitHub: YashDev-Design

⸻
