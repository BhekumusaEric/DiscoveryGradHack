import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  Image,
  SafeAreaView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Profile Header */}
        <View style={styles.header}>
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImage}>
              <Text style={styles.profileInitials}>JD</Text>
            </View>
          </View>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.email}>john.doe@example.com</Text>
          <View style={styles.statusContainer}>
            <Ionicons name="shield-checkmark" size={16} color="#FFD700" />
            <Text style={styles.statusText}>Silver Status</Text>
          </View>
        </View>
        
        {/* Vitality Points */}
        <View style={styles.pointsCard}>
          <View style={styles.pointsHeader}>
            <Text style={styles.pointsTitle}>Vitality Points</Text>
            <TouchableOpacity>
              <Text style={styles.pointsHistory}>View History</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.pointsContainer}>
            <Text style={styles.pointsValue}>2,500</Text>
            <Text style={styles.pointsLabel}>points</Text>
          </View>
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progress, { width: '60%' }]} />
            </View>
            <View style={styles.progressLabels}>
              <Text style={styles.progressStart}>0</Text>
              <Text style={styles.progressTarget}>5,000 for Gold</Text>
            </View>
          </View>
        </View>
        
        {/* Health Goals */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Health Goals</Text>
            <TouchableOpacity>
              <Text style={styles.sectionAction}>Edit</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.goalItem}>
            <View style={styles.goalIconContainer}>
              <Ionicons name="fitness" size={24} color="#e91e63" />
            </View>
            <View style={styles.goalContent}>
              <Text style={styles.goalTitle}>Exercise</Text>
              <Text style={styles.goalDescription}>
                30 minutes of activity, 5 days a week
              </Text>
              <View style={styles.goalProgressBar}>
                <View style={[styles.goalProgress, { width: '70%' }]} />
              </View>
            </View>
          </View>
          
          <View style={styles.goalItem}>
            <View style={styles.goalIconContainer}>
              <Ionicons name="nutrition" size={24} color="#4CAF50" />
            </View>
            <View style={styles.goalContent}>
              <Text style={styles.goalTitle}>Nutrition</Text>
              <Text style={styles.goalDescription}>
                5 servings of fruits and vegetables daily
              </Text>
              <View style={styles.goalProgressBar}>
                <View style={[styles.goalProgress, { width: '40%' }]} />
              </View>
            </View>
          </View>
          
          <View style={styles.goalItem}>
            <View style={styles.goalIconContainer}>
              <Ionicons name="bed" size={24} color="#2196F3" />
            </View>
            <View style={styles.goalContent}>
              <Text style={styles.goalTitle}>Sleep</Text>
              <Text style={styles.goalDescription}>
                7-8 hours of sleep each night
              </Text>
              <View style={styles.goalProgressBar}>
                <View style={[styles.goalProgress, { width: '60%' }]} />
              </View>
            </View>
          </View>
        </View>
        
        {/* Recent Rewards */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Rewards</Text>
            <TouchableOpacity>
              <Text style={styles.sectionAction}>View All</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.rewardItem}>
            <View style={styles.rewardIconContainer}>
              <Ionicons name="cafe" size={24} color="#795548" />
            </View>
            <View style={styles.rewardContent}>
              <Text style={styles.rewardTitle}>Free Coffee</Text>
              <Text style={styles.rewardDescription}>
                Redeem at any partner coffee shop
              </Text>
              <TouchableOpacity style={styles.rewardButton}>
                <Text style={styles.rewardButtonText}>Redeem</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.rewardItem}>
            <View style={styles.rewardIconContainer}>
              <Ionicons name="film" size={24} color="#9C27B0" />
            </View>
            <View style={styles.rewardContent}>
              <Text style={styles.rewardTitle}>Movie Ticket</Text>
              <Text style={styles.rewardDescription}>
                50% off at partner cinemas
              </Text>
              <TouchableOpacity style={styles.rewardButton}>
                <Text style={styles.rewardButtonText}>Redeem</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        
        {/* Settings */}
        <View style={styles.settingsContainer}>
          <TouchableOpacity style={styles.settingsItem}>
            <Ionicons name="person" size={24} color="#666" />
            <Text style={styles.settingsText}>Account Settings</Text>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingsItem}>
            <Ionicons name="notifications" size={24} color="#666" />
            <Text style={styles.settingsText}>Notifications</Text>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingsItem}>
            <Ionicons name="shield" size={24} color="#666" />
            <Text style={styles.settingsText}>Privacy</Text>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingsItem}>
            <Ionicons name="help-circle" size={24} color="#666" />
            <Text style={styles.settingsText}>Help & Support</Text>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
          </TouchableOpacity>
        </View>
        
        {/* Implementation Note */}
        <Text style={styles.implementationNote}>
          Note: This is a simulated profile screen for the hackathon.
          In the actual implementation, this would connect to the Vitality API
          to display real user data and rewards.
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
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  profileImageContainer: {
    marginBottom: 15,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#e91e63',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitials: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  statusText: {
    color: '#FFD700',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  pointsCard: {
    backgroundColor: '#e91e63',
    margin: 10,
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  pointsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pointsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.8)',
  },
  pointsHistory: {
    color: 'white',
    fontSize: 14,
    textDecorationLine: 'underline',
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
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  progressStart: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 12,
  },
  progressTarget: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  sectionContainer: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionAction: {
    color: '#2196F3',
    fontSize: 14,
  },
  goalItem: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  goalIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  goalContent: {
    flex: 1,
  },
  goalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  goalDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 3,
    marginBottom: 8,
  },
  goalProgressBar: {
    height: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 3,
    overflow: 'hidden',
  },
  goalProgress: {
    height: '100%',
    backgroundColor: '#e91e63',
  },
  rewardItem: {
    flexDirection: 'row',
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  rewardIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  rewardContent: {
    flex: 1,
  },
  rewardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  rewardDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 3,
    marginBottom: 8,
  },
  rewardButton: {
    backgroundColor: '#e91e63',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
    alignSelf: 'flex-start',
  },
  rewardButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  settingsContainer: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  settingsText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
    flex: 1,
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

export default ProfileScreen;
