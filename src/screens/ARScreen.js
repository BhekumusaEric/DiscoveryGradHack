import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
  SafeAreaView,
  Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';

// Import components (to be created)
import ARView from '../components/ARView';
import VoiceAssistant from '../components/VoiceAssistant';

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
];

const ARScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [location, setLocation] = useState(null);
  const [partners, setPartners] = useState(MOCK_PARTNERS);
  const [filteredPartners, setFilteredPartners] = useState(MOCK_PARTNERS);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isListening, setIsListening] = useState(false);

  // Request permissions on component mount
  useEffect(() => {
    (async () => {
      const { status: cameraStatus } = await Location.requestForegroundPermissionsAsync();
      const { status: locationStatus } = await Location.requestForegroundPermissionsAsync();
      
      setHasPermission(
        cameraStatus === 'granted' && locationStatus === 'granted'
      );
      
      if (locationStatus === 'granted') {
        const location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      }
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

  // Handle voice command
  const handleVoiceCommand = (command) => {
    // Simple command handling for demo
    if (command.includes('food') || command.includes('restaurant')) {
      filterPartners('food');
      return 'Showing healthy food partners nearby';
    } else if (command.includes('gym') || command.includes('fitness')) {
      filterPartners('fitness');
      return 'Showing fitness partners nearby';
    } else if (command.includes('health') || command.includes('clinic')) {
      filterPartners('health');
      return 'Showing health partners nearby';
    } else if (command.includes('all') || command.includes('everything')) {
      filterPartners('all');
      return 'Showing all Vitality partners nearby';
    } else if (command.includes('points') || command.includes('balance')) {
      return 'You have 2,500 Vitality points';
    } else {
      return 'I didn\'t understand that command. Try asking about nearby partners or your points balance.';
    }
  };

  // Handle partner selection
  const handlePartnerSelect = (partner) => {
    navigation.navigate('PartnerDetails', partner);
  };

  // Show permission error if permissions not granted
  if (hasPermission === null) {
    return <View style={styles.container}><Text>Requesting permissions...</Text></View>;
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text>Camera and location access is required for AR view.</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => Alert.alert('Permission Required', 'Please enable camera and location permissions in your device settings.')}
        >
          <Text style={styles.buttonText}>Grant Permissions</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* AR View Component */}
      <ARView 
        partners={filteredPartners}
        userLocation={location}
        onPartnerSelect={handlePartnerSelect}
      />
      
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
      
      {/* Voice Assistant */}
      <VoiceAssistant 
        isListening={isListening}
        onListeningChange={setIsListening}
        onCommand={handleVoiceCommand}
      />
      
      {/* Back Button */}
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  filterContainer: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  filterButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  activeFilter: {
    backgroundColor: '#e91e63',
  },
  filterText: {
    color: 'white',
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 20,
  },
  button: {
    backgroundColor: '#e91e63',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ARScreen;
