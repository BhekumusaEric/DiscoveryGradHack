import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// Note: In a real implementation, we would use ViroReact for AR
// This is a placeholder component that simulates the AR view for the hackathon

const ARView = ({ partners, userLocation, onPartnerSelect }) => {
  // In a real implementation, this would use ViroReact to create AR markers
  // For the hackathon, we're creating a simulated view
  
  return (
    <View style={styles.container}>
      {/* Simulated camera background */}
      <View style={styles.cameraView}>
        <Text style={styles.cameraText}>Camera View</Text>
        
        {/* Simulated AR markers */}
        {partners.map((partner) => (
          <View 
            key={partner.id}
            style={[
              styles.arMarker,
              partner.type === 'fitness' && styles.fitnessMarker,
              partner.type === 'food' && styles.foodMarker,
              partner.type === 'health' && styles.healthMarker,
              {
                // Position markers at different locations in the view
                top: 100 + (partner.id * 80),
                left: 50 + (partner.id * 70),
              }
            ]}
            onTouchEnd={() => onPartnerSelect(partner)}
          >
            <Text style={styles.markerName}>{partner.name}</Text>
            <Text style={styles.markerDistance}>{partner.distance}m</Text>
            <Text style={styles.markerPoints}>{partner.points} points</Text>
          </View>
        ))}
        
        {/* Simulated direction indicators */}
        <View style={styles.directionIndicator}>
          <Text style={styles.directionText}>↑</Text>
        </View>
        
        {/* Simulated AR interface elements */}
        <View style={styles.arInterface}>
          <Text style={styles.arText}>
            Looking around for Vitality partners...
          </Text>
        </View>
      </View>
      
      {/* Implementation note */}
      <Text style={styles.implementationNote}>
        Note: This is a simulated AR view for the hackathon.
        In the actual implementation, this would use ViroReact with ARKit/ARCore
        to place real AR markers in the camera view based on geolocation.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraView: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  cameraText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 24,
  },
  arMarker: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    padding: 10,
    minWidth: 120,
    alignItems: 'center',
  },
  fitnessMarker: {
    borderColor: '#e91e63',
    borderWidth: 2,
  },
  foodMarker: {
    borderColor: '#4CAF50',
    borderWidth: 2,
  },
  healthMarker: {
    borderColor: '#2196F3',
    borderWidth: 2,
  },
  markerName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  markerDistance: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 12,
  },
  markerPoints: {
    color: '#FFD700',
    fontSize: 12,
    fontWeight: 'bold',
  },
  directionIndicator: {
    position: 'absolute',
    bottom: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  directionText: {
    color: 'white',
    fontSize: 24,
  },
  arInterface: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    padding: 10,
  },
  arText: {
    color: 'white',
    textAlign: 'center',
  },
  implementationNote: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    color: 'yellow',
    fontSize: 10,
    textAlign: 'center',
  },
});

export default ARView;
