# DiscoveryLens+

## Project Overview
DiscoveryLens+ is an AR and voice-enabled assistant that helps Discovery clients engage with Vitality benefits through an immersive, hands-free experience. The app allows users to visualize nearby partner locations, interact through natural voice commands, and receive personalized health recommendations.

## 🌐 Live Demo
Check out our [live demo page](https://bhekumusaeric.github.io/DiscoveryGradHack/) to see the project concept and mockups.

## 🚀 Project Concept
DiscoveryLens+ combines Augmented Reality with Voice AI to create an immersive assistant that helps clients engage with Vitality benefits:
- Open your camera to see nearby partner locations visually marked in real-time
- Use voice commands like "Where can I earn Vitality points near me?"
- Let the assistant handle routine tasks like checking point balances or booking appointments
- Receive personalized recommendations based on your health goals through Personal Health Pathways integration

## 🔍 Problem Statement
Clients struggle to discover nearby Vitality benefits and navigate complex health services, especially on-the-go or for elderly users. The traditional app-based interface requires multiple taps and navigation steps, creating friction in the user experience.

## 💡 Solution
Our solution transforms how users interact with Vitality benefits by leveraging cutting-edge technology:
- **AR Visualization**: See partner locations through your camera view
- **Voice Assistant**: Natural language interaction for queries and commands
- **Health Pathways**: Personalized recommendations based on health goals
- **Task Automation**: Simplified booking and engagement process

## 🛠️ Technology Stack

### Frontend
- **React Native** - Cross-platform mobile development
- **Expo** - Development toolchain and simplified native access
- **React Native AR Kit/AR Core** - AR capabilities for iOS/Android
- **MapBox/Google Maps API** - Location services and mapping

### Voice & NLP
- **Whisper API** - Speech-to-text processing
- **GPT-4** - Natural language understanding and response generation
- **React Native Voice** - Voice input handling

### Backend
- **Firebase** - Authentication, real-time database, cloud functions
- **Node.js** - API development and integration
- **Express** - Backend framework

### AR Components
- **Viro React** - AR framework for React Native
- **Three.js** - 3D rendering for AR elements

## 📱 Key Features

### AR Visualization Layer
- Map integration displaying nearby Vitality partners
- Camera view with AR overlays showing partner locations
- Visual indicators for different partner types (gyms, clinics, restaurants)
- Point boost indicators and distance information

### Voice AI Interface
- Natural language processing for health and Vitality queries
- Command recognition for common tasks (bookings, point checks)
- Conversational responses with relevant information
- Voice-guided navigation to selected locations

### Personal Health Pathways Integration
- API connection to retrieve personalized health goals
- Recommendation engine based on user's health profile
- Prioritization of relevant partners based on health needs

### RPA Backend
- Automated task handling for bookings and appointments
- Claims submission automation
- Reminder and notification system

## 📋 Implementation Roadmap

### Phase 1: Basic AR Visualization
- Set up React Native project with Expo
- Implement basic map integration
- Create AR view with mock partner locations
- Develop UI for displaying partner information

### Phase 2: Voice Command System
- Integrate speech recognition
- Implement basic NLP for command interpretation
- Create response generation for common queries
- Connect voice interface with AR visualization

### Phase 3: Health Pathways Integration
- Create mock API for Personal Health Pathways
- Develop recommendation engine
- Implement personalized suggestions based on health goals
- Connect recommendations to AR visualization

### Phase 4: Task Automation
- Implement booking flow simulation
- Create points checking functionality
- Develop reminder system
- Connect automation to voice commands

## 📂 Repository Structure
- `/src` - Source code for the React Native application
- `/mockups` - Visual mockups and design assets
- `/docs` - Documentation files

## 🚀 Getting Started
```bash
# Clone the repository
git clone https://github.com/BhekumusaEric/DiscoveryGradHack.git

# Navigate to the project directory
cd DiscoveryGradHack

# Install dependencies
npm install

# Start the development server
npx expo start
```

## 👥 Team
- Bhekumusa Eric Ntshwenya