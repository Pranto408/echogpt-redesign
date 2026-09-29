# EchoGPT — Web App Redesign

A modern, responsive, and user-friendly redesign of the **EchoGPT Web App**, focused on improving the overall UI/UX, usability, accessibility, responsiveness, and performance.

## 🔗 Live Demo

https://echogpt-redesign-indol.vercel.app

## 📌 Project Overview

The goal of this project was to analyze the existing EchoGPT interface and create an improved frontend experience with a cleaner, more modern, accessible, and responsive design.

The redesign includes:

- Modern AI chat interface
- Responsive application layout
- Chat sidebar and conversation interface
- AI model selection
- Message composer
- Starter prompt suggestions
- Settings pages
- Authentication screens
- Light/Dark/System theme support
- Responsive navigation
- Improved accessibility and keyboard interaction
- Smooth and subtle animations

> **Scope:** This is a frontend redesign and demonstration project. Chat responses and application data use local mock/demo data. No production backend or real AI API is connected.

---

## ✨ Key Features

### 💬 AI Chat Interface

- Modern chat application layout
- Conversation sidebar
- Message bubbles
- AI response typing indicator
- Starter prompt suggestions
- Auto-growing message textarea
- Enter to send messages
- Shift + Enter for new lines
- AI model selector
- Empty-state experience

### 🎨 Modern UI/UX

- Clean and modern interface
- Consistent spacing and typography
- Reusable UI components
- Clear visual hierarchy
- Responsive sidebar and navigation
- Improved interaction states
- Visible focus states
- Consistent iconography

### 🌓 Theme Support

- Light mode
- Dark mode
- System theme
- Theme preference persistence
- No flash of incorrect theme during page load

### ⚙️ Settings

The redesigned settings area includes:

- Profile settings
- Appearance settings
- API & data settings
- Theme controls
- Organized settings navigation

### 🔐 Authentication Screens

- Login page
- Sign-up page
- Social authentication UI
- Reusable authentication components

---

## ♿ Accessibility Improvements

Accessibility was considered throughout the redesign.

Implemented improvements include:

- Accessible labels for icon-only controls
- Keyboard-friendly interactions
- Visible focus indicators
- Proper ARIA roles and attributes
- Accessible model selection
- Accessible theme switch
- `aria-current` for navigation states
- Skip-to-main-content link
- `aria-live="polite"` for chat responses
- Support for `prefers-reduced-motion`

These improvements help make the interface easier to navigate and use with different accessibility needs.

---

## 📱 Responsive Design

The interface is designed to work across:

- Desktop
- Tablet
- Mobile

Responsive improvements include:

- Off-canvas sidebar on smaller screens
- Mobile-friendly navigation
- Responsive chat layout
- Flexible composer toolbar
- Responsive settings interface
- Adaptive spacing and component sizing

---

## ⚡ Performance

Performance was considered during implementation.

The project includes:

- Next.js App Router
- Route-based code splitting
- Server Components by default
- Client Components only where interactivity is required
- `next/font` for optimized font loading
- Tree-shaken Lucide icons
- `optimizePackageImports`
- Lightweight reusable components
- Local demo state instead of unnecessary client-side data fetching

---

## 🎞️ Animations

Framer Motion is used for subtle UI animations where appropriate.

The project also respects `prefers-reduced-motion`, so animations are reduced or disabled for users who prefer less motion.

---

## 🛠️ Technologies Used

- **Next.js 14**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **next-themes**
- **Framer Motion**
- **Lucide React**

---

## 📂 Project Structure

    app/
    ├── layout.tsx
    ├── page.tsx
    ├── chat/
    │   └── page.tsx
    ├── settings/
    │   └── page.tsx
    └── (auth)/
        ├── login/
        └── signup/

    components/
    ├── ui/
    │   ├── Button
    │   ├── Input
    │   ├── Textarea
    │   ├── Card
    │   ├── Avatar
    │   ├── Switch
    │   └── Skeleton
    │
    ├── layout/
    │   └── ThemeToggle
    │
    ├── chat/
    │   ├── ChatSidebar
    │   ├── ChatWindow
    │   ├── MessageBubble
    │   ├── ChatInput
    │   ├── ModelSelector
    │   ├── TypingIndicator
    │   └── EmptyState
    │
    ├── settings/
    │   ├── SettingsNav
    │   ├── ProfileSection
    │   ├── AppearanceSection
    │   └── ApiSection
    │
    └── auth/
        ├── AuthCard
        └── SocialButton

    lib/
    ├── types
    ├── constants
    └── utils

    hooks/
    ├── useChat
    ├── useLocalStorage
    └── useMediaQuery

---

## 🧩 Reusable Components

The project follows a component-based architecture with reusable UI elements and feature-specific components.

Examples include:

- Buttons
- Inputs
- Textareas
- Cards
- Avatars
- Switches
- Skeleton loaders
- Chat components
- Model selector
- Settings components
- Authentication components

This helps keep the code clean, maintainable, and easier to extend.

---

## 📝 Assumptions

- This project focuses on the **frontend experience** of EchoGPT.
- Chat messages and responses are handled using local mock/demo data.
- No production backend or AI API is connected.
- The existing EchoGPT application was used as the reference for the redesign.
- Authentication screens are frontend demonstrations and are not connected to a production authentication system.
- The model selector uses predefined demo model data.

---

## 🔌 Connecting a Real Backend

The current chat functionality uses a simulated response through `setTimeout`.

A real backend can be connected by replacing the demo implementation with an API request.

Example flow:

    Frontend
       ↓
    Chat API
       ↓
    AI Model
       ↓
    Streaming Response
       ↓
    Chat Interface

The existing `ModelSelector` already exposes the selected model ID, which can be passed to a real API request.

---

## 🚀 Getting Started

### 1. Clone the Repository

    git clone https://github.com/Pranto408/echogpt-redesign.git

### 2. Navigate to the Project

    cd echogpt-redesign

### 3. Install Dependencies

    npm install

### 4. Start the Development Server

    npm run dev

### 5. Open the Application

Visit:

    http://localhost:3000

---

## 📍 Available Routes

| Route | Description |
|---|---|
| `/` | Main EchoGPT chat interface |
| `/chat` | Redirects to the main chat interface |
| `/login` | Login screen |
| `/signup` | Sign-up screen |
| `/settings` | Application settings |

---

## ⭐ Additional Features Implemented

In addition to the core redesign requirements, the project includes:

- Light/Dark/System theme support
- Responsive off-canvas sidebar
- Keyboard-friendly chat interactions
- Starter prompt suggestions
- Auto-growing chat textarea
- Typing indicator
- Accessible navigation
- Accessible model selector
- Reduced-motion support
- Reusable component architecture
- Authentication UI
- Settings interface
- Smooth UI animations
- Responsive mobile experience

---

## ✅ Requirements Covered

This project addresses the main requirements of the EchoGPT Web App redesign:

- ✅ Analyze the existing interface
- ✅ Improve overall UI/UX
- ✅ Create a modern experience
- ✅ Create a responsive experience
- ✅ Create a user-friendly experience
- ✅ Focus on accessibility
- ✅ Focus on usability
- ✅ Focus on performance
- ✅ Introduce additional UI improvements
- ✅ Use clean and maintainable code
- ✅ Use reusable components
- ✅ Follow modern frontend best practices
- ✅ Support desktop, tablet, and mobile devices
- ✅ Maintain organized folder structure
- ✅ Maintain organized component structure

### Optional / Bonus Requirements

- ✅ Dark/Light mode
- ✅ Framer Motion animations
- ✅ Accessibility improvements
- ✅ TypeScript
- ✅ Reusable UI components
- ✅ Attention to detail

---

## 🧪 Build Verification

The production build has been tested successfully.

    npm run build

The project builds successfully with type checking, linting, and production build verification.
