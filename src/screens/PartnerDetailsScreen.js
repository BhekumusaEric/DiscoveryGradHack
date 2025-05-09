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

const PartnerDetailsScreen = ({ route, navigation }) => {
  // Get partner data from navigation params
  const partner = route.params;
  
  // Determine icon based on partner type
  let typeIcon;
  let typeColor;
  
  switch(partner.type) {
    case 'fitness':
      typeIcon = 'fitness';
      typeColor = '#e91e63';
      break;
    case 'food':
      typeIcon = 'restaurant';
      typeColor = '#4CAF50';
      break;
    case 'health':
      typeIcon = 'medkit';
      typeColor = '#2196F3';
      break;
    default:
      typeIcon = 'star';
      typeColor = '#FF9800';
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Partner Header */}
        <View style={styles.header}>
          <View style={[styles.iconContainer, { backgroundColor: typeColor }]}>
            <Ionicons name={typeIcon} size={40} color="white" />
          </View>
          <Text style={styles.name}>{partner.name}</Text>
          <View style={styles.typeContainer}>
            <Ionicons name={typeIcon} size={16} color={typeColor} />
            <Text style={[styles.typeText, { color: typeColor }]}>
              {partner.type.charAt(0).toUpperCase() + partner.type.slice(1)}
            </Text>
          </View>
        </View>
        
        {/* Partner Details */}
        <View style={styles.detailsContainer}>
          {/* Points */}
          <View style={styles.detailItem}>
            <Ionicons name="star" size={24} color="#FFD700" />
            <View style={styles.detailContent}>
              <Text style={styles.detailLabel}>Vitality Points</Text>
              <Text style={styles.detailValue}>{partner.points} points</Text>
            </View>
          </View>
          
          {/* Distance */}
          <View style={styles.detailItem}>
            <Ionicons name="location" size={24} color="#FF5722" />
            <View style={styles.detailContent}>
              <Text style={styles.detailLabel}>Distance</Text>
              <Text style={styles.detailValue}>{partner.distance} meters away</Text>
            </View>
          </View>
          
          {/* Description */}
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>About</Text>
            <Text style={styles.descriptionText}>{partner.description}</Text>
          </View>
        </View>
        
        {/* Action Buttons */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="navigate" size={24} color="white" />
            <Text style={styles.actionText}>Get Directions</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.actionButton, styles.secondaryButton]}>
            <Ionicons name="calendar" size={24} color="white" />
            <Text style={styles.actionText}>Book Now</Text>
          </TouchableOpacity>
        </View>
        
        {/* Additional Information */}
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Earning Vitality Points</Text>
          <View style={styles.infoItem}>
            <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
            <Text style={styles.infoText}>
              Check in at this location to earn {partner.points} Vitality points
            </Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
            <Text style={styles.infoText}>
              Points are awarded once per day
            </Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
            <Text style={styles.infoText}>
              Additional points available for specific activities
            </Text>
          </View>
        </View>
        
        {/* Implementation Note */}
        <Text style={styles.implementationNote}>
          Note: This is a simulated partner details screen for the hackathon.
          In the actual implementation, this would connect to the Vitality API
          to display real partner information and enable actual bookings.
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
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  typeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  typeText: {
    marginLeft: 5,
    fontSize: 16,
  },
  detailsContainer: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  detailContent: {
    marginLeft: 15,
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
  },
  detailValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 3,
  },
  descriptionContainer: {
    paddingVertical: 15,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
  },
  actionsContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#e91e63',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  secondaryButton: {
    backgroundColor: '#2196F3',
    marginRight: 0,
    marginLeft: 5,
  },
  actionText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  infoContainer: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  infoItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 10,
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

export default PartnerDetailsScreen;
