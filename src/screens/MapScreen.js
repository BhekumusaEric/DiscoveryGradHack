import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';

// Mock data for partners (would come from API in real app)
const MOCK_PARTNERS = [
  {
    id: '1',
    name: 'Discovery Gym',
    type: 'fitness',
    points: 100,
    distance: 250,
    latitude: -26.107567,
    longitude: 28.056702,
    description: 'Earn Vitality points for your workout sessions',
  },
  {
    id: '2',
    name: 'Healthy Food Market',
    type: 'food',
    points: 50,
    distance: 150,
    latitude: -26.106789,
    longitude: 28.057890,
    description: 'Get cashbacks and points for healthy food purchases',
  },
  {
    id: '3',
    name: 'Wellness Clinic',
    type: 'health',
    points: 200,
    distance: 400,
    latitude: -26.108234,
    longitude: 28.055432,
    description: 'Complete health checks and earn Vitality points',
  },
  {
    id: '4',
    name: 'Vitality Active Rewards',
    type: 'fitness',
    points: 150,
    distance: 600,
    latitude: -26.105678,
    longitude: 28.058901,
    description: 'Earn rewards for staying active',
  },
  {
    id: '5',
    name: 'Healthy Dining',
    type: 'food',
    points: 75,
    distance: 350,
    latitude: -26.109876,
    longitude: 28.054321,
    description: 'Earn points for healthy meal choices',
  },
];

const MapScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [partners, setPartners] = useState(MOCK_PARTNERS);
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredPartners, setFilteredPartners] = useState(MOCK_PARTNERS);
  const [region, setRegion] = useState({
    latitude: -26.107567,
    longitude: 28.056702,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  
  // Get user location on component mount
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      
      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      
      // Update map region to user location
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    })();
  }, []);
  
  // Filter partners by type
  const filterPartners = (type) => {
    setActiveFilter(type);
    if (type === 'all') {
      setFilteredPartners(partners);
    } else {
      setFilteredPartners(partners.filter(partner => partner.type === type));
    }
  };
  
  // Handle partner selection
  const handlePartnerSelect = (partner) => {
    navigation.navigate('PartnerDetails', partner);
  };
  
  // Determine marker color based on partner type
  const getMarkerColor = (type) => {
    switch(type) {
      case 'fitness':
        return '#e91e63'; // Pink
      case 'food':
        return '#4CAF50'; // Green
      case 'health':
        return '#2196F3'; // Blue
      default:
        return '#FF9800'; // Orange
    }
  };
  
  // Show loading indicator while getting location
  if (!location && !errorMsg) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#e91e63" />
        <Text style={styles.loadingText}>Getting your location...</Text>
      </View>
    );
  }
  
  // Show error message if location permission denied
  if (errorMsg) {
    return (
      <View style={styles.centerContainer}>
        <Ionicons name="warning" size={50} color="#FF9800" />
        <Text style={styles.errorText}>{errorMsg}</Text>
        <Text style={styles.errorSubtext}>
          The map will show default location instead of your current position.
        </Text>
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      {/* Map View */}
      <MapView
        style={styles.map}
        region={region}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        {/* Partner Markers */}
        {filteredPartners.map(partner => (
          <Marker
            key={partner.id}
            coordinate={{
              latitude: partner.latitude,
              longitude: partner.longitude,
            }}
            pinColor={getMarkerColor(partner.type)}
            onCalloutPress={() => handlePartnerSelect(partner)}
          >
            <Callout>
              <View style={styles.callout}>
                <Text style={styles.calloutTitle}>{partner.name}</Text>
                <Text style={styles.calloutPoints}>{partner.points} Vitality points</Text>
                <Text style={styles.calloutType}>
                  {partner.type.charAt(0).toUpperCase() + partner.type.slice(1)}
                </Text>
                <Text style={styles.calloutAction}>Tap for details</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      
      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        <TouchableOpacity 
          style={[styles.filterButton, activeFilter === 'all' && styles.activeFilter]}
          onPress={() => filterPartners('all')}
        >
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.filterButton, activeFilter === 'fitness' && styles.activeFilter]}
          onPress={() => filterPartners('fitness')}
        >
          <Text style={styles.filterText}>Fitness</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.filterButton, activeFilter === 'food' && styles.activeFilter]}
          onPress={() => filterPartners('food')}
        >
          <Text style={styles.filterText}>Food</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.filterButton, activeFilter === 'health' && styles.activeFilter]}
          onPress={() => filterPartners('health')}
        >
          <Text style={styles.filterText}>Health</Text>
        </TouchableOpacity>
      </View>
      
      {/* Implementation Note */}
      <Text style={styles.implementationNote}>
        Note: This is a simulated map view for the hackathon.
        In the actual implementation, this would connect to the Vitality API
        to display real partner locations based on your current position.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  errorText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF9800',
    textAlign: 'center',
  },
  errorSubtext: {
    marginTop: 5,
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  filterContainer: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  filterButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  activeFilter: {
    backgroundColor: '#e91e63',
  },
  filterText: {
    fontWeight: 'bold',
    color: '#333',
  },
  callout: {
    width: 200,
    padding: 10,
  },
  calloutTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  calloutPoints: {
    color: '#e91e63',
    fontWeight: 'bold',
  },
  calloutType: {
    color: '#666',
    fontSize: 12,
    marginTop: 3,
  },
  calloutAction: {
    color: '#2196F3',
    fontSize: 12,
    marginTop: 5,
    fontStyle: 'italic',
  },
  implementationNote: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 5,
    borderRadius: 5,
    color: 'yellow',
    fontSize: 8,
    textAlign: 'center',
  },
});

export default MapScreen;
