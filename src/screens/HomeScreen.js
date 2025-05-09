import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView, 
  Image,
  SafeAreaView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>DiscoveryLens+</Text>
          <Text style={styles.subtitle}>Your AR Vitality Assistant</Text>
        </View>
        
        {/* AR Feature Card */}
        <TouchableOpacity 
          style={styles.featureCard}
          onPress={() => navigation.navigate('AR')}
        >
          <View style={styles.featureContent}>
            <Ionicons name="camera" size={40} color="#e91e63" />
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>AR View</Text>
              <Text style={styles.featureDescription}>
                Explore nearby Vitality partners through your camera
              </Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#666" />
        </TouchableOpacity>
        
        {/* Voice Assistant Card */}
        <TouchableOpacity 
          style={styles.featureCard}
          onPress={() => navigation.navigate('AR')}
        >
          <View style={styles.featureContent}>
            <Ionicons name="mic" size={40} color="#4CAF50" />
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>Voice Assistant</Text>
              <Text style={styles.featureDescription}>
                Ask questions and get guidance using your voice
              </Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#666" />
        </TouchableOpacity>
        
        {/* Map View Card */}
        <TouchableOpacity 
          style={styles.featureCard}
          onPress={() => navigation.navigate('Map')}
        >
          <View style={styles.featureContent}>
            <Ionicons name="map" size={40} color="#2196F3" />
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>Map View</Text>
              <Text style={styles.featureDescription}>
                See all Vitality partners on an interactive map
              </Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#666" />
        </TouchableOpacity>
        
        {/* Vitality Points Card */}
        <View style={styles.pointsCard}>
          <Text style={styles.pointsTitle}>Your Vitality Points</Text>
          <View style={styles.pointsContainer}>
            <Text style={styles.pointsValue}>2,500</Text>
            <Text style={styles.pointsLabel}>points</Text>
          </View>
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progress, { width: '60%' }]} />
            </View>
            <Text style={styles.progressText}>60% to Gold Status</Text>
          </View>
        </View>
        
        {/* Recent Activity */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.activityItem}>
            <Ionicons name="fitness" size={24} color="#e91e63" />
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>Gym Visit</Text>
              <Text style={styles.activityDescription}>
                You earned 100 points at Discovery Gym
              </Text>
              <Text style={styles.activityTime}>2 days ago</Text>
            </View>
          </View>
          <View style={styles.activityItem}>
            <Ionicons name="restaurant" size={24} color="#4CAF50" />
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>Healthy Meal</Text>
              <Text style={styles.activityDescription}>
                You earned 50 points at Healthy Food Market
              </Text>
              <Text style={styles.activityTime}>5 days ago</Text>
            </View>
          </View>
        </View>
        
        {/* Implementation Note */}
        <Text style={styles.implementationNote}>
          Note: This is a simulated home screen for the hackathon.
          In the actual implementation, this would connect to the Vitality API
          to display real user data and partner information.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  featureCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  featureContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  featureTextContainer: {
    marginLeft: 15,
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  pointsCard: {
    backgroundColor: '#e91e63',
    borderRadius: 10,
    margin: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  pointsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.8)',
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 10,
  },
  pointsValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
  },
  pointsLabel: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    marginLeft: 5,
  },
  progressContainer: {
    marginTop: 15,
  },
  progressBar: {
    height: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: 'white',
  },
  progressText: {
    color: 'white',
    marginTop: 5,
    fontSize: 14,
  },
  sectionContainer: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  activityItem: {
    flexDirection: 'row',
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  activityContent: {
    marginLeft: 15,
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  activityDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 3,
  },
  activityTime: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
  implementationNote: {
    margin: 10,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 5,
    fontSize: 10,
    color: '#666',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default HomeScreen;
