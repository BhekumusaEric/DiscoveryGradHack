# DiscoveryLens+ Project Structure

## Directory Organization

```
discoverylens-plus/
├── src/
│   ├── components/       # Reusable UI components
│   ├── screens/          # Full app screens
│   ├── services/         # API and service integrations
│   ├── utils/            # Helper functions and utilities
│   └── assets/           # Images, icons, and other static assets
├── mockups/              # Visual mockups and design assets
├── docs/                 # Documentation files
└── ...                   # Project configuration files
```

## Key Files and Components

### Components
- `ARView.js` - AR camera view with location markers
- `VoiceAssistant.js` - Voice recognition and response component
- `PartnerCard.js` - Card displaying partner information
- `MapView.js` - Map showing partner locations
- `HealthPathway.js` - Health recommendations component

### Screens
- `HomeScreen.js` - Main app entry point
- `ARScreen.js` - AR camera view screen
- `PartnerDetailsScreen.js` - Detailed partner information
- `ProfileScreen.js` - User profile and Vitality information
- `SettingsScreen.js` - App settings and preferences

### Services
- `LocationService.js` - Geolocation and mapping services
- `VitalityAPI.js` - Integration with Vitality benefits API
- `VoiceService.js` - Voice recognition and NLP processing
- `ARService.js` - AR marker placement and rendering
- `HealthPathwaysService.js` - Health recommendations API

### Utils
- `permissions.js` - Camera and location permission handling
- `arHelpers.js` - Helper functions for AR calculations
- `voiceCommands.js` - Voice command definitions and handlers
- `locationUtils.js` - Distance calculations and location formatting
- `analytics.js` - Usage tracking and analytics

## Implementation Notes

### AR Implementation
The AR functionality will be implemented using ViroReact, which provides a React Native interface to ARKit and ARCore. Key components:
- AR marker placement based on geolocation
- 3D object rendering for partner locations
- Touch interaction with AR elements
- Distance and direction calculations

### Voice Assistant Implementation
The voice assistant will use:
- React Native Voice for audio capture
- OpenAI Whisper API for speech-to-text
- GPT-4 for natural language understanding and response generation
- Text-to-speech for voice responses

### Location Services
Location functionality will use:
- React Native Geolocation for device location
- MapBox/Google Maps for mapping and directions
- Geocoding for address lookup and reverse geocoding
- Distance calculations for nearby partner discovery

### Health Pathways Integration
Health recommendations will be based on:
- Mock health profile data (for hackathon)
- Recommendation algorithms based on health goals
- Partner matching based on health needs
- Personalized point earning opportunities
