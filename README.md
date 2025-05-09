# DiscoveryLens+

## Project Overview
DiscoveryLens+ is an AR and voice-enabled assistant that helps Discovery clients engage with Vitality benefits through an immersive, hands-free experience. The app allows users to visualize nearby partner locations, interact through natural voice commands, and receive personalized health recommendations.

## Core Features
- AR visualization of nearby Vitality partners
- Voice-powered navigation and queries
- Personal Health Pathways integration
- Automated task handling (bookings, claims, reminders)

## Technology Stack

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

### Integration & Automation
- **Axios** - API requests to Discovery services
- **n8n/Zapier** - Workflow automation for RPA components

## Visualizing DiscoveryLens+ in Action

### Visual Mockups
To effectively communicate the DiscoveryLens+ concept, we'll create the following visual assets:

1. **AR View Mockups**:
   - Camera view showing AR markers for nearby Vitality partners
   - Different colored markers for various partner types (gyms, restaurants, etc.)
   - Distance and point value indicators
   - Interactive elements when a marker is selected

2. **User Flow Diagrams**:
   - Sequence showing user opening app → scanning surroundings → seeing AR markers → selecting a location
   - Voice command flow from user query to app response

3. **Interactive Prototype**:
   - Figma/Adobe XD prototype demonstrating key user interactions
   - Clickable elements showing transitions between screens

### Demo Video Concept
For the hackathon presentation, we'll create a 1-2 minute demo video that shows:

1. User opening DiscoveryLens+ app
2. Camera view activating with AR overlay showing nearby partners
3. User asking: "Where can I earn Vitality points for healthy food?"
4. App highlighting healthy food partners with visual indicators
5. User selecting a partner and viewing details
6. Voice assistant providing directions and additional information

The video will combine:
- Screen recordings of the prototype
- AR effect overlays to simulate the final experience
- Voice-over explaining the features and benefits

### Presentation Slides
Our presentation deck will include:
- Problem statement with statistics on Vitality engagement
- Solution overview with key differentiators
- Technology architecture diagram
- User flow visualizations
- Mockup screens of key features
- Future roadmap and potential impact

### Technical Visualization
For technical documentation, we'll create:
- System architecture diagram showing component interactions
- Data flow diagrams for key features
- API endpoint documentation with example requests/responses

## Implementation Roadmap

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